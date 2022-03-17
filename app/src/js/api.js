import AsyncStorage from "@react-native-async-storage/async-storage";

import { setItemAsync, deleteItemAsync, getItemAsync } from "expo-secure-store";

const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const schema = {
  properties: {
    foo: { type: "int32" },
  },
  optionalProperties: {
    bar: { type: "string" },
  },
};

const serialize = ajv.compileSerializer(schema);

const data = {
  foo: 1,
  bar: "abc",
};

console.log(serialize(data));

const parse = ajv.compileParser(schema);

const json = '{"foo": 1, "bar": "abc"}';
const invalidJson = '{"unknown": "abc"}';

parseAndLog(json);
parseAndLog(invalidJson);

function parseAndLog(json) {
  const data = parse(json);
  if (data === undefined) {
    console.log(parse.message);
    console.log(parse.position);
  } else {
    console.log(data);
  }
}

const axios = require("axios");
const req = axios.create({
  baseURL: "http://192.168.2.10:8080",
});

// const mjFetch = async (path, params = {}) => {
//   const method = params.method ? params.method : "GET";
//   const credentials = "include";
//   const url = queryString.stringifyUrl({
//     url: `${HOST}${path}`,
//     query: params.query,
//   });
//   const config = { method, credentials };

//   try {
//     const res = await fetch(url, config);
//     const type = res.headers.get("content-type");
//     const isJson = type?.includes("application/json");
//     const json = isJson ? await res.json() : null;
//     return { ...res, json };
//   } catch (err) {
//     console.error(err);
//     throw new Error("连接服务器失败");
//   }
// };

export default {
  async test() {
    // const res = await mjFetch("/test");
  },
  async getAnnounce() {
    const res = await req.get("/announce");
    return res.data;
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
