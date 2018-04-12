import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';
import './css/app.css';
import WomensDrop from './components/drop/WomensDrop';
import KidsDrop from './components/drop/KidsDrop';
import ShoesDrop from './components/drop/ShoesDrop';
import EquipmentDrop from './components/drop/EquipmentDrop';
import Login from './components/Login';
// import Test from './components/Test';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dropMens: false,
      dropWomens: false,
      dropKids: false,
      dropShoes: false,
      dropEquipment: false,
    }
    this.dropMens = this.dropMens.bind(this);
    this.turnOff = this.turnOff.bind(this);
    this.dropWomens = this.dropWomens.bind(this);
    this.dropKids = this.dropKids.bind(this);
    this.dropShoes = this.dropShoes.bind(this);
    this.dropEquipment = this.dropEquipment.bind(this);

  }

  dropMens() {
    this.setState({
      dropMens: !this.state.dropMens,
      dropWomens: false,
      dropKids: false,
      dropShoes: false,
      dropEquipment: false
    })
  }
  dropWomens() {
    this.setState({
      dropWomens: !this.state.dropWomens,
      dropMens: false,
      dropKids: false,
      dropShoes: false,
      dropEquipment: false
    })
  }
  dropKids() {
    this.setState({
      dropKids: !this.state.dropKids,
      dropMens: false,
      dropWomens: false,
      dropShoes: false,
      dropEquipment: false
    })
  }
  dropShoes() {
    this.setState({
      dropShoes: !this.state.dropShoes,
      dropMens: false,
      dropWomens: false,
      dropKids: false,
      dropEquipment: false
    })
  }
  dropEquipment() {
    this.setState({
      dropEquipment: !this.state.dropEquipment,
      dropMens: false,
      dropWomens: false,
      dropShoes: false,
      dropKids: false
    })
  }
  turnOff() {
    this.setState({
      dropMens: false,
      dropWomens: false,
      dropKids: false,
      dropShoes: false,
      dropEquipment: false
    })
  }


  render() {
    return (
      <div className="App">
      <Login className="login_hide" />
      
        <header className="header">
          <div className="headLeft">
            <Link to="/"><div className="logo"></div></Link>
            <nav className="headNav">
              <Link onMouseOver={this.dropMens} style={{ textDecoration: "none", marginLeft: "15px" }} to="/mens"><a>MEN'S</a></Link>
              <Link onMouseOver={this.dropWomens} style={{ textDecoration: "none", marginLeft: "30px" }} to="/womens"><a>WOMEN'S</a></Link>
              <Link onMouseOver={this.dropKids} style={{ textDecoration: "none", marginLeft: "30px" }} to="/kids"><a>KIDS'</a></Link>
              <Link onMouseOver={this.dropShoes} style={{ textDecoration: "none", marginLeft: "30px" }} to="/shoes"><a>SHOES</a></Link>
              <Link onMouseOver={this.dropEquipment} style={{ textDecoration: "none", marginLeft: "30px" }} to="/equipment"><a>EQUIPMENT</a></Link>
              <Link onMouseOver={this.turnOff} style={{ textDecoration: "none", marginLeft: "30px" }} to="/explore"><a>EXPLORE</a></Link>
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
              <div className="enter_box"><img src={require("./images/search.png")} alt="" /></div>
            </div>
            
          </div>
          
        </header>
        
        <div
          className={
            this.state.dropMens ?
              'drop_mens_vis' :
              'drop_mens_invis'
          }>
          <div className="off_top" onMouseOver={this.turnOff}></div>
          <div className="mens_links">
          <ul className="features">
            <li>New Arrivals</li>
            <li>Apex Flex GTX</li>
            <li style={{ height: 52 }}>Protect Bears Ears</li>
            <li style={{ height: 52 }}>Logo T-Shirts & Hoodies</li>
            <li>Extended Sizes</li>
            <li>Sale</li>
          </ul>
          <ul className="mens_lists">
            <div id="mens_lists_title"><a>Jackets & Vests</a></div>

            <li><a>Rainwear</a> </li>
            <li><a>Fleece</a></li>
            <li><a>Insulated & Down</a></li>
            <li><a>Softshells</a></li>
            <li><a>Vests</a></li>
            <li><a>Casual</a></li>
            <li><a>Skiing & Snowboarding</a></li>
            <li><a>3-in-1 Jackets</a></li>
            <li><a>Running & Training</a></li>
            <li><a>Windwear</a></li>

            <div id="mens_lists_title"><a>Accessories</a></div>

            <li><a>Beanies & Scarves</a></li>
            <li><a>Gloves</a></li>
            <li><a>Hats</a></li>
            <li><a>Backpacks</a></li>
          </ul>
          <ul className="mens_lists">
            <div id="mens_lists_title"><a>Tops</a></div>

            <li><a>Hoodies & Sweatshirts</a></li>
            <li><a>Fleece</a></li>
            <li><a>Shirts & Polos</a></li>
            <li><a>T-Shirts</a></li>
            <li><a>Running & Training</a></li>
            <li><a>Baselayers</a></li>

            <div id="mens_lists_title"><a>Shoes</a></div>

            <li><a>Boots</a></li>
            <li><a>Hiking</a></li>
            <li><a>Casual</a></li>
            <li><a>Trail Running</a></li>
            <li><a>Training</a></li>
            <li><a>Sandals</a></li>
            <li><a>Ultra Series</a></li>
          </ul>
          <ul style={{ marginRight: '240px' }} className="mens_lists">
            <div id="mens_lists_title"><a>Bottoms</a></div>
            
            <li><a>Casual & Hike</a></li>
            <li><a>Running & Training</a></li>
            <li><a>Snow Pants</a></li>
            <li><a>Baselayers</a></li>
            <li><a>Shorts</a></li>
            
            <div id="mens_lists_title"><a>Shop By Activity</a></div>
            
            <li><a>Skiing & Snowboarding</a></li>
            <li><a>Climbing</a></li>
            <li><a>Hiking</a></li>
            <li><a>Training</a></li>
            <li><a>Running</a></li>
            <li><a>Camping</a></li>
          </ul>
          </div>
          <div className="shipping_drop">FREE 3-DAY SHIPPING & FREE RETURNS</div>
          <div className="off" onMouseOver={this.turnOff}></div>
        </div>
        <div
          className={
            this.state.dropWomens ?
              'drop_womens_vis' :
              'drop_womens_invis'
          }>
          <div className="off_top" onMouseOver={this.turnOff}></div>
          <WomensDrop />
          <div className="off" onMouseOver={this.turnOff}></div>
          </div>

          <div
          className={
            this.state.dropKids ?
              'drop_kids_vis' :
              'drop_kids_invis'
          }>
          <div className="off_top" onMouseOver={this.turnOff}></div>
          <KidsDrop />
          <div className="off" onMouseOver={this.turnOff}></div>
          </div>

          <div
          className={
            this.state.dropShoes ?
              'drop_shoes_vis' :
              'drop_shoes_invis'
          }>
          <div className="off_top" onMouseOver={this.turnOff}></div>
          <ShoesDrop />
          <div className="off" onMouseOver={this.turnOff}></div>
          </div>

          <div
          className={
            this.state.dropEquipment ?
              'drop_equipment_vis' :
              'drop_equipment_invis'
          }>
          <div className="off_top" onMouseOver={this.turnOff}></div>
          <EquipmentDrop />
          <div className="off" onMouseOver={this.turnOff}></div>
          </div>

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
                  <a><li><img src="//images.thenorthface.com/is/image/TheNorthFaceBrand/app-store?fmt=png-alpha" alt="" /></li></a>
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
                  <img src="" alt="1" />
                  <img src="" alt="2" />
                  <img src="" alt="3" />
                  <img src="" alt="4" />
                  <img src="" alt="5" />
                  <img src="" alt="6" />
                </div>
              </div>
              <div>
                <div className="map_title">ENTER YOUR EMAIL</div>
                <div className="top_text">Adventure is everywhere. Even in your inbox.</div>
                <div className="top_input"><input type="text" placeholder="Email Address" /><div className="top_img">?<img src="" alt="arrow" /></div></div>
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
        
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;
