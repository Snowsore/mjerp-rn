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
    console.log(url);
    const res = await fetch(url, { method });
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export default {
  async getAnnounce() {
    return await mjFetch("/announce");
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
  async postLogin(username, password) {
    await userdata({ username, password });
    const { error, msg, userData } = await mjFetch("/login", {
      method: "POST",
      query: { username, password },
    });
    return msg;
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
