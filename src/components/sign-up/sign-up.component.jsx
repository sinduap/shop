import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            onChange={this.handleChange}
            value={this.state.displayName}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
