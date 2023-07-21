import axios from "axios";

export const api = axios.create({
  baseURL: "https://portfolio-app-pht9.onrender.com",
  timeout: 10000,
});
