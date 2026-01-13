import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://formspree.io/f/mykkyngv",
  // baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json", //
  },
});
