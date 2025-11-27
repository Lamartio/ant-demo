# Welcome!
This file will be used as the main description of the app.

- Control the version in `./app-config.json`
- In `./.github/workflows/release.yml`: The workflow doesn't increase the version automatically. It only syncs the version from app-config.json to package.json. You manually bump the version in [app-config.json](./app-config.json).
- The version bump will trigger a release to Gihub Pages. That [URL](https://lamartio.github.io/ant-demo/) is hostable and thus can be added to the ANT Store.
- It also includes the zipped version of the app in the [releases](https://github.com/Lamartio/ant-demo/releases) that can be uploaded to the store.
- Last option will be to generate a token and use [ANT-Connect](https://www.npmjs.com/package/@antcde/connect-ts) to upload builds.