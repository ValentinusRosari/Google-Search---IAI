const express = require("express");
const app = express();

app.get("/", require("./api/search"));
