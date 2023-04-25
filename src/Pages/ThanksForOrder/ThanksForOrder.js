import React from 'react'
import thanks from '../../Assets/thanks1.gif'
import logo from '../../Assets/logo1.png'
import './ThanksForOrder.css'
import { Link } from 'react-router-dom'


const ThanksForOrder = () => {
  return (
    <div className="container">
        <div className="img-thanks">
            <img src={thanks} alt="thank you" />
        </div>
        <div className="btn-back">
         <Link to='/'><button>Back to Shop</button></Link>
        </div>
        <div className='bordImg'>
        <div className='PageProdImg'>
          <img src={logo} alt="logo"  />
        </div>
      </div>  
    </div>
  )
}

export default ThanksForOrder
