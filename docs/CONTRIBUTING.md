# Contribution Guidelines

## Add new page

### File naming convention

Pages are prependended with a two or three digit number depending on whether they're part of the linear flow of application pages (2-digit) or other non-linear support pages (3-digit)

### Step-by-step

- [ ] Copy the contents of `boilerplate/blank-page-template.jsx` to a new file (e.g. `99-example.jsx`) in the `src/pages` folder
- [ ] Update the exported `meta` object with relevant information
- [ ] Import and export the page in `src/pages/index.js`
- [ ] Start the server and navigate to the newly added route (set in the page's `meta` object) you should see the placeholder content from the boilerplate and in the console all the metadata and app data avaiable to the view.
- If you need to prepare new data to add to `allWorkoutData` available to the page, that should be in done in a transformer (see below).

## Add data transformer

### What is it?

Transformers are pure functions which receive the raw JSON `data` array (parsed from user-provided CSV) and return an Object of any internal shape.

### How do I test it?

The result of the transformer should be (at least) snapshot tested in an adjacent test file to ensure any regressions are flagged in CI

### Step-by-step

- [ ] Copy the contents of `boilerplate/blank-transformer-template.js` to a new file (e.g. `example.js`) in the `src/transforms` folder
- [ ] Create a test file in `src/transforms/expample.test.js`.
- [ ] Import and export the transformer function in `src/transforms/index.js`
- [ ] Add the reference name as a constant to `TRANSFORMED_KEYS` in `src/constants.js`

## Codegen

Soon: `yarn hygen generator with-prompt new` (via `npx`)
