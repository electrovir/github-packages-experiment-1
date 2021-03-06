Turns out open source GitHub Packages are totally worthless because they always require a personal access token to download, requiring you to inject access tokens into _everything_ just to install packages.

# How to publish to GitHub Packages

For how to install, see https://github.com/electrovir/github-packages-experiment-2

1.  Follow the `Authenticating to GitHub Packages` steps here: https://docs.github.com/en/enterprise-server@3.4/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
2.  Add the following to your `package.json`:
    ```
    "publishConfig": {
        "registry": "https://npm.pkg.github.com"
    }
    ```
3.  Make sure the `name` in your `package.json` is scoped to your username or organization name.
4.  Run `npm publish` like normal.
