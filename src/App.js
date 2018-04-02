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
            <div className="enter_box"><img src={require("./images/search.png")} alt=""/></div>
            </div>
          </div>
        </header>

        <div className="body">
          {routes}
        </div>

        <footer>
          <div className="site_map">
          <div className="map_margin">
            <div className="map_title">SHOP
              <div><ul>
                  <a><li>Women's</li></a>
                  <a><li>Men's</li></a>
                  <a><li>Kids'</li></a>
                  <a><li>Shoes</li></a>
                  <a><li>Equipment</li></a>
                  <a><li>Gift Cards</li></a>
                </ul></div>
            </div>
            <div className="map_title">HELP
              <ul>
              <a><li>FAQ?</li></a>
              <a><li>VIPeak Rewards</li></a>
              <a><li>Order Status</li></a>
              <a><li>Sizing Charts</li></a>
              <a><li>Warrenty Information</li></a>
              <a><li>Return Policy</li></a>
              <a><li>Contact Us</li></a>
              </ul>
            </div>
            <div className="map_title">ABOUT TNF
              <div><ul>
              <a><li>About Us</li></a>
              <a><li>Responsibility</li></a>
              <a><li>Technology & Innovation</li></a>
              <a><li>Expeditions</li></a>
              <a><li>Explore Fund Grants</li></a>
              <a><li>News</li></a>
              <a><li>Careers</li></a>
                </ul></div>
            </div>
            <div className="map_title">EVENTS
              <ul>
              <a><li>Endurance Challenge</li></a>
              <a><li>Speaker Series</li></a>
              </ul>
            </div>
            <div className="map_title">EXPLORE
              <ul>
                <li>The North Face App</li>
                <a><li><img src="//images.thenorthface.com/is/image/TheNorthFaceBrand/app-store?fmt=png-alpha" /></li></a>
              </ul>
            </div>
            </div>
          </div>
          <div className="connect">
          <div className="main_top">
            <div>
              <div className="map_title">STORE LOCATOR</div>
              <div className="top_text">Explore a retail store or outlet near you.</div>
              <button>FIND A STORE</button>
            </div>
            <div>
              <div className="map_title">FOLLOW THE NORTH FACE</div>
              <div className="top_text">
                <img src="" alt="1"/>
                <img src="" alt="2"/>
                <img src="" alt="3"/>
                <img src="" alt="4"/>
                <img src="" alt="5"/>
                <img src="" alt="6"/>
              </div>
              </div>
            <div>
              <div className="map_title">ENTER YOUR EMAIL</div>
              <div className="top_text">Adventure is everywhere. Even in your inbox.</div>
              <div className="top_input"><input type="text" placeholder="Email Address"/><div className="top_img">?<img src="" alt="arrow"/></div></div>
              </div>
          </div>
          <div className="main_bottom">
            <div className="logo"></div>
            <div className="bottom_text">
            <div>Ⓒ The North Face, A VF Company</div>
            <div className="bottom_row_one">
            <div><a>CA Supply Chains Act &emsp;</a></div>
            <div><a>UK Slavery Act</a></div>
            </div>
            <div className="bottom_row_two">
            <div><a>Privacy Policy &emsp;</a></div>
            <div><a>Terms of Use</a></div>
            </div>
            </div>
          </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
