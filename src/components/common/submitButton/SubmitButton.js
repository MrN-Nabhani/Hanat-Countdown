import React from "react";
import { StyledSubmitButton } from "./StyledSumitButton";

function SubmitButton({ title, handleClick }) {
  return (
    <StyledSubmitButton type="submit" onChange={handleClick}>
      {title}
    </StyledSubmitButton>
  );
}

export default SubmitButton;
