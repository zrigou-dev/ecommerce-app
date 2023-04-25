import React from 'react'
import './TotalCart.css'
import { useCartContext } from '../../Context/ContextProvider'


const TotalCart = () => {
    const cartContext = useCartContext()
    let prices = cartContext.myCart.map((el)=> el.price)
    const add =(arr)=> arr.reduce((a, b) => a + b ,0)
    var somme =  add (prices)
  return (
    <div className="container">
     <div className="row">
       <div className="col-md-4"></div>
       <div className="col-md-4"></div>
       <div className="col-md-4 cart-total">
         <h2>CART TOTALS</h2>
           <div className="Subtotal">
             <p>Subtotal:</p>
             <p>{somme}$</p>
           </div>
           <div className="Total">
            <p>Total:</p>
            <p>{somme}$</p>
           </div>
           <a href='/checkout'><button> CHECKOUT</button> </a>
       </div>
     </div>
    </div>
  )
}

export default TotalCart
