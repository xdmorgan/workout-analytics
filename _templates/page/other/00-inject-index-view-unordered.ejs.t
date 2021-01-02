---
inject: true
to: src/pages/index.js
before: // CODEGEN -- INJECT_PAGE_OTHER_UNORDERED
skip_if: meta as <%= h.changeCase.camel(name) %>
---
[<%= h.changeCase.camel(name) %>.route]: <%= h.changeCase.camel(name) %>,