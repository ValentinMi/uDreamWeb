import React from "react";
import { Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Welcome from "./pages/Welcome/Welcome";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </>
  );
};

export default Routes;
