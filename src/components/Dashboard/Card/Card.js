import React from "react";
import CardSection, { CardTitle, CardTime } from "./StyledCard.js";

function Card({ title, countdown }) {
  return (
    <CardSection>
      <CardTitle>{title}</CardTitle>
      <CardTime>{countdown}</CardTime>
    </CardSection>
  );
}

export default Card;
