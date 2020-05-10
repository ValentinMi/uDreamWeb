import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const classes = useStyles();

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
      <div className={classes.content}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          <NavLink to="/login" className={classes.link}>
            Sign in
          </NavLink>
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          <NavLink to="/register" className={classes.link}>
            Sign up
          </NavLink>
        </Button>
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
  link: {
    color: "white",
    textDecoration: "none"
  },
  button: {
    margin: "0 30px"
  },
  content: {
    marginTop: "10%"
  }
}));

export default Register;
