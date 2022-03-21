const express = require("express");
const app = express();

const session = require("express-session");
const multer = require("multer");

const fs = require("fs");

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

const colors = require("colors");

colors.setTheme({
  GET: "green",
  POST: "blue",
});

let users = [
  { uid: 1, phone: "15655197127", username: "郑润宇", password: "123456" },
  { uid: 2, phone: "123", username: "测试人员", password: "123" },
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
    inspector: "",
    comment: "",
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
    inspector: "",
    comment: "",
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
    inspector: "",
    comment: "",
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
    inspector: "",
    comment: "",
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
    inspector: "",
    comment: "",
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
    inspector: "",
    comment: "",
  },
];

const isLogin = (req, res, next) => {
  if (req.session.login) next();
  else res.status(403).end();
};

app.use(express.json());

app.use(
  session({
    secret: "NyanNyanSuperCat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use("/public", express.static("public"));

app.get("/uploads", (req, res) => {
  res.json(fs.readdirSync("uploads"));
});

app.post("/uploads", upload.single("upload"), (req, res) => {
  res.redirect("/public");
});

app.use("/uploads", express.static("uploads"));

// app.use(async (req, res, next) => {
//   const wait = (ms) => {
//     return new Promise((resolve) => setTimeout(() => resolve(), ms));
//   };

//   await wait(1000);
//   next();
// });

app.use((req, res, next) => {
  const method = colors[req.method](req.method.padEnd(4, " "));
  console.log(" - ", method, req.path, req.body, req.session.id);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Welcome MeiJinERP server" });
});

app.get("/announces", (req, res) => {
  res.json([
    {
      title: "欢迎使用美进ERP系统",
      context: "目前为内侧阶段",
    },
  ]);
});

app.get("/login", isLogin, (req, res) => {
  res.json(req.session.login);
});

app.post("/login", (req, res) => {
  const phone = req.body.phone;
  const password = req.body.password;

  const user = users.filter(
    (user) => user.phone == phone && user.password == password
  )[0];

  if (user) {
    const { password, ...userData } = user;
    req.session.login = userData;
    res.json(userData);
  } else {
    res.status(401).end();
  }
});

app.get("/p/:id", isLogin, (req, res) => {
  const id = req.params.id;
  const ps = products.filter((p) => p.id == id).sort((a, b) => a.step > b.step);
  res.json(ps);
});

app.post("/p/:id/:step", isLogin, (req, res) => {
  const id = req.params.id;
  const step = req.params.step;
  const user =
    req.body.comment != undefined
      ? { inspector: req.session.login.username }
      : { worker: req.session.login.username, date: Date.now() };
  console.log(user);
  products = products.map((x) => {
    if (x.id == id && x.step == step) {
      return {
        ...x,
        ...req.body,
        ...user,
      };
    } else {
      return x;
    }
  });
  res.end();
});

const PORT = process.env.PORT ? process.env.PORT : 8080;
app.listen(PORT, () => {
  console.log("Server start at", PORT);
});
