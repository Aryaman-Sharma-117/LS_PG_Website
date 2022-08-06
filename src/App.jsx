import { useState } from 'react'
import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import ReviewCard from './components/ReviewCard'
import database from './components/data';
import Main from './components/main';
import Basket from './components/basket';
import data from './components/cartitems';
import Alert from './alert';

function DoSubmit() {
  document.getElementById("myform").submit();
  alert("Thankyou");
}



function App() {
  const {products} = data;
  const [cartItems,setCartItems]=useState([]);
  const [alert, setAlert] = useState(null)
  const showAlert=(message)=>{
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const onAdd=(product) => {
    const exist=cartItems.find(x=>x.id===product.id);
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
  const [counter,setcounter]=useState(0)
    const NextP = ()=>{
    let newcounter=(counter+1)%8;
    setcounter(newcounter);
    };
    const PrevP = ()=>{
        if(counter===0){}
        else{
            let newcounter=(counter-1)%8;
            setcounter(newcounter);
        }
    };

  return (

    <div className="App">
      <Navbar mode={mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <div>
        <img src='src/capture.jpg' className="logo" alt="Vite logo" />
      </div>
      
      <div>
        {
          mode==='Display' && (
          <div>
            <h1>Welcome to Umbrella PG</h1>
            <h2>Based in Indiranagar, bangalore</h2>
            <div>
              <img src="src/hostel.jpg" className="logo1" alt='Capture-image'/>
            </div>
            <div className="row">
            <Main onAdd={onAdd} products={products} counter={counter}/>
            <button onClick={PrevP}>Previous</button>&nbsp;
            <button onClick={NextP}>Next</button><br/>
            <br/><hr/><br/>
            </div>
            <div className="reviews">
              <table width="100%">
                <tr className="header">
                <th colspan="5"><b>Reviews</b></th>
                </tr>
                <tr>
                  <td width="25%" height="100%"><ReviewCard/></td>
                  <td width="25%" height="100%"><ReviewCard/></td>
                  <td width="25%" height="100%">
                  <p className="abc">
                  <br/>
                    <hr/>
                      Subscribe to our newsletter to stay updated
                    <br/>
                  <hr/>
                  </p>
                  <form name="myform" id="myform" action="" method="post">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Name</label>
                  </div>
                    <br/>
                    <hr/>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <br/>
                    <hr/>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="username"/>
                      <label for="floatingInput">Room No.</label>
                    </div>
                    <br/>
                    <hr/>
                    <input type="submit" name="submit" onclick="DoSubmit" />
                    <br/>
                    <hr/>
                  </form>
                  </td>
                  <td width="25%" height="100%">Rated 10/10 in hygiene and food qualities.<br/> Rated 9/10 in life conditions.<br/> Rated 9/10 in extra curicular facilities.<br/> Rated 10/10 in cultural environment.<br/>-Times Magzine(2021)</td>
                </tr>
              </table>
            </div>
          </div>
          )
        }
        {mode==='Cart' && (<Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>)}
      </div>
      
    
      
     </div>
    
    
  )
}

export default App
