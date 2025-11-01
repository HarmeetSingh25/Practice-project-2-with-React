import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",  // replace with your Render URL
});

export default instance;
