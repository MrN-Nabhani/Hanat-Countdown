import React from "react";
import { useHistory } from "react-router-dom";
import StyledAddCardButton from "./StyledAddCardButton";

function AddCardButton() {
  const title = "Add New Counter";
  const history = useHistory();
  const handler = () => {
    history.push(history.location.pathname + "/new-count-down");
  };
  return <StyledAddCardButton onClick={handler}>{title}</StyledAddCardButton>;
}

export default AddCardButton;
