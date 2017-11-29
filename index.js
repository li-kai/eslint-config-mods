const warnInDevelopment =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  rules: {
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      warnInDevelopment,
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    // https://eslint.org/docs/rules/default-case
    'default-case': [warnInDevelopment, { commentPattern: '^no default$' }],
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': [warnInDevelopment, { allowKeywords: true }],
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: [warnInDevelopment, 'always', { null: 'ignore' }],
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': [warnInDevelopment, { allowElseIf: true }],
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      warnInDevelopment,
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': [warnInDevelopment, { exceptions: [] }],
    // https://eslint.org/docs/rules/no-labels
    'no-labels': [warnInDevelopment, { allowLoop: false, allowSwitch: false }],
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      warnInDevelopment,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
        ],
      },
    ],
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      warnInDevelopment,
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': [warnInDevelopment, 'always'],
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      warnInDevelopment,
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': [
      warnInDevelopment,
      { allowEmptyReject: true },
    ],
    // https://eslint.org/docs/rules/getter-return
    'getter-return': [warnInDevelopment, { allowImplicit: true }],
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': [warnInDevelopment, 'always'],
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': [warnInDevelopment, { requireStringLiterals: true }],
    // https://eslint.org/docs/rules/camelcase
    camelcase: [warnInDevelopment, { properties: 'never' }],
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['warn', { before: false, after: true }],
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [
      warnInDevelopment,
      { before: 'always', after: 'always' },
    ],
    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      warnInDevelopment,
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': [warnInDevelopment],
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': [warnInDevelopment, { allowForLoopAfterthoughts: true }],
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      warnInDevelopment,
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': [
      'warn',
      { skipBlankLines: false, ignoreComments: false },
    ],
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      warnInDevelopment,
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: false,
      },
    ],
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [warnInDevelopment, { defaultAssignment: false }],
    // https://eslint.org/docs/rules/one-var
    'one-var': [warnInDevelopment, 'never'],
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': [warnInDevelopment, 'always'],
    // https://eslint.org/docs/rules/semi
    semi: ['warn', 'always'],
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      warnInDevelopment,
      'always',
      {
        line: { exceptions: ['-', '+'], markers: ['=', '!'] },
        block: { exceptions: ['-', '+'], markers: ['=', '!'], balanced: true },
      },
    ],
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
      warnInDevelopment,
      'isFinite',
      'isNaN',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'event',
      'external',
      'defaultstatus',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      warnInDevelopment,
      { functions: true, classes: true, variables: true },
    ],
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [
      warnInDevelopment,
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      warnInDevelopment,
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      warnInDevelopment,
      'always',
      { ignoreConstructors: false, avoidQuotes: true },
    ],
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      warnInDevelopment,
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      warnInDevelopment,
      { destructuring: 'any', ignoreReadBeforeAssign: true },
    ],
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      warnInDevelopment,
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: true },
      },
      { enforceForRenamedProperties: false },
    ],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': [
      warnInDevelopment,
      { commonjs: true, caseSensitive: true },
    ],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      warnInDevelopment,
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*.{test,spec}.{js,jsx}',
          '**/jest.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
        ],
        optionalDependencies: false,
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': [warnInDevelopment, 'absolute-first'],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['warn', 'always', { js: 'never', jsx: 'never' }],
    // https://eslint.org/docs/rules/strict
    strict: [warnInDevelopment, 'never'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [
      warnInDevelopment,
      { forbid: ['any', 'array', 'object'] },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': [warnInDevelopment, 'never', { always: [] }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      warnInDevelopment,
      { ignoreRefs: true, allowArrowFunctions: true, allowBind: false },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': [warnInDevelopment, { ignoreCase: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      warnInDevelopment,
      { allowAllCaps: true, ignore: [] },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': [warnInDevelopment],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': [warnInDevelopment],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': [warnInDevelopment, { ignoreStateless: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': [warnInDevelopment, 'always'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      warnInDevelopment,
      { ignorePureComponents: true },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': [
      warnInDevelopment,
      { ignore: [], customValidators: [], skipUndeclared: false },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      warnInDevelopment,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'everything-else',
          'render',
        ],
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      warnInDevelopment,
      { extensions: ['.jsx'] },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': [
      warnInDevelopment,
      { allowRequiredDefaults: false },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      warnInDevelopment,
      { props: 'never', children: 'never' },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': [warnInDevelopment, { components: [] }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': [warnInDevelopment, { ignoreNonDom: false }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': [
      warnInDevelopment,
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': [
      warnInDevelopment,
      { required: { some: ['nesting', 'id'] } },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
    'jsx-a11y/heading-has-content': [warnInDevelopment, { components: [''] }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
    'jsx-a11y/no-distracting-elements': [
      warnInDevelopment,
      { elements: ['marquee', 'blink'] },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': [
      warnInDevelopment,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
    'jsx-a11y/no-autofocus': [warnInDevelopment, { ignoreNonDOM: true }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
    'jsx-a11y/media-has-caption': [
      warnInDevelopment,
      { audio: [], video: [], track: [] },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      warnInDevelopment,
      { tr: ['none', 'presentation'] },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      warnInDevelopment,
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
    'jsx-a11y/no-noninteractive-tabindex': [
      warnInDevelopment,
      { tags: [], roles: ['tabpanel'] },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [warnInDevelopment, { specialLink: ['to'] }],
    // https://github.com/gajus/eslint-plugin-flowtype/blob/master/docs/rules/boolean-style.md
    'flowtype/boolean-style': [warnInDevelopment, 'boolean'],
    // https://github.com/prettier/eslint-plugin-prettier/blob/master/docs/rules/prettier.md
    'prettier/prettier': [
      warnInDevelopment,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow',
      },
    ],
  },
};
