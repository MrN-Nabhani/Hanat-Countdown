import React, { Component } from "react";
import Cards from "../Cards";
import CardSection from "../Card/StyledCard.js";
import Header from "../../../common/Header/Header.js";
import Container from "../../../common/Container/Container";
export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CardSection radius="6px" width="750px" height="175px" >
        <Container marginLeft="25px" paddingTop="10px">
          <Header>{this.props.title}</Header>
        </Container>
      </CardSection>
    );
  }
}
