import { User } from "./User";

export type RootState = {
  authReducer: {
    user: User;
  };
};
