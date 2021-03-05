import React, { Component } from "react";
import InputField from "../../components/common/inputField/InputField";
import StyledHeader from "../../components/common/Typography/StyledHeader";
import SubmitButton from "../../components/common/submitButton/SubmitButton";
import { LoginForm } from "./StyledLogin";
import { NavLink } from "react-router-dom";
import { post } from "../../services/apiCrud";

const initialState = {
  email: "",
  password: "",
};

export class Login extends Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    post("http://hanat-app.herokuapp.com/api/users/login", this.state)
      .then((res) => {
        localStorage.setItem("TOKEN", res.data.token);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
    this.setState(initialState);
  };

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <StyledHeader>Login</StyledHeader>

        <InputField
          name="email"
          type="email"
          value={this.state.email}
          label="Email"
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
        <p>
          don't have an account? <NavLink to="/">signup</NavLink>
        </p>
      </LoginForm>
    );
  }
}

export default Login;
