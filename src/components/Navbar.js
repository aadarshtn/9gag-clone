import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-wrap-left">
          <a href="/" className="logo"></a>
          <a href="/" className="control">
            🔀 Shuffle
          </a>
          <a href="/" className="control">
            📱 Get App
          </a>
          <a href="/" className="control">
            🛒 Shop
          </a>
          <a href="/" className="control">
            🔞
          </a>
          <a href="/" className="control">
            US Election
          </a>
          <a href="/" className="control">
            Among Us
          </a>
          <a href="/" className="control">
            Chat
          </a>
          <a href="/" className="control">
            Confession
          </a>
          <a href="/" className="control">
            ❓
          </a>
          <a href="/" className="control">
            COVID-19
          </a>
        </div>
        <div className="nav-wrap-right">
            <a className="night-mode-icon"></a>
            <a className="search-icon"></a>
          <a href="/" className="control">
            Log in
          </a>
          <button id="sign-up-control">Sign up</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
