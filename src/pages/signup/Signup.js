import React, { Component } from "react";
import StyledHeader from "../../components/common/Typography/StyledHeader";
import { RegistrationForm } from "./StyledSignup";
import InputField from "../../components/common/inputField/InputField";
import SubmitButton from "../../components/common/submitButton/SubmitButton";
import { post } from "../../services/apiCrud";

const initialState = {
  name: "",
  email: "",
  password: "",
  isSubmitting: false,
};

class Signup extends Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    post("http://hanat-app.herokuapp.com/api/users/register", this.state)
      .then((res) => {
        localStorage.setItem("TOKEN", res.data.token);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));

    this.setState(initialState);
  };

  render() {
    return (
      <RegistrationForm action="POST" onSubmit={this.handleSubmit}>
        <StyledHeader>Signup</StyledHeader>
        <InputField
          name="name"
          type="text"
          value={this.state.name}
          label="Username"
          placeholder="display name"
          required
          handleChange={this.handleChange}
        />

        <InputField
          name="email"
          type="email"
          label="Email"
          value={this.state.email}
          placeholder="name@domain.com"
          required
          handleChange={this.handleChange}
        />

        <InputField
          name="password"
          type="Password"
          label="Password"
          value={this.state.password}
          placeholder="********"
          required
          handleChange={this.handleChange}
        />
        <SubmitButton title="SUBMIT" />
        <p>already registered? </p>
      </RegistrationForm>
    );
  }
}

export default Signup;
