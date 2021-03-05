import React from "react";
import { Button } from "./StyledSumitButton";

function SubmitButton({ title, handleClick }) {
  return (
    <Button type="submit" onChange={handleClick}>
      {title}
    </Button>
  );
}

export default SubmitButton;
