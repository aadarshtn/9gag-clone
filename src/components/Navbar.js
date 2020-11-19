import React, { Component } from "react";
import { switchTheme } from '../actions/9gag';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.dark = false;
  }
  
  switchToDark = (val) => {
    if(!this.dark){
      this.props.dispatch(switchTheme(val));
      this.dark = true;
    }else{
      this.props.dispatch(switchTheme(!val));
      this.dark = false;
    }
  }
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
            <a className={this.dark ? "night-mode-inactive-icon" : "night-mode-active-icon"} onClick={() => {this.switchToDark(true)}}></a>
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
