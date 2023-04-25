import React, { useEffect, useState } from 'react'
import './Home.css'
import Nav from '../../Component/Nav/Nav'
import slide from '../../Assets/Slide1.png'
import Product from '../../Component/Product/Product'
import axios from 'axios'

const Home = () => {
    const [product , setProduct]= useState([])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/search?q=`)
    .then((response)=>{
      setProduct(response.data.products)
    }).catch((error)=>console.log(error))
  },[])
  return (
    <div className='Home'>
      <div className="slide">
        <img src={slide} alt="slide" />
      </div>
      <Product products={product} />
    </div>
  )
}

export default Home
