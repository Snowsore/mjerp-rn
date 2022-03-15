const express = require("express");
const app = express();

const session = require("express-session");

const colors = require("colors");

colors.setTheme({
  GET: "green",
  POST: "blue",
});

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

let users = [
  { uid: 1, phone: "15655197127", username: "郑润宇", password: "123456" },
];

let products = [
  {
    id: "2201153101",
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
    id: "2201153101",
    step: 2,
    type: "ASZ1",
    worker: "刘强东",
    date: Date.now(),
    number: 210,
    fail: 10,
    machine: "A01",
  },
  {
    id: "2201153101",
    step: 3,
    type: "D",
    worker: "",
    date: 0,
    number: 0,
    fail: 0,
    machine: "",
  },
  {
    id: "2201153101",
    step: 4,
    type: "",
    worker: "",
    date: 0,
    number: 0,
    fail: 0,
    machine: "",
  },
  {
    id: "2201153101",
    step: 5,
    type: "ZC9.1",
    worker: "",
    date: 0,
    number: 0,
    fail: 0,
    machine: "",
  },
  {
    id: "2201153101",
    step: 6,
    type: "Q5",
    worker: "",
    date: 0,
    number: 0,
    fail: 0,
    machine: "",
  },
  {
    id: "2201153101",
    step: 7,
    type: "W",
    worker: "",
    date: 0,
    number: 0,
    fail: 0,
    machine: "",
  },
];

app.use((req, res, next) => {
  const method = colors[req.method](req.method.padEnd(4, " "));
  const user = req.session.user ? `id: ${req.session.user.uid}` : "";
  console.log(" - ", method, req.path, user);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Welcome MeiJinERP server" });
});

app.get("/login", (req, res) => {
  const userData = req.session.userData;
  if (userData) {
    res.json({ msg: "已登录", userData });
  } else {
    res.status(401).end();
  }
});

app.post("/login", (req, res) => {
  const phone = req.query.phone;
  const password = req.query.password;

  const user = users.filter(
    (user) => user.phone == phone && user.password == password
  )[0];

  if (user) {
    const { password, ...userData } = user;
    req.session.user = userData;
    res.json(userData);
  } else {
    res.status(401).end();
  }
});

app.get("/announce", (req, res) => {
  res.json([
    {
      title: "欢迎使用美进ERP系统",
      context: "目前为内侧阶段",
    },
  ]);
});

app.get("/p/:id/:step", (req, res) => {
  const ps = products.filter((p) => p.id == req.params.id);
  res.json(ps[0]);
});

app.post("/p/:id/:step", (req, res) => {
  console.log(req.query);
  // datas[req.params.id][req.params.step][req.params.data] = req.query.value;
  res.json({ msg: "Post success" });
});

app.get("/p/:id", (req, res) => {
  const ps = products
    .filter((p) => p.id == req.params.id)
    .sort((a, b) => a.step > b.step);
  res.json(ps);
});

const PORT = process.env.PORT ? process.env.PORT : 8080;

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
