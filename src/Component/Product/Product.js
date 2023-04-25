import React from 'react'
import './Product.css'
import CardProduct from '../CardProduct/CardProduct'
const Product = ({products}) => { 
return (
 <div className='product'>
    <h3>Best seller</h3>
    <div className='container'>
        <div className="row">
          {products.map((pr)=>{ return (<CardProduct key={pr.id} pr={pr}/>)
          })}
        </div>
    </div>
    
 </div>
)
}

export default Product
