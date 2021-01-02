# 📈 Workout Analytics

A React application to visualize workout data. Try it at https://workout-analytics.netlify.app.

## 🔥 Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/6edc21c6-07e8-4bb5-978b-7674ee04ddd5/deploy-status)](https://app.netlify.com/sites/workout-analytics/deploys) ![Build status](https://github.com/xdmorgan/workout-analytics/workflows/Main/badge.svg) [![codecov](https://codecov.io/gh/xdmorgan/workout-analytics/branch/main/graph/badge.svg?token=0PSV8858DV)](https://codecov.io/gh/xdmorgan/workout-analytics)

## 🏃‍♂️ Scripts

### Run locally

1. `yarn` : Install dependencies
1. `yarn start` : Start [create-react-app server](http://localhost:3000)

### Build & deploy

After running the project locally (see above), the following steps will product a deployment-ready build.

1. `yarn test` : Run Jest tests
1. `yarn build` : Create a production ready build
1. `yarn serve` : Start a [local server](http://localhost:3000) to preview the production build

### Contributing

For more information, [see `docs/`](./docs/CONTRIBUTING.md)

- `yarn skeletor` : Generate Skeletor styles
- `yarn typebeast` : Generate Typebeast styles
- `yarn generate:transformer`: Follow prompts to create a new transformer
- `yarn generate:page-app`: Follow prompts to create a protected app page (requires data)
- `yarn generate:page-other`: Follow prompts to create an unprotected support page
- `yarn run`: Show scripts defined in [`./package.json`](./package.json)

## 🎨 Built with

- **Framework**: React (via [create-react-app](https://github.com/facebook/create-react-app))
- **Hosting**: [Netlify](https://www.netlify.com/)
- **CI**: [GitHub Actions](https://github.com/xdmorgan/workout-analytics/actions)
- **Testing**: [Jest](https://jestjs.io/) & [react-testing-library](https://testing-library.com/)
- **Styling**: Sass Modules, [Skeletor](https://www.npmjs.com/package/@skeletor/css), and [Typebeast](https://www.npmjs.com/package/typebeast)
