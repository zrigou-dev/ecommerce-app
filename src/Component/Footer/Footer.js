import React from 'react'
import logo from '../../Assets/logo2.png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row flex-footer">
            <div className="col-md-4 img-footer">
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <div className="col-md-4 pages-footer">
                <ul>
                    <li className='head-list-footer'>Pages:</li>
                    <li><Link>Home</Link></li>
                    <li><Link>Categorie</Link></li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>About</Link></li>
                </ul>
            </div>
            <div className="col-md-4 pages-footer">
                <ul>
                    <li className='head-list-footer'>policy:</li>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>Refund Policy</Link></li>
                    <li><Link>Disclaimer</Link></li>
                    <li><Link>Term & Condition</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
