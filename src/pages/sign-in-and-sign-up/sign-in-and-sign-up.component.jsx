import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = ({ currentUser }) => {
  const navigate = useNavigate();

  if (currentUser) {
    navigate("/");

    return null;
  }

  return (
    <div className="sign-in-and-sign-up-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
