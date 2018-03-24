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
              <Link style={{ textDecoration: "none", marginLeft: "15px" }} to="/mens"><a>MEN'S</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/womens"><a>WOMEN'S</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/kids"><a>KIDS'</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/shoes"><a>SHOES</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/equipment"><a>EQUIPMENT</a></Link>
              <Link style={{ textDecoration: "none", marginLeft: "30px" }} to="/explore"><a>EXPLORE</a></Link>
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
            <div className="search">
            <input type="text" placeholder="Search" />
            <div className="enter_box">?</div>
            </div>
          </div>
        </header>

        <div className="body">
          {routes}
        </div>

        <footer>
          <div className="site_map">
            <div>SHOP
              <div><ul>
                  <li>Women's</li>
                  <li>Men's</li>
                  <li>Kids'</li>
                  <li>Shoes</li>
                  <li>Equipment</li>
                  <li>Gift Cards</li>
                </ul></div>
            </div>
            <div>HELP
              <ul>
                <li>FAQ?</li>
                <li>VIPeak Rewards</li>
                <li>Order Status</li>
                <li>Sizing Charts</li>
                <li>Warrenty Information</li>
                <li>Return Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>ABOUT TNF
              <div><ul>
                  <li>About Us</li>
                  <li>Responsibility</li>
                  <li>Technology & Innovation</li>
                  <li>Expeditions</li>
                  <li>Explore Fund Grants</li>
                  <li>News</li>
                  <li>Careers</li>
                </ul></div>
            </div>
            <div>EVENTS
              <ul>
                <li>Endurance Challenge</li>
                <li>Speaker Series</li>
              </ul>
            </div>
            <div>EXPLORE
              <ul>
                <li>The North Face App</li>
                <li><img src="//images.thenorthface.com/is/image/TheNorthFaceBrand/app-store?fmt=png-alpha" /></li>
              </ul>
            </div>
          </div>
          <div className="connect">
          <div className="main_top">
            <div>STORE LOCATOR</div>
            <div>FOLLOW THE NORTH FACE</div>
            <div>ENTER YOUR EMAIL</div>
          </div>
          <div className="main_bottom">
            <div className="logo"></div>
            <div>Ⓒ The North Face, A VF Company</div>
            <div>CA Supply Chains Act      UK Slavery Act</div>
            <div>Privacy Policy      Terms of Use</div>
          </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
