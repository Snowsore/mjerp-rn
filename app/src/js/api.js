import AsyncStorage from "@react-native-async-storage/async-storage";

const HOST = "http://192.168.2.10:8080";
const queryString = require("query-string");

class ConnectionError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConnectionError";
  }
}

class ConvertError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConvertError";
  }
}

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
    throw new ConnectionError("连接服务器失败");
  }
};

export default {
  async getAnnounce() {
    const res = await mjFetch("/announce");

    try {
      let list = [];
      res.json.map((x) => list.push({ title: x.title, context: x.context }));
      console.log(list);
      return list;
    } catch (err) {
      console.error(err);
      throw new ConvertError(`获取列表失败`);
    }
  },
  async getProductInfos(pid) {
    console.log(await this.getLogin());
    return await mjFetch(`/p/${pid}`);
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
    await userdata({ phone, password });

    const res = await mjFetch("/login", {
      method: "POST",
      query: { phone, password },
    });

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
