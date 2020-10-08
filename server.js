const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");
const dbsteps = require("./data/knexconfig");
const server = express();

server.use(express.json());
server.use("/schemes", SchemeRouter);

server.get("/schemes", (req, res, next ) =>{
    res.status(200).json({ api: "testing for Web34 Multi-table Queries  ", query: req.query })
    next();
});
server.get("/steps", (req, res ) =>{
    /*
    select st.id, s.scheme_name as addedBySteps
    from steps as st
    join schemes as s on st.scheme_id = s.id
    */
    dbsteps.from("steps as st")
    .join("schemes as s","st.scheme_id", "=", "s.id")
    .select("st.id","s.scheme_name as addedBySteps")
    .then(steps => {
        res.status(200).json({data:steps})
    })
    .catch(err =>{
        res.status(500).json ({message :err.message})
    })
});

// const steps = 
//     {
//         "step_number": 1,
//         "instructions": "solve prime number theory",
//         "scheme_id": 1
//     }

module.exports = server;
