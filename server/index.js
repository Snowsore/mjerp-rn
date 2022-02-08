const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "welcome" });
});

app.get("/announce", (req, res) => {
  res.json(
    [...Array(100)].map((x) => ({
      title: "Title: : " + Math.random().toString(36),
      context: Math.random().toString(36),
    }))
  );
});

app.listen(8080, () => {
  console.log("Server start at 8080");
});
