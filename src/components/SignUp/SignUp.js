import React from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <main className="signUpMain">
        <div className="signUpContainer">
          <h2>Demo the app!</h2>
          <p>
            This is an open application so we only need a username from you so
            you can try out the app and keep track of your progress
          </p>

          <div className="userName">
            <label htmlFor="signUpUserName">User name</label>
            <input name="userName" id="signUpUserName"></input>
          </div>

          <Link className="link" to="/taskList">
            Submit
          </Link>
        </div>
      </main>
    );
  }
}

export default SignUp;
