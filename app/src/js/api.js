import AsyncStorage from "@react-native-async-storage/async-storage";
import { setItemAsync, deleteItemAsync, getItemAsync } from "expo-secure-store";

const Ajv = require("ajv");
const ajv = new Ajv({ removeAdditional: true });

const axios = require("axios");

const send = (() => {
  const req = axios.create({
    baseURL: "http://192.168.2.10:8080",
  });

  const errorHandler = (err) => {
    const code = err.response.status;
    if (code == 401) throw new Error("用户名或密码错误");
    console.error(err);
    throw new Error("服务器连接失败");
  };

  const get = (...args) => req.get(...args).catch(errorHandler);
  const post = (...args) => req.post(...args).catch(errorHandler);

  return { get, post };
})();

const validates = {
  announce: ajv.compile({
    type: "array",
    items: {
      type: "object",
      properties: {
        title: { type: "string" },
        context: { type: "string" },
      },
      required: ["title", "context"],
    },
  }),
  login: ajv.compile({
    type: "object",
    properties: {
      uid: { type: "number" },
      username: { type: "string" },
      phone: { type: "string" },
    },
    required: ["uid", "username", "phone"],
  }),
};

export const getAnnounce = async () => {
  const { data } = await send.get("/announce");
  if (!validates.announce(data)) throw new Error("公告数据错误");
  return data;
};

export const getLogin = async () => {
  const { data } = await send.get("/login");
  if (!validates.login(data)) throw new Error("用户数据错误");
  return data;
};

export const postLogin = async (body) => {
  const { data } = await send.post("/login", body);
  console.log(data);
  if (!validates.login(data)) throw new Error("用户数据错误");
  return data;
};

export default {
  async getProductInfos(pid) {
    try {
      const res = await mjFetch(`/p/${pid}`);
    } catch (err) {
      throw new Error("无法连接服务器");
    }

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
    // return await mjFetch(`/p/${pid}/${step}`, { method: "POST", query: data });
  },
  async postProductInfo(pid, step, data) {
    const res = await mjFetch(`/p/${pid}/${step}`, {
      method: "POST",
      query: data,
    });

    if (res.status == 401) throw new Error("请登录后使用此功能");
    // if (!res.ok) throw new Error(res.status);
  },
  async getLogin() {
    const res = await mjFetch("/login");

    if (res.status == 401) throw new Error("用户不存在或密码错误");

    return res.json;
  },
  async postLogin(query) {
    const res = await mjFetch("/login", { method: "POST", query });

    if (res.status == 401) throw new Error("用户不存在或密码错误");

    return res.json;
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
