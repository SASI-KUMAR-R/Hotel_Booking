import React from 'react'
import Homenavbar from "../Pages/Homenavbar"
import "../Css/Home.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/hotellisting");
  }

  return (
    <div className="homepagecontainre">
      <Homenavbar/>
      <div className="homepageoffer">
        <div className="offerone">
          <h2 className='offerh1'>Quick escape, quality time</h2>
          <p className='offerpara'>Save up to 20% with a Getaway Deal</p>
          <button className='offerbutton' onClick={handleClick}>Save on Deals</button>
          <img src="https://th.bing.com/th/id/OIP.ayEdJmLs4vIAfTmgYrIlowHaFg?rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="Offer Image" className='offerimage'/>
        </div>
        <div className="offertwo">
          <h2 className='offerh2'>Book Here Save Deals With Foods</h2>
          <h2 className='offerpara2'>Save In Addition Discount For Food With Stays </h2>
          <button className='offerbutton2' onClick={handleClick}>Save With Food</button>
          <img src="https://irp-cdn.multiscreensite.com/9bcffaf9/dms3rep/multi/hotel+room+food+service.jpg" alt="Offer Image" className='offerimage2' />
        </div>
      </div>
    </div>
  )
}

export default Home