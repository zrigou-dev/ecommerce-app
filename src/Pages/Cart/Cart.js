import React from 'react'
import { useCartContext } from '../../Context/ContextProvider'
import './Cart.css'
import OneCard from '../../Component/OneCard/OneCard'
import TotalCart from '../../Component/TotalCart/TotalCart'




const Cart = () => {
  const cartContext = useCartContext()
  return (
    <div className='cart'>
        <h2 className='header-cart'>Cart</h2>
       <div className="carts">
        {cartContext.myCart.length >0 ? (<div className='container'>
            {cartContext.myCart.map((el)=>{
                return (<OneCard product={el} key={el.id} />)
            })}
        </div>) : (<h3 className='Container cart-empty'>YOUR CART IS EMPTY !!!</h3>) }
       </div>
       {cartContext.myCart.length >0 && (<TotalCart/>) }
    </div>
  )
}
 export default Cart

 {/* {cartContext.myCart.length >0 ? (<div className='container-cart'>
        {cartContext.myCart.map((el)=> {
        return (<OneCart product ={el} key={el.id}/>)
 } )}
      </div>) : <h3 className='cart-empty'>YOUR CART IS EMPTY</h3>}       */}