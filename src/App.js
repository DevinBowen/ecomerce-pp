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
            <Link to="/"><div className="logo"></div></Link>
            <nav className="headNav">
              <Link style={{ textDecoration: "none" }} to="/"><a>MEN'S</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/about"><a>WOMEN'S</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/"><a>KIDS'</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/"><a>SHOES</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/"><a>EQUIPMENT</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/"><a>EXPLORE</a></Link>
            </nav>
          </div>
          <div className="headRight">
            <div className="directory">
              <nav className="directoryNav">
                <Link style={{ textDecoration: "none" }} to="/"><a>FIND A STORE</a></Link>
                <Link style={{ textDecoration: "none", marginLeft: "15px" }} to="/about"><a>US</a></Link>
                <Link style={{ textDecoration: "none", marginLeft: "15px" }} to="/"><a>HELP</a></Link>
                <Link style={{ textDecoration: "none", marginLeft: "15px" }} to="/"><a>SIGN IN</a></Link>
                <Link style={{ textDecoration: "none", marginLeft: "15px" }} to="/"><a>CART</a></Link>
              </nav>
            </div>
            <div className="search"><input type="text" placeholder="Search" /></div>
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
