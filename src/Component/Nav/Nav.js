import React from 'react'
import './Nav.css'
import { MdShoppingBasket  } from "react-icons/md";
import logo from '../../Assets/logo1.png'
import OffCanvas from '../OffCanvas/OffCanvas';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/ContextProvider';

const Nav = () => {
  const cartContext = useCartContext()
  return (
    <div className="Nav">
      <div className="container">
       <div className='NavBar'>
          <OffCanvas/>
          <Link to='/'><img src={logo} alt="logo"/></Link>
           <Link to='/Cart' className='link-cart-icon'><MdShoppingBasket className='icon-cart'/><span>{cartContext.myCart.length}</span></Link> 
       </div>
      </div>
    </div>
  )
}

export default Nav
