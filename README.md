# eloajs

A Framework in Node.js to create Server-Side scalable services in JavaScript and TypeScript +ES6

# Example

```js
const app = require("@eloajs/eloa");

var test = app.onServer({
  write: "Hello, world",
  port: 8000
});


// example of how to generate log messages with colors
app.log("hello, I'm using eloa.js", { color: "green"})

// example of how to allow to write log messages
app.log("hello, I'm using eloa.js", { record: true})
```

# Modules

You can use zlib-sync package for compress option for now.

# Support

You can take support in this server in #eloajs-support.
