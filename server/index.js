const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "welcome" });
});

app.get("/announce", (req, res) => {
  res.json([{ title: "big", context: "good" }]);
});

app.listen(80, () => {
  console.log("Server start at 80");
});
