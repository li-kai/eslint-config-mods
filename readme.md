# Eslint-config-mods

An opinionated configuration that is Airbnb + Prettier + tweaks.

## Installing

```
(
  export PKG=eslint-config-mods;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D "$PKG@latest"
)
```

## Aim

Reduce amount of package dependencies and overhead

### How it works

By copying our original configuration and "parsing" it during compile time, we no longer import configs e.g. eslint-config-prettier. 

We only have to import plugins as per normal (which is admitedly a larger part).

### Additional benefits

Configuration is no longer opaque but instead transparent. Links are injected above the rules so it is fast and easy to _understand_ why the rule was implemented.

## Maintaining

1. Install/update new configurations as devDependencies with `yarn add -D` and peerDependencies with `yarn add -P`
1. Run `yarn start`
1. Check if index.js is generated properly, and links work.
1. Commit to git
1. Publish to npm
