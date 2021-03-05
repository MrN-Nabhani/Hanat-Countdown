import React, { Component } from "react";
import InputField from "../../components/common/inputField/InputField";
import StyledHeader from "../../components/common/Typography/StyledHeader";
import SubmitButton from "../../components/common/submitButton/SubmitButton";
import { LoginForm } from "./StyledLogin";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    isSubmitting: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    //service -> axios -> navigate to dashboard
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      email: "",
      password: "",
      isSubmitting: false,
    });
  };

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <StyledHeader>Login</StyledHeader>

        <InputField
          name="email"
          type="email"
          label="Email"
          placeholder="name@domain.com"
          required
          handleChange={this.handleChange}
        />

        <InputField
          name="password"
          type="Password"
          label="Password"
          placeholder="********"
          required
          handleChange={this.handleChange}
        />
        <SubmitButton title="SUBMIT" />
        <p>already registered? </p>
      </LoginForm>
    );
  }
}

export default Login;
