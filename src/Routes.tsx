import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import { RootState } from "./types/RootState";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  const { user } = useSelector((state: RootState) => state.authReducer);
  return (
    <>
      {!user ? (
        <>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Route exact path="/home" component={Home} />
          <Redirect to="/home" />
        </>
      )}
    </>
  );
};

export default connect()(Routes);
