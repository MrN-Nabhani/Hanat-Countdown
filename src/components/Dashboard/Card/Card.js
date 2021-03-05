import React, { Component } from "react";
import Header from "../../common/Typography/StyledHeader";
import CardSection from "./StyledCard.js";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CardSection radius="6px" width="750px" height="175px">
        <Header>{this.props.title}</Header>
      </CardSection>
    );
  }
}
