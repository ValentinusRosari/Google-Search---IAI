const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("On"));
app.get("/search", require("./api/search"));
