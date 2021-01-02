---
inject: true
to: src/transforms/index.ts
before: // CODEGEN -- INJECT_TRANSFORMER_NEW_RESULT_TYPE
skip_if: import <%= h.changeCase.camel(name) %>
---
[keys.<%= h.changeCase.pascal(name) %>]?: ReturnType<typeof <%= h.changeCase.camel(name) %>>;