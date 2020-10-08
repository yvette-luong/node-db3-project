const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");
const db = require("./knexconfig");
const server = express();

server.use(express.json());
server.use("/api/schemes", SchemeRouter);

server.get("/api/posts", (req, res) => {
  db("posts")
    .then((posts) => {})
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});
module.exports = server;
