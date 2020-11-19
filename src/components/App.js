import React, { Component } from "react";
import { connect } from "react-redux";

import { Navbar, Sidebar, PostsList } from "./";
import { loadData } from "../actions/9gag";

class App extends Component {
  async componentDidMount() {
    const url = "http://localhost:8000/";
    const response = await fetch(url).then((res) => res.json());
    const data = response.data;
    // console.log(data);
    this.props.dispatch(loadData(data));
  }

  render() {
    const { data } = this.props;
    const dark = data.nightMode;
    console.log(data);
    return (
      <div className={dark ? "dark-app" : "light-app"}>
        {data.loading ? (
          <div className="loading-screen">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3305/3305803.svg"
              alt="loading-image"
            ></img>
          </div>
        ) : (
          <div>
            <Navbar dispatch={this.props.dispatch}/>
            <main>
              <Sidebar data={data}/>
              <PostsList data={data} dispatch={this.props.dispatch} />
            </main>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
    posts: state.posts
  };
}

export default connect(mapStateToProps)(App);
