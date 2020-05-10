import axios from "axios";
import { apiRoutes } from "./config.api";
import { LoginForm } from "../types/LoginForm";

export const postAuth = async (userCredentials: LoginForm) => {
  try {
    const { data } = await axios.post(apiRoutes.AUTH, userCredentials);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
