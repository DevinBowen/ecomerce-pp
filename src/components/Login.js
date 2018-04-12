import React, { Component } from 'react';
import '../css/login.css';



export default class Login extends Component {

  render() {
    return (
      <div className='login'>
          <div>SIGN IN</div>
          <div>Email Address</div>
          <input type="text"/>
          <div>Password</div>
          <input type="text"/>
          <button>SIGN IN</button>
          <div>
              <div>FORGOT PASSWORD</div>
              <div>CREATE ACCOUNT</div>
          </div>
      </div>
    );
  }
}
