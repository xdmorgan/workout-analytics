---
inject: true
to: src/transforms/index.ts
before: // CODEGEN -- INJECT_TRANSFORMER_NEW_IMPORT
skip_if: import <%= h.changeCase.camel(name) %>
---
import <%= h.changeCase.camel(name) %> from './<%= name %>';