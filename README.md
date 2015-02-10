# quasi-excerpt
A framework for querying arbitrary CSS pseudo elements.

**quasi-excerpt** allows you to get CSS rules that are applied to pseudo elements (e.g. :before or :after).

#### Usage
---
```
var quasi = require("quasiExcerpt");
var value = quasi.getPseudoStylePropertyValue(".textWrapper", "before", "content");
console.log("Value of CSS property 'content' on ':before' pseudo element for node '.textWrapper' is: " + value);
```
