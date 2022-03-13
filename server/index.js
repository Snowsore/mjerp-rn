const express = require("express");
const app = express();

let products = [
  {
    id: 2201153101,
    step: 1,
    type: "A",
    worker: "刘强东",
    date: Date.now(),
    number: 210,
    fail: 10,
    machine: "A01",
    inspector: "华强",
    comment: "这是测试",
  },
  {
    id: 2201153101,
    step: 2,
    type: "ASZ1",
    worker: "刘强东",
    date: Date.now(),
    type: "SZ1",
    number: 210,
    fail: 10,
    machine: "A01",
  },
  {
    id: 2201153101,
    step: 3,
    type: "D",
  },
  {
    id: 2201153101,
    step: 4,
  },
  {
    id: 2201153101,
    step: 5,
    type: "ZC9.1",
  },
  {
    id: 2201153101,
    step: 6,
    type: "Q5",
  },
  {
    id: 2201153101,
    step: 7,
    type: "W",
  },
];

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

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

app.get("/p/:id/:step", (req, res) => {
  const ps = products.filter((p) => p.id == req.params.id);
  res.json(ps[0]);
});

app.post("/p/:id/step", (req, res) => {
  console.log(req.query);
  // datas[req.params.id][req.params.step][req.params.data] = req.query.value;
  res.end();
});

app.get("/p/:id", (req, res) => {
  const ps = products
    .filter((p) => p.id == req.params.id)
    .sort((a, b) => a.step > b.step);
  res.json(ps);
});

app.listen(8080, () => {
  console.log("Server start at 8080");
});
