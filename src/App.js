import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Nav from './Component/Nav/Nav';
import PageProd from './Pages/PageProd/PageProd';
import ProCategorie from './Pages/ProCategorie/ProCategorie';
import ContextProvider from './Context/ContextProvider'
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import ThanksForOrder from './Pages/ThanksForOrder/ThanksForOrder';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <ContextProvider>
       <Nav/>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/products/:id' element={<PageProd/>}/>
           <Route path='/categorie/:id' element={<ProCategorie/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
           <Route path='/thanks' element={<ThanksForOrder/>}/>
       </Routes>
       <Footer/>
       </ContextProvider>  
    </BrowserRouter>
    </>
  );
}

export default App;
