import * as userConsts from "../constants/user.constants";
import * as authConsts from "../constants/auth.constants";
import { AnyAction } from "redux";

import axios from "axios";
import decode from "jwt-decode";

const initialState = {
  user: undefined,
  isLoading: false
};

const authReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    // REGISTER

    case `${userConsts.USER_REGISTER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${userConsts.USER_REGISTER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };

    case `${userConsts.USER_REGISTER}_FULFILLED`:
      axios.defaults.headers.common["uDream-auth-token"] =
        payload.headers["udream-auth-token"];

      // Save locally token for auto auth on next connection
      localStorage.setItem(
        "uDream-auth-token",
        payload.headers["udream-auth-token"]
      );

      return {
        ...state,
        user: decode(payload.headers["udream-auth-token"]),
        isLoading: false
      };

    // AUTH

    case `${authConsts.USER_AUTH}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${authConsts.USER_AUTH}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };

    case `${authConsts.USER_AUTH}_FULFILLED`:
      axios.defaults.headers.common["uDream-auth-token"] = payload;

      // Save locally token for auto auth on next connection
      localStorage.setItem("uDream-auth-token", payload);

      return { ...state, user: decode(payload), isLoading: false };

    //AUTH WITH JWT

    case authConsts.USER_AUTH_WITH_JWT:
      if (payload) return { ...state, user: decode(payload) };
      return state;

    default:
      return state;
  }
};

export default authReducer;
