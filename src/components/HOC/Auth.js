import React from "react";
import { Redirect } from "react-router";

function Auth(props) {
  if (localStorage.getItem("TOKEN"))
    return <React.Fragment>{props.children}</React.Fragment>;
  else {
    return <Redirect to="/login" />;
  }
}

export default Auth;
