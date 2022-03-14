const express = require("express");
const app = express();

const session = require("express-session");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

let users = [
  { uid: 1, name: "王小明", username: "Snowsore", password: "123456" },
];

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
  console.log(req.method, req.path, req.query);
  console.log(req.session.user);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "welcome" });
});

app.get("/login", (req, res) => {
  const userData = req.session.userData;
  if (userData) {
    res.json({ msg: "已登录", userData });
  } else {
    res.json({ error: "未登录" });
  }
});

app.post("/login", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const user = users.filter(
    (user) => user.username == "Snowsore" && user.password == "123456"
  )[0];
  if (user) {
    const { password, ...userData } = user;
    req.session.userData = userData;
    res.json({ userData, msg: "成功登录" });
  } else {
    res.json({ error: "", msg: "登陆失败" });
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
