import React from "react";
import { Route } from "react-router-dom";
import Register from "./pages/Register/Register";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return <Route exact path="/register" component={Register} />;
};

export default Routes;
