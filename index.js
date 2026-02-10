const expression = process.argv[2] || "2+2";
const sanitized = expression.replace(/[^0-9+\-*/(). ]/g, "");
console.log(Function(`"use strict"; return (${sanitized});`)());
