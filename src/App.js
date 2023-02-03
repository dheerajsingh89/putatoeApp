import React from 'react'
import AllPopularServiceProviders from './mycomponents/BodyContent/AllPopularServiceProviders'
import ImageHead from './mycomponents/BodyContent/ImageHead'
import Options from './mycomponents/BodyContent/Options'
import PopularServiceProducts from './mycomponents/BodyContent/PopularServiceProducts'
import ServiceWeProvide from './mycomponents/BodyContent/ServiceWeProvide'
import Footer from './mycomponents/Footer/Footer'
import LocationNav from './mycomponents/Navbar/LocationNav'
// import Navbar from './mycomponents/Navbar/Navbar'
import SearchbarNav from './mycomponents/Navbar/SearchbarNav'

export default function App() {
  return (
    <div className='App'>
      <LocationNav/>
      <div className="searchbarnav sticky-top"><SearchbarNav/></div>
      <ImageHead/>
      <Options/>
      <PopularServiceProducts/>
      <AllPopularServiceProviders/>
      <ServiceWeProvide/>
      <div className="footer sticky-bottom"><Footer/></div>
    </div>
  )
}
