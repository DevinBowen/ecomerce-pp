import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';
import './css/app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        <div className="headLeft">
          <div className="logo">logo</div>
          <nav className="headNav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          </div>
          <div className="headRight">
            <div className="directory">directory</div>
            <div className="search">search</div>
          </div>
        </header>

        <div className="body">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
