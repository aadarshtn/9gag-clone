import React, { Component } from 'react';

import { Navbar,Sidebar } from './'; 

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <main>
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default App;