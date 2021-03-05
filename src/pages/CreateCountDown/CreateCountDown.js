import React, { Component } from "react";
import InputField from "../../components/common/inputField/InputField";
import SubmitButton from "../../components/common/submitButton/SubmitButton";
import { post } from "../../services/apiCrud";
import { CountdownForm } from "./StyledCreateCountDown";

const initialState = {
  title: "",
  finishTime: "",
};

export default class CreateCountDown extends Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    post("http://hanat-app.herokuapp.com/api/countdowns", this.state)
      .then(() => {
        alert("successfuly added new countdown!");
        this.setState(initialState);
        this.props.history.goBack();
      })
      .catch(() => {
        alert("error had occured, please try again");
      });
  };
  render() {
    return (
      <CountdownForm onSubmit={this.handleSubmit}>
        <InputField
          name="title"
          type="text"
          label="Title"
          value={this.state.title}
          placeholder="movie release countdown"
          required
          handleChange={this.handleChange}
        />

        <InputField
          name="finishTime"
          type="datetime-local"
          value={this.state.finishTime}
          label="Finish Time"
          required
          handleChange={this.handleChange}
        />

        <SubmitButton title="SUBMIT" />
      </CountdownForm>
    );
  }
}
