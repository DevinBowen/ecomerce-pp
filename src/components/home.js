import React, { Component } from 'react';
import "../css/home.css"


export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="main_img">
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
        <div className="three_boxes">
          <div className="box1">1</div>
          <div className="box2">2</div>
          <div className="box3">3</div>
        </div>
      </div>
    );
  }
}
