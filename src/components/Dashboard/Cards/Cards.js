import React, { Component } from "react";
import getConnection from "../../../Services/getConnection.js";
import Card from "./Card/Card.js";
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loaded: false,
    };
  }
  componentDidMount() {
    /*  getConnection("url").then((response) => {
      let data = response.data;
      this.setState({ cards: data.cards, loaded: true });
      //title , id , finishTime
    });*/
  }

  render() {
    let cards;
    if (this.state.loaded) {
      cards = this.state.cards.map((card) => {
        return (
          <Card title={card.title} key={card.id} finishTime={card.finishTime} />
        );
      });
    }
    return <div>{cards}</div>;
  }
}
