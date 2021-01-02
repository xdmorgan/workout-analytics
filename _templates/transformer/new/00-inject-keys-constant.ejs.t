---
inject: true
to: src/transforms/keys.ts
before: // CODEGEN -- INJECT_TRANSFORMER_NEW_KEY
skip_if: <%= name %>
---
export const <%= h.changeCase.pascal(name) %> = '<%= name %>';