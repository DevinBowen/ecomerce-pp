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
                        <li>Rainwear</li>
                        <li>Logo T-Shirts & Hoodies</li>
                        <li>Sale</li>
                    </ul>
                </div>
                <div className="shipping_drop">FREE 3-DAY SHIPPING & FREE RETURNS</div>
                {/* <div className="off" onMouseOver={this.turnOff}></div> */}
            </div>
        );
    }
}
