const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(express.json());
server.use("/schemes", SchemeRouter);
server.get("/schemes", (req, res, next ) =>{
    res.status(200).json({ api: "testing for Web34 Multi-table Queries  ", query: req.query })
    next();
});


module.exports = server;
