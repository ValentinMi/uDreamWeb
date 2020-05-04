import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
import { formInitalsValues, validateForm } from "./config";
import capitalize from "../../utils/capitalize";
import { RegisterForm } from "../../types/RegisterForm";
import { registerUser } from "../../actions/user.actions";

import { TextField, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, onChange] = useForm(formInitalsValues);
  const [formIsValid, setFormIsValid] = useState(false);

  const onSubmit = (form: RegisterForm) => dispatch(registerUser(form));

  useEffect(() => {
    setTimeout(() => {
      if (!validateForm(values).error) {
        setFormIsValid(true);
      }
    }, 500);
  }, [values]);

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
        <Paper elevation={3}>
          <form className={classes.form}>
            {Object.entries(values).map(([key, value]) => (
              <TextField
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
          </form>
          <Button
            variant="contained"
            color="primary"
            disabled={!formIsValid}
            onClick={() => onSubmit(values)}
          >
            Sign in
          </Button>
        </Paper>
      </div>
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
    height: "1000px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default Register;
