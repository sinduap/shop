import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = ({ currentUser }) => {
  const navigate = useNavigate();

  if (currentUser) {
    navigate("/");

    return null;
  }

  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(SignInAndSignUp);
