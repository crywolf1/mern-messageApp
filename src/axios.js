import axios from "axios";

const instance = axios.create({
  baseURL: "https://messaing-app-backed.herokuapp.com/",
});

export default instance;
