const express = require("express");
const app = express();
const port = 5000;

app.get("/search/:medicineName", (req, res) => {
  const medicineName = req.params.medicineName;
  const googleSearchUrl = `https://www.google.com/search?q=Beli+obat+${encodeURIComponent(
    medicineName
  )}`;
  res.json({ url: googleSearchUrl });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
