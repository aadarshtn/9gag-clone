import React, { Component } from "react";

class KeyWordTile extends Component {
  render() {
    const { data } = this.props;
    const dark = data.nightMode;
    const { tag } = this.props;
    return (
      <div className={dark ? "keyword-tile-dark" : "keyword-tile"}>
        <a href="/">
          <h4 className={dark ? "minor-title dark" : "minor-title"}>{tag.key}</h4>
        </a>
      </div>
    );
  }
}

export default KeyWordTile;
