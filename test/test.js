const app = require("eloajs");

// example of how to create http server
var test = app.onServer({
  write: "Hello, world",
  port: 8000
});

// example of how to generate log messages with colors
app.log("hello, I'm using eloa.js", { color: "green"})

// example of how to allow to write log messages
app.log("hello, I'm using eloa.js", { record: true})