import * as consts from "../constants/user.constants";

const initialState = {
  user: {},
  token: ""
};

const userReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case `${consts.USER_REGISTER}_FULFILLED`:
      return {
        ...state,
        user: payload.data,
        token: payload.headers["udream-auth-token"]
      };

    default:
      return state;
  }
};

export default userReducer;
