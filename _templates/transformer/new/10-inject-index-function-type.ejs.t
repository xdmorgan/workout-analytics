---
inject: true
to: src/transforms/index.ts
before: // CODEGEN -- INJECT_TRANSFORMER_NEW_FUNCTION_TYPE
skip_if: import <%= h.changeCase.camel(name) %>
---
[keys.<%= h.changeCase.pascal(name) %>]?: typeof <%= h.changeCase.camel(name) %>;