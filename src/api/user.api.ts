import axios from "axios";
import { apiRoutes } from "./config.api";

export const postRegister = async (newUserInfos: Object) => {
  try {
    const res = await axios.post(apiRoutes.REGISTER, newUserInfos);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
