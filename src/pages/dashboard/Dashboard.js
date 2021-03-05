import React, { Component } from "react";
import Button from "../../components/common/Button/Button";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Card from "../../components/Dashboard/Card/Card";
import { Container, CardWrapper } from "./StyledDashboard";
import AddCardButton from "../../components/Dashboard/AddCardButton/AddCardButton";
import { get } from "../../services/apiCrud";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: "",
    cards: [],
    error: false,
  };

  componentDidMount() {
    get("http://hanat-app.herokuapp.com/api/users/me")
      .then((res) => {
        console.log(res.data.user);
        const user = res.data.user;
        this.setState({ username: user.name, cards: user.countdowns });
      })
      .catch((err) => {
        this.setState({ cards: [], error: true });
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Navbar
          title={this.state.username}
          actionButton={
            <Button color="white" bgColor="danger" title="logout" />
          }
        />
        {this.state.error && <p> AN ERROR HAD OCCURED!</p>}
        <CardWrapper>
          {this.state.cards.slice(1).map((countdown) => (
            <Card
              key={countdown.id}
              title={countdown.title}
              finishTime={countdown.finishTime}
            />
          ))}
        </CardWrapper>
        <AddCardButton />
      </Container>
    );
  }
}
