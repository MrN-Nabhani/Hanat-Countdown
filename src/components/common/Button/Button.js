import React from "react";
import StyledButton from "./StyledButton";

function Button({ title, handler, color, bgColor }) {
  return (
    <StyledButton color={color} bgColor={bgColor} onClick={handler}>
      {title}
    </StyledButton>
  );
}

export default Button;
