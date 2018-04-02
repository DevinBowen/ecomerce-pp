import React, { Component } from 'react';
import "../css/home.css"


export default class Home extends Component {

  render() {
    return (
      <div className="home">
      <div className="shipping">FREE 3-DAY SHIPPING & FREE RETURNS</div>
        <div className="main_img">
        <div>
          <div><img src={require("../images/Logo_Summit-Series-Horizontal-White.svg")} alt="summit logo" /></div>
          <div>ATHLETE
            <br/>
              TESTED.
              <br/>
              EXPEDITION
              <br/>
              PROVEN.</div>
              <div><button>EXPLORE THE COLLECTION</button></div>
          </div>
          <div className="right_main">
          <div className="right_one">Caro Ciavaldini: La Guerre Sainte</div>
          <div className="right_two">Wadi Rum Preserve, Jordan</div>
          </div>
        </div>
        <div className="three_boxes">
          <div className="box1"><img src={require("../images/home_middle.jpg")} alt=""/>
          <div className="box_margin">
          <div className="box_title">TAKE A HIKE</div>
          <div className="box_text">Bag more peaks with technical gear that's built for the trails.</div>
          <button>SHOP MEN'S</button>
          <br/>
          <button>SHOP WOMMEN'S</button>
          </div>
          </div>
          <div className="box2"><img src={require("../images/home_left.jpg")} alt=""/>
          <div className="box_margin">
          <div className="box_title">APEX FLEX GTR® SEEK NO SHELTER</div>
          <div className="box_text">Ultra-Soft. Impossibly Dry.</div>
          <button>DISCOVER THE JACKET</button>
          </div>
          </div>
          <div className="box3"><img src={require("../images/home_right.jpg")} alt=""/>
          <div className="box_margin">
          <div className="box_title">THE ULTRA FASTPACK COLLECTION</div>
          <div className="box_text">Lighter, faster, more durable. The next generation of performance.</div>
          <button>SHOP MEN'S</button>
          <br/>
          <button>SHOP WOMEN'S</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
