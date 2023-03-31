import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer.js"
import AllPlants from "./pages/AllPlants.js"
import AllSeeds from "./pages/AllSeeds.js"
import Blogs from "./pages/blogs/Blogs.js"
import Register from "./pages/authFolder/Register.js"
import Login from "./pages/authFolder/Login.js"
import OrderPage from "./pages/OrderPage.js" 
import ProductPage from "./pages/ProductPage.js"
import { useState,useEffect } from 'react';



function App() {
  const [cart,setCart] = useState({});
  const [subTotal,setSubTotal] = useState(0);
  // const [lqty,setLqty] = useState(JSON.parse(localStorage.getItem('cart'))[cart].qty)
  useEffect(()=>{

    console.log("Hey I am a useEffect from app.js")
    try{
      if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
    }

    } catch (error){
      console.log(error);
      localStorage.clear();

    }
  },[])

  const saveCart = (myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart));
    let keys = Object.keys(myCart)
    let subT = 0;
    for(let i=0;i<keys.length;i++){
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;

    }
    setSubTotal(subT)
  }

  const addToCart = (itemCode,qty,price,name,categeory)=>{
    let newCart = cart;
    console.log(itemCode,qty,price,name,categeory)
    if(itemCode in cart){
      newCart[itemCode].qty =  cart[itemCode].qty + qty;
    }
    else{
      newCart[itemCode] = {itemCode,qty:1,price,name,categeory};
    }
    console.log(newCart)
    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = ()=>{
    setCart({});
    saveCart({})
  }

  const removeFromcart = (itemCode,qty,price,name,categeory)=>{

    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty =  cart[itemCode].qty - qty;
      console.log(newCart,qty,price,name,categeory)
    }
    if(newCart.qty <=0){
      delete newCart(itemCode)
    }
    setCart(newCart);
    saveCart(newCart);
  }


  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar cart={cart} addToCart={addToCart} removeFromcart={removeFromcart} clearCart={clearCart} subTotal={subTotal}/>}>

              <Route index element={<Home cart={cart} addToCart={addToCart} removeFromcart={removeFromcart} clearCart={clearCart} subTotal={subTotal} />} />

              <Route path='about' element={<About />} />

              <Route path='contact' element={<Contact />} />

              <Route path='all_plants' element={<AllPlants cart={cart} addToCart={addToCart} removeFromcart={removeFromcart} clearCart={clearCart} subTotal={subTotal}/>} />

              <Route path='all_seeds' element={<AllSeeds cart={cart} addToCart={addToCart} removeFromcart={removeFromcart} clearCart={clearCart} subTotal={subTotal} />} />

              <Route path='OrderPage' element={<OrderPage cart={cart} addToCart={addToCart} removeFromcart={removeFromcart} clearCart={clearCart} subTotal={subTotal}/>} />

              <Route path='ProductPage/:id' element={<ProductPage cart={cart} addToCart={addToCart} removeFromcart={removeFromcart} clearCart={clearCart} subTotal={subTotal}/>} />

              <Route path='blogs' element={<Blogs />} />
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
