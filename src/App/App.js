import React, { Component } from 'react';

import HeaderNav from '../HeaderNav/HeaderNav'
import Footer from '../Footer/Footer'

import './App.css';

/**
 * to test random user
 * https://randomuser.me/api/
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Footer />
    </div>
    );
  }
}



export default App;
