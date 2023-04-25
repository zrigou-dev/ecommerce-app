import React from 'react'
import './CardProduct.css'
import { MdStar } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/ContextProvider';
import * as actions from '../../Context/ActionTypes'


const CardProduct = ({pr}) => {
  const cartContext = useCartContext();
  const storedCard = cartContext.myCart.find((el)=> el.id === pr.id );
  const addedDisable    = storedCard ? true : false ;
  return (
    <div className="col-md-3 card">  
       <Link to={`/products/${pr.id}`}>
        <img src={pr.images[0]} alt={pr.title} className='img-Card' />
        </Link> 
        <div className="info">
            <p className="title">{pr.title}</p>
            <div>
                 <p>{pr.price}$</p>
                 <p>{pr.rating}<MdStar className="star"/></p>
            </div>
            {!addedDisable ? (<button className='add-btn'  onClick={()=> cartContext.CartDispatch(
            {type:actions.ADD_PRODUCT_TO_CART , payload: pr}
          )}>Add To Cart</button>):
                 (<Link to='/cart' className='link-go-cart'> <button className='go-to-cart'>Go To Cart</button></Link>)}
        </div>
    </div>
  )
}

export default CardProduct
