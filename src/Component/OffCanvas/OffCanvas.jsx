import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {MdMenu } from "react-icons/md";
import './OffCanvas.css'
import logo from '../../Assets/logo1.png'
import { Link } from 'react-router-dom';
import axios from 'axios';


const OffCanvas = () => {
    const [show, setShow] = useState(false);
    const[categorie , setCategorie]=useState([]) 
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/categories`)
        .then((response)=>{
          setCategorie(response.data)
        }).catch((error)=>console.log(error))
      },[])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className='btn-menu'>
           <MdMenu className='icon-menu' />
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title> <img src={logo} alt="logo" /> </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
             <ul>
                <li className='link-cat'><Link to='/'>Home</Link> <span>></span></li>
                {categorie.map((el)=>{
                    return (<li className='link-cat' key={el}><Link to={`/categorie/${el}`}>{el}</Link> <span>></span></li>)
                })}
             </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}

export default OffCanvas
