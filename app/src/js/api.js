const queryString = require("query-string");

const mjFetch = async (path, config = {}) => {
  const query = config.query ? queryString.parse(config.query) : "";
  const method = config.method ? config.method : "GET";

  const url = `http://192.168.2.10:8080${path}${query}`;
  const fetchConfig = {
    method,
  };

  try {
    const res = await fetch(url, fetchConfig);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
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
};
