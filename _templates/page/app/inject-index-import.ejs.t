---
inject: true
to: src/pages/index.js
before: // CODEGEN -- INJECT_PAGE_IMPORT
# skip_if: meta as <%= h.changeCase.camel(name) %>
---
import { meta as <%= h.changeCase.camel(name) %> } from './<%= name %>';