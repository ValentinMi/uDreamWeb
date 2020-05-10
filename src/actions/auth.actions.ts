import * as consts from "../constants/auth.constants";
import * as api from "../api/auth.api";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { LoginForm } from "../types/LoginForm";

export const authUser = (userCredentials: LoginForm) => (
  dispatch: Dispatch<AnyAction>
) => {
  dispatch({
    type: consts.USER_AUTH,
    payload: api.postAuth(userCredentials)
  });
};

export const authUserWithJWT = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: consts.USER_AUTH_WITH_JWT,
    payload: localStorage.getItem("uDream-auth-token")
  });
};
