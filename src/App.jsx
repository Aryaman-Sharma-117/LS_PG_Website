import React, { useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/main';
import Basket from './components/basket';
import data from './components/cartitems';
import Alert from './alert';
import Table from './components/table';
import Error from "./components/error";
import Login from "./components/login";
import Checkout from "./components/checkout";
import Sharedlayout from "./components/sharedlayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const {products} = data;
  const [cartItems,setCartItems]=useState([]);
  const [cartQuan,setCartQuan]=useState(0);
  const [alert, setAlert] = useState(null)
  const showAlert=(message)=>{
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const onAdd=(product) => {
    const exist=cartItems.find(x=>x.id===product.id);
    setCartQuan(cartQuan+1);
    showAlert("Added to ");
      if(exist){
        setCartItems(
          cartItems.map((x)=>
            x.id===product.id ? {...exist,qty:exist.qty+1}:x
          )
        );
      }
      else {
        cartItems.push({...product, qty: 1})
        setCartItems(cartItems);
      }
  };
  const onRemove=(product)=> {
    const exist=cartItems.find(x=>x.id===product.id);
    setCartQuan(cartQuan-1);
    showAlert("Removed from ");
    if(exist.qty===1){
      setCartItems(cartItems.filter((x)=>x.id!==product.id));
    }
    else{
      setCartItems(
        cartItems.map((x)=>
          x.id===product.id ? {...exist,qty:exist.qty-1}:x
        )
      );
    }
  };
  const [mode,setMode]=useState('Display');
  const toggle=()=>{
    if(mode==='Display'){
      setMode('Cart')
    }
    if(mode==='Cart'){
      setMode('Display')
    }
  };
  const [user,setUser]=useState(null);
  
  

  return (
    <BrowserRouter>
      <nav>
        <Navbar countCart={cartQuan} mode={mode} toggle={toggle}/>
        <Alert alert={alert}/>
      </nav>
      <Routes>
        <Route path='/' element={<Sharedlayout/>}>
        <Route 
          
          index element={
            <div className="App">
              <div>
                <img src='src/capture.jpg' className="logo" alt="Vite logo" />
              </div>
              <div>
                    <h1>Welcome to Umbrella PG</h1>
                    <h2>Based in Indiranagar, bangalore</h2>
                    <div>
                      <img src="src/hostel.jpg" className="logo1" alt='Capture-image'/>
                    </div>
                    <div className="row">
                    <Main onAdd={onAdd} products={products}/>
                    </div>
                    <Table/>
              </div>
            </div>
          }/>
        <Route
          path='cart'
          element={
            <div className="App">
              <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
            </div>
          }
        />
        <Route
          path='cart/login'
          element={<Login setUser={setUser}/>}
        />
        <Route
          path='cart/login/checkout'
          element={
            <ProtectedRoute user={user}>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
