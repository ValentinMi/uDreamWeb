import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
import { formInitalsValues, validateForm } from "./config";
import capitalize from "../../utils/capitalize";
import { RegisterForm } from "../../types/RegisterForm";
import { registerUser } from "../../actions/user.actions";

import { TextField, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, onChange] = useForm(formInitalsValues);
  const [error, setError] = useState<string>();

  const onSubmit = (form: RegisterForm) => {
    const error = validateForm(values).error;
    if (values.password !== values["password confirmation"]) {
      return setError("Passwords don't match");
    }
    if (error) {
      return setError(error.message);
    }

    delete values["password confirmation"];

    dispatch(registerUser(form));
  };

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
          Sign up now !
        </Typography>
        <Paper elevation={3} className={classes.paper}>
          <span className={classes.error}>{error}</span>
          <form className={classes.form}>
            {Object.entries(values).map(([key, value]) => (
              <TextField
                className={classes.input}
                key={key}
                label={capitalize(key)}
                name={key}
                value={value}
                type={
                  key === "password" || key === "password confirmation"
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
              onClick={() => onSubmit(values)}
            >
              Sign up
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
        <NavLink to="/Login" className={classes.link}>
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
  },
  paper: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column"
  },
  error: {
    color: "red",
    margin: "0 auto"
  }
}));

export default Register;
