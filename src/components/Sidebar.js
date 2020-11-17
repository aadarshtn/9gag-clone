import React, { Component } from 'react';
import { SidebarTile } from './';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <SidebarTile />
                <SidebarTile />
            </div>
        );
    }
}

export default Sidebar;