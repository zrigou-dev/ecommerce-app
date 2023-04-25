import React, { useEffect, useState } from 'react'
import './PageProd.css'
import { useParams } from 'react-router'
import logo from '../../Assets/logo1.png'
import axios from 'axios'
import { MdStar ,MdShoppingCart } from "react-icons/md";
import { useCartContext } from '../../Context/ContextProvider'
import * as actions from '../../Context/ActionTypes'
import { Link } from 'react-router-dom'


const PageProd = () => {
    const {id} =useParams()
    const [dataProduct, setDataProduct]= useState('')
    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/` + id)
      .then((response)=>{
        setDataProduct(response.data);
      }).catch((error)=>console.log(error))
    },[])
    const cartContext = useCartContext()
    const storedCard = cartContext.myCart.find((el)=> el.id === dataProduct.id );
    const addedDisable    = storedCard ? true : false ;
    return (<>
     <div className="container PageProd">
        <div className="row">
          <div className="col-md-6">
          <img src={dataProduct.thumbnail} alt={dataProduct.title}  />
          </div>
          <div className="col-md-6 info-product">
             <h2>{dataProduct.title}</h2>
          <div className='prix-rating'>
            <p className="prix-pr">{dataProduct.price}$ / <span>{dataProduct.price + dataProduct.discountPercentage}$ </span></p>
            <p className="rating">{dataProduct.rating} <MdStar className="star"/></p>
          </div>
          <p className="stock">{dataProduct.stock} products still in stock!!</p>
          <p className='discription'> <span>Description: </span>{dataProduct.description}</p>
          {!addedDisable ? (<button className='add-btn'  onClick={()=> cartContext.CartDispatch(
            {type:actions.ADD_PRODUCT_TO_CART , payload: dataProduct}
          )}>Add To Cart</button>):
                 (<Link to='/cart' className='link-go-cart'> <button className='go-to-cart'>Go To Cart</button></Link>)}
          </div>
        </div>
        <div className='bordImg'>
        <div className='PageProdImg'>
          <img src={logo} alt="logo"  />
        </div>
      </div>  
     </div> 
      </>
    )
  }
  

export default PageProd