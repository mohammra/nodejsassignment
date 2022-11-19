"use strict";
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the first line of our webpage");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }

  res.end(`
  <p> 
  we cant do this , please click this link to go back in home page <a href = '/'>back</a></p>`);
});
server.listen(8001);
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
