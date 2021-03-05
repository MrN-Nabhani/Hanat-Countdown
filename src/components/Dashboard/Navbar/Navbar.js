import React from "react";
import StyledNavbar from "./StyledNavbar";
import Header from "../../common/Typography/StyledHeader";

function Navbar({ title, actionButton }) {
  return (
    <StyledNavbar>
      <Header>{title}'s Countdowns</Header>
      {actionButton}
    </StyledNavbar>
  );
}

export default Navbar;
