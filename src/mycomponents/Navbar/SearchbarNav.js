import React, { useState } from 'react';
import './SearchbarNav.css';
import microphone from './microphone.png';
export default function SearchbarNav() {
  
  return (
    <div className='SearchbarNav'>
      <div className="container">
<div className="justify-content-center align-items-center">
  <div className="col-md-12">
    <div className="form">
      <i className="fa fa-search"></i>
      <input type="text" className="form-control form-input" placeholder="Search anything..."/> 
    </div>    
  </div>  
  <div className="microphone_icon"><img src={microphone} alt="img" /></div>
</div>

</div>

</div>
  )
}
