import React from 'react'
import './Checkout.css'
import { useCartContext } from '../../Context/ContextProvider'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo1.png'
import * as actions from '../../Context/ActionTypes'



const Checkout = () => {
    const cartContext = useCartContext()
    console.log(cartContext);
    let prices = cartContext.myCart.map((el)=> el.price)
    const add =(arr)=> arr.reduce((a, b) => a + b ,0)
    var somme =  add (prices)


    const handlOrder = ()=>{
        return (
        cartContext.myCart.map((el)=>{
            cartContext.CartDispatch(
                {type:actions.REMOVE_PRODUCT_FROM_CART , payload: el}
              )
        }))
    }
  return (
  <div className="checkout"> 
    <div className="container">
        <h2 className='Checkout-header'>Checkout</h2>
        <div className="row">
            <div className="col-md-6 inputs">
                <h3>Billing details</h3>
                <form action="submit">
                  <div className="input">
                    <label htmlFor="name">Name complet:</label><br/>
                    <input type="text" required id='name' />
                  </div>
                  <div className="input">
                    <label htmlFor="adress">Adress:</label><br/>
                    <input type="text" required id='adress' />
                  </div>
                  <div className="input">
                    <label htmlFor="phone">Phone number:</label><br/>
                    <input type="number" required id='phone' />
                  </div>
                  <div className="input">
                    <label htmlFor="name">Email adress:</label><br/>
                    <input type="email" required id='email' />
                  </div>
                  <div className="input">
                    <label htmlFor="notes">Order notes (optional):</label><br/>
                    <textarea id="notes" placeholder='Notes about your order, e.g. special notes for delivery.' />
                  </div>
                </form>
            </div>
            <div className="col-md-6 check-pay">
              <h2>Your order</h2>
              <ul>
                <li className='head-list'><span>Product</span> <span>Price</span></li>
                {cartContext.myCart.map((el)=>{
                    return (<li><span>{el.title}</span> <span>{el.price} $</span></li>)
                })}
                <li className='head-list'><span>Total:</span><span>{somme}</span></li>
              </ul>
              <Link to='/thanks'><button onClick={handlOrder}>ORDER NOW</button></Link>
            </div>
        </div>
        <div className='bordImg'>
        <div className='PageProdImg'>
          <img src={logo} alt="logo"  />
        </div>
      </div>  
    </div>
    </div>   
  )
}

export default Checkout
