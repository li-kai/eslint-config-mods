/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs-extra');
const { CLIEngine } = require('eslint');
const getPkgRepo = require('get-pkg-repo');

const OFF_RULE = 'off';
const WARN_RULE = 'warn';
const ERROR_RULE = 'error';
const NUM_TO_STR_RULE = {
  0: OFF_RULE,
  1: WARN_RULE,
  2: ERROR_RULE,
};
const cli = new CLIEngine({ fix: true });
const config = cli.getConfigForFile('./index.js');

const rules = {};

function getLinkForPlugin(rule) {
  const result = rule.match(/^([\w-]+)\/([\w-]+)$/);
  if (result) {
    const [_, pluginName, ruleName] = result;
    const fullPluginName = `eslint-plugin-${pluginName}`;
    const pkgJson = fs.readJsonSync(
      `./node_modules/${fullPluginName}/package.json`,
    );
    const gitRepoPath = getPkgRepo(pkgJson).browse();
    return `${gitRepoPath}/blob/master/docs/rules/${ruleName}.md`;
  }
  return `https://eslint.org/docs/rules/${rule}`;
}

Object.entries(config.rules)
  .sort(
    ([ruleA], [ruleB]) =>
      // native rules then plugins
      ruleA.localeCompare(ruleB) && ruleA.includes('/') && ruleB.includes('/'),
  )
  .forEach(([ruleName, value]) => {
    let ruleResult = value;

    // Convert rules to string form
    if (Array.isArray(value) && Number.isInteger(value[0])) {
      ruleResult[0] = NUM_TO_STR_RULE[value[0]];
    } else if (Number.isInteger(value)) {
      ruleResult = NUM_TO_STR_RULE[value];
    }

    // Only include if it is activated
    if (value !== OFF_RULE && (Array.isArray(value) && value[0] !== OFF_RULE)) {
      rules[ruleName] = {
        rule: ruleResult,
        link: getLinkForPlugin(ruleName),
      };
    }
  });

let rulesJs = '';
Object.entries(rules).forEach(([key, { rule, link }]) => {
  const commentLink = `\n    // ${link}`;
  const ruleJs = `\n    '${key}': ${JSON.stringify(rule)},`;
  rulesJs += commentLink + ruleJs;
});
rulesJs = rulesJs.replace(/"error"/g, 'warnInDevelopment');

const fileContent = `const warnInDevelopment =
process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = { rules: { ${rulesJs} } };`;

const { output } = cli.executeOnText(fileContent).results[0];
fs.writeFileSync('index.js', output);
