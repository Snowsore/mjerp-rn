import AsyncStorage from "@react-native-async-storage/async-storage";

const axios = require("axios");

const send = (() => {
  const req = axios.create({
    baseURL: "http://39.99.52.246:4000",
  });

  const errorHandler = (err) => {
    if (err.response) {
      const code = err.response.status;
      if (code == 401) throw new Error("用户名或密码错误");
      if (code == 403) throw new Error("登录信息已过期，请重新登录");
      throw err;
    } else {
      throw new Error("服务器连接失败");
    }
  };

  const get = async (...args) => {
    return await req.get(...args).catch(errorHandler);
  };
  const post = async (...args) => {
    return await req.post(...args).catch(errorHandler);
  };

  return { get, post };
})();

export const getAnnounces = async () => {
  const { data } = await send.get("/announces");
  return data;
};

export const getLogin = async () => {
  const { data } = await send.get("/login");
  return data;
};

export const postLogin = async (body) => {
  const { data } = await send.post("/login", body);
  return data;
};

export const getProductInfos = async (pid) => {
  const { data } = await send.get(`/p/${pid}`);
  return data;
};

export const postProductInfo = async (pid, step, body) => {
  const { data } = await send.post(`/p/${pid}/${step}`, body);
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
