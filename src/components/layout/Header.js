import React, { Component } from 'react';
import './Layout.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <div className="logo-content">
            <img src="./../../img/BUYHOME.png" alt="logo" className="logo" />
            <p className="logo-text">Купи доМ</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;