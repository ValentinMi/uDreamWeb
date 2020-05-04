import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

export const apiRoutes = Object.freeze({
  REGISTER: "/users"
});
