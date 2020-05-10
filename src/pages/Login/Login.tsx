import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import useForm from "../../hooks/useForm";
import { formInitalsValues, validateForm } from "./config";
import capitalize from "../../utils/capitalize";
import { LoginForm } from "../../types/LoginForm";
import { authUser } from "../../actions/auth.actions";
import { NavLink, useHistory } from "react-router-dom";

import { TextField, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { User } from "../../types/User";

import { authUserWithJWT } from "../../actions/auth.actions";

interface LoginProps {}

interface RootState {
  authReducer: {
    user: User;
  };
}

const Login: React.FC<LoginProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state: RootState) => state.authReducer);

  const [values, onChange] = useForm(formInitalsValues);
  const [formIsValid, setFormIsValid] = useState(false);

  const onSubmit = (form: LoginForm) => dispatch(authUser(form));

  useEffect(() => {
    setTimeout(() => {
      if (!validateForm(values).error) {
        setFormIsValid(true);
      }
    }, 500);
  }, [values]);

  // For auto auth
  useEffect(() => {
    if (user === undefined) {
      dispatch(authUserWithJWT());
    } else {
      history.push("/home");
    }
  }, [history, user, dispatch]);

  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        className={classes.title}
      >
        Welcome to uDream
      </Typography>
      <div className={classes.formContainer}>
        <Typography
          variant="h3"
          component="h3"
          align="center"
          className={classes.title}
        >
          Sign in now !
        </Typography>
        <Paper elevation={3} style={{ marginTop: "50px" }}>
          <form className={classes.form}>
            {Object.entries(values).map(([key, value]) => (
              <TextField
                className={classes.input}
                key={key}
                label={capitalize(key)}
                name={key}
                value={value}
                type={
                  key === "password"
                    ? "password"
                    : key === "email"
                    ? "email"
                    : "text"
                }
                onChange={e => onChange(e)}
                required
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              disabled={!formIsValid}
              onClick={() => onSubmit(values)}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        <NavLink to="/register" className={classes.link}>
          Or sign in
        </NavLink>
      </Button>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: theme.palette.info.main
  },
  formContainer: {
    width: "700px",
    height: "1000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "500px",
    width: "500px"
  },
  input: {
    width: "80%"
  },
  link: {
    color: "white",
    textDecoration: "none"
  },
  button: {
    margin: "0 30px"
  }
}));

export default connect()(Login);
