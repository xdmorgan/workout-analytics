---
inject: true
to: src/pages/index.js
before: // CODEGEN -- INJECT_PAGE_APP_VIEW_ORDERED
skip_if: meta as <%= h.changeCase.camel(name) %>
---
<%= h.changeCase.camel(name) %>