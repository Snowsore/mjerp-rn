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
  getAnnounce() {
    return mjFetch("/announce");
  },
  getProductInfos(pid) {
    return mjFetch(`/p/${pid}`);
  },
  postProductionInfos(pid, step, data) {
    return mjFetch(`/p/${pid}/${step}`, { method: "POST", query: data });
  },
  postProduction(data) {
    return mjFetch(`/p/${pid}/${step}`, { method: "POST", query: data });
  },
  postLogin(username, password) {
    return mjFetch(`/login`, { method: "POST", query: { username, password } });
  },
};
