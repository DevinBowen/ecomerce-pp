import React, { Component } from 'react';
import '../../css/app.css';


export default class WomensDrop extends Component {
  
  
  render() {
    return (
      <div>
          {/* <div className="off_top" onMouseOver={this.turnOff}></div> */}
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
          {/* <div className="off" onMouseOver={this.turnOff}></div> */}
      </div>
    );
  }
}
