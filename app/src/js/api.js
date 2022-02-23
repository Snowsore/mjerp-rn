const host = "http://192.168.1.10:8080";

export default {
  async getAnnounce() {
    const res = await fetch(`${host}/announce`);
    return res.json();
  },
};
