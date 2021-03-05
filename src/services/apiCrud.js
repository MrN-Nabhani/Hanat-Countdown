import axios from "axios";

export const post = (url, data) => {
  const TOKEN = window.localStorage.TOKEN;
  axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
  return axios.post(url, data);
};

export const get = (url) => {
  const TOKEN = window.localStorage.TOKEN;
  axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
  return axios.get(url);
};

// nn@gmail.com n
