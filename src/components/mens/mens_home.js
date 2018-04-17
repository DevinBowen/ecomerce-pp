import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/home.css';



export default class Mens_Home extends Component {

    render() {
        return (
            <div className="mens_home">
            <div className="shipping">FREE 3-DAY SHIPPING & FREE RETURNS</div>
                <div className="mens_nav">
                    <div>MEN'S</div>
                    <Link style={{ textDecoration: "none" }} to="/"><a>JACKET & VESTS</a></Link>
                    <div>|</div>
                    <Link style={{ textDecoration: "none" }} to="/"><a>SHIRTS & TOPS</a></Link>
                    <div>|</div>
                    <Link style={{ textDecoration: "none" }} to="/"><a>BOTTOMS</a></Link>
                    <div>|</div>
                    <Link style={{ textDecoration: "none" }} to="/"><a>SHOES</a></Link>
                    <div>|</div>
                    <Link style={{ textDecoration: "none" }} to="/"><a>ACCESSORIES</a></Link>
                </div>
                <div className="mens_main">

                </div>
                <div className="mens_three">
                    <div>
                        <img src={require('../../images/mens_left.jpg')} alt="left"/>
                        <div>APEX FLEX GTX®</div>
                        <div>Unparalleled Gore-Tex® protection and comfort.</div>
                        <button>SHOP ALL RAINWEAR</button>
                    </div>
                    <div>
                    <img src={require('../../images/mens_middle.jpg')} alt="middle"/>
                    <div>FLEECE THAT DOES IT ALL</div>
                    <div>Ace layering for warmth with fleece that's also sleek and stylish.</div>
                    <button>SHOP ALL FLEECE</button>
                    </div>
                    <div>
                    <img src={require('../../images/mens_right.jpg')} alt="right"/>
                    <div>MOVE MOUNTAINS</div>
                    <div>Meet five women who are changing the face of exploration.</div>
                    <button>DISCOVER THEIR STORIES</button>
                    </div>
                </div>
            </div>
        );
    }
}
