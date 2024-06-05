const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/search/:medicineName", (req, res) => {
  const medicineName = req.params.medicineName;
  const googleSearchUrl = `https://www.google.com/search?q=Beli+obat+${encodeURIComponent(
    medicineName
  )}`;
  res.json({ url: googleSearchUrl });
});

module.exports = app;
