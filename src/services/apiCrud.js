import axios from "axios";

export const post = (url, data) => axios.post(url, data);

export const get = (url) => axios.get(url);
