import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const middlewares = [thunk, promise];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
