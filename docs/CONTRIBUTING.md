# Contribution Guidelines

## Add page

1. coming soon

## Add data transformer

### What is it?

From the raw JSON `data` array that is passed into this pure function, a deterministic Object of any shape should be returned

### How do I test it?

The result of the transformer should be (at least) snapshot tested in an adjacent test file to ensure any regressions are flagged in CI

### So... the steps?

- [ ] Copy the contents of `boilerplate/blank-transformer-template.js` to a new file (e.g. `example.js`) in the `src/transforms` folder
- [ ] Create a test file in `src/transforms/expample.test.js`.
- [ ] Import and export the transformer function in `src/transforms/index.js`
- [ ] Add the reference name as a constant to `TRANSFORMED_KEYS` in `src/constants.js`
