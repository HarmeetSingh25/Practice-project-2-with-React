import axois from "axios";
const instance = axois.create({
  baseURL: "http://localhost:3000/",
});
export default instance;
