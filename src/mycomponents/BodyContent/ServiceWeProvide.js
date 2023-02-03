import React from 'react'
import './PopularServiceProducts.css'
import './ServiceWeProvide.css'
import offer from './ServiceWeProvideImages/offer.jpg'
export default function ServiceWeProvide() {
  return (
    
      <div className='ServicesWeProvide'>
    <div className="heading1">
      <div>Services We Provide</div>
    </div>
    <div className="services">
        <div className="boxservice" id="boxservice1">
            <div className='image'><img src={offer} alt="" /> </div>
            <div className='texxt'>Daily Needs</div>
            </div>
        <div className="boxservice" id="boxservice2">
            <div className="image"><img src={offer} alt="" /></div>
            <div className="texxt">Construction</div>
        </div>
        <div className="boxservice" id="boxservice3">
        <div className="image"><img src={offer} alt="" /></div>
            <div className="texxt">Laundry</div></div>
        <div className="boxservice" id="boxservice4">
        <div className="image"><img src={offer} alt="" /></div>
            <div className="texxt">  Cleaning &<br />Household Needs</div>
           </div>
        <div className="boxservice" id="boxservice5">
        <div className="image"><img src={offer} alt="" /></div>
            <div className="texxt">  Consultancy</div> </div>
        <div className="boxservice" id="boxservice6">
        <div className="image"><img src={offer} alt="" /></div>
            <div className="texxt">Health</div>  </div>
    </div>
    </div>

  )
}
