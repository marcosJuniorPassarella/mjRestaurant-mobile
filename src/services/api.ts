import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.5.110:3333",
});

export { api };
