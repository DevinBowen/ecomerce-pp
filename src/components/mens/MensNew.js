import React, { Component } from 'react';
import '../../css/home.css';
import '../../css/mens.css';

export default class MensNew extends Component {

  render() {
    return (
      <div>
        <div className="shipping">FREE 3-DAY SHIPPING & FREE RETURNS</div>
        <div className="mens_new">
            <div className="mens_new_location"><div>HOME</div><div>/</div><div>MEN'S</div><div>// NEW ARRIVALS</div></div>
            <div className="filter">
                <div className="filter_section">STYLE</div>
                <div className="filter_section">COLOR</div>
                <div className="filter_section">BENEFITS</div>
                <div className="filter_section">ACTIVITY</div>
                <div className="filter_section">RELEVANCE</div>
            </div>
            <div className="display">
                display
            </div>
            <div className="mens_related">
                related
            </div>
        </div>
      </div>
    );
  }
}