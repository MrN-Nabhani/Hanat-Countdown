import React, { Component } from "react";
import Button from "../../components/common/Button/Button";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Card from "../../components/Dashboard/Card/Card";
import { Container, CardWrapper } from "./StyledDashboard";
import AddCardButton from "../../components/Dashboard/AddCardButton/AddCardButton";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Navbar
          title="NAME"
          actionButton={
            <Button color="white" bgColor="danger" title="logout" />
          }
        />
        <CardWrapper>
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <Card
                key={idx}
                title="countdown-title"
                countdown="YYMM:DD:HH:MM:SS APM"
              />
            ))}
        </CardWrapper>
        <AddCardButton />
      </Container>
    );
  }
}
