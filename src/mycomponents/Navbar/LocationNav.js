import React from 'react';
import './LocationNav.css';
import location_icon from './location_icon.png';
import alarm_icon from './alarm_icon.png';
import cart_icon from './cart_icon.png';
export default function LocationNav() {
  return (
    <div className='LocationNav'>
      <div className="location_icon">
        <a href="/"><img src={location_icon} alt="location_icon"/></a>
      </div>
      <div className="search_area">
      <div className='locat'></div>
      </div>
      <div className="alarm_cart">
      <div className="alarm_icon">
          <a href="/"><img src={alarm_icon} alt="alarm_icon" className='img' /></a>
      </div>
      <div className="cart_icon">
      <a href="/"><img src={cart_icon} alt="cart_icon" /></a>
      </div>
      </div>
    </div>
  )
}
