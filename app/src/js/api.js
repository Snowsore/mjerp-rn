import AsyncStorage from "@react-native-async-storage/async-storage";

const HOST = "http://192.168.2.10:8080";
const queryString = require("query-string");

const mjFetch = async (path, config = {}) => {
  const method = config.method ? config.method : "GET";
  const url = queryString.stringifyUrl({
    url: `${HOST}${path}`,
    query: config.query,
  });

  try {
    const res = await fetch(url, { method });
    const type = res.headers.get("content-type");
    const isJson = type?.includes("application/json");
    const json = isJson ? await res.json() : null;
    return { ...res, json };
  } catch (err) {
    console.error(err);
    throw new Error("连接服务器失败");
  }
};

export default {
  async getAnnounce() {
    const res = await mjFetch("/announce");

    try {
      const announces = res.json.map((x) => {
        const title = String(x.title.valueOf());
        const context = String(x.title.valueOf());
        return { title, context };
      });
      return announces;
    } catch (err) {
      console.error(err);
      throw new Error("获取列表失败");
    }
  },
  async getProductInfos(pid) {
    const res = await mjFetch(`/p/${pid}`);

    try {
      const infos = res.json.map((x) => {
        const id = String(x.id.valueOf());
        const step = Number(x.step.valueOf());
        const worker = String(x.worker.valueOf());
        const date = Number(x.date.valueOf());
        const type = String(x.type.valueOf());
        const number = Number(x.number.valueOf());
        const fail = Number(x.fail.valueOf());
        const machine = String(x.machine.valueOf());
        return { id, step, worker, date, type, number, fail, machine };
      });
      return infos;
    } catch (err) {
      console.error(err);
      throw new Error("获取产品信息失败");
    }
  },
  async postProductionInfos(pid, step, data) {
    console.log(await this.getLogin());
    return await mjFetch(`/p/${pid}/${step}`, { method: "POST", query: data });
  },
  async postProduction(data) {
    console.log(await this.getLogin());
    return await mjFetch(`/p/${pid}/${step}`, { method: "POST", query: data });
  },
  async getLogin() {
    const res = await mjFetch("/login");
    return res;
  },
  async postLogin(phone, password) {
    const res = await mjFetch("/login", {
      method: "POST",
      query: { phone, password },
    });

    try {
      const uid = Number(res.json.uid.valueOf());
      const username = String(res.json.username.valueOf());
      const phone = String(res.json.phone.valueOf());
      const login = { uid, username, phone };
      return login;
    } catch (err) {
      console.error(err);
      throw new Error("用户不存在或密码错误");
    }
  },
  async postInspect(pid, step, data) {
    return await mjFetch(`/p/${pid}/${step}`, { method: "POST", query: data });
  },
};

const userdata = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@userdata", jsonValue);
  } catch (err) {
    console.error(err);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@userdata");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
