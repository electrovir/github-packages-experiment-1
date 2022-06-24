# How to publish to GitHub Packages

1.  Follow the `Authenticating to GitHub Packages` steps here: https://docs.github.com/en/enterprise-server@3.4/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
2.  Add the following to your `package.json`:
    ```
    "publishConfig": {
        "registry": "https://npm.pkg.github.com"
    }
    ```
3.  Make sure the `name` in your `package.json` is scoped to your username or organization name.
4.  Run `npm publish` like normal.
