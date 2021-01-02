---
inject: true
to: src/transforms/index.ts
before: // CODEGEN -- INJECT_TRANSFORMER_NEW_FUNCTION
skip_if: import <%= h.changeCase.camel(name) %>
---
[keys.<%= h.changeCase.pascal(name) %>]: <%= h.changeCase.camel(name) %>,