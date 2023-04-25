import {React , useState ,useEffect} from 'react'
import './ProCategorie.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardProduct from '../../Component/CardProduct/CardProduct'

const ProCategorie = () => {
  const {id} =useParams()
  const [dataProduct, setDataProduct]= useState([])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/` + id)
    .then((response)=>{
      setDataProduct(response.data.products);
    }).catch((error)=>console.log(error))
  },[id])

  return (
    <div className="container proCat">
      <h2>{id.toUpperCase()}</h2>
      <div className="row">
        {dataProduct.map((el)=>{
          return (<CardProduct key={el.id} pr={el} />)
        })}
      </div>
    </div>
  )
}

export default ProCategorie
