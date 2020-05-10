import * as consts from "../constants/user.constants";
import * as api from "../api/user.api";
import { Dispatch } from "react";
import { AnyAction } from "redux";

export const registerUser = (userInfos: Object) => (
  dispatch: Dispatch<AnyAction>
) => {
  dispatch({
    type: consts.USER_REGISTER,
    payload: api.postRegister(userInfos)
  });
};
