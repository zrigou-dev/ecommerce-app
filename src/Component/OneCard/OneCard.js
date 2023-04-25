import {React , useState } from 'react';
import './OneCard.css'
import * as actions from '../../Context/ActionTypes'
import { useCartContext } from '../../Context/ContextProvider';




const OneCard = ({product}) => {
    const cartContext = useCartContext()
    const [quant , setQuant]=useState(1);
  return (
    <div className="container oneCard">
        <div className="row">
           <div className="col-md-3">
            <h2></h2>
            <img src={product.thumbnail} alt={product.title} />
           </div>
           <div className="col-md-3">
             <h2>price:</h2>
             <p>{product.price}$</p>
           </div>
           <div className="col-md-3">
            <h2>Quantity:</h2>
            <input type="number" value={quant} onChange={(e)=> setQuant(e.target.value)}/>
           </div>
           <div className="col-md-3">
            <h2>Totale:</h2>
            <p>{quant * product.price}$</p>
           </div>
        </div>
      <span onClick={()=> cartContext.CartDispatch(
            {type:actions.REMOVE_PRODUCT_FROM_CART , payload: product}
          )} className="btn-del">X</span>  
    </div>
  )
}

export default OneCard