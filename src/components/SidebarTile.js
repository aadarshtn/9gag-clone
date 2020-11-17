import React, { Component } from "react";

class SidebarTile extends Component {
  render() {
    return (
      <div className="sidebar-tile">
        <div className="sidebar-tile-left">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3572/3572284.svg"
            alt="hot-icon"
            className="small-icon"
          ></img>
          <h4 className="sidebar-tile-label">Hot</h4>
        </div>
        <div className="sidebar-tile-right">
          <a className="more-options-hot-only"></a>
        </div>
      </div>
    );
  }
}

export default SidebarTile;
