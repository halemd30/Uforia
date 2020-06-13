import React from "react";
import "./Header.scss";

class Nav extends React.Component {
  render() {
    // onClick event for li's?
    return (
      <main className="headerMain">
        <ul>
          <li className="logo">Logo</li>
          <li className="login">Login</li>
        </ul>
      </main>
    );
  }
}

export default Nav;
