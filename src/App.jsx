import { useState } from 'react'
import reactLogo from './assets/react.svg'

import React from "react";

import './App.css'

function DoSubmit() {
  document.getElementById("myform").submit();
  alert("Thankyou");
}

function App() {

  return (
    
    <div className="App">
      <div className="asApp">
        <table border= "4" width="100%">
          <tr class="header">
            <th colspan="5"><b>Our Facilities</b></th>
          </tr>
          <tr>
            <td width="20%">
                Music Inventory
            </td>
            <td width="20%">Sports Inventory</td>
            <td width="20%">Tech Inventory</td>
            <td width="20%">Room availibility</td>
            <td width="20%">Contact Us</td>
          </tr>
        </table>
      </div>
      <div>
      <img src='src/capture.jpg' className="logo" alt="Vite logo" />
      </div>
      <h1>Welcome to Umbrella PG</h1>
      <h2>Based in Indiranagar, bangalore</h2>
      <div>
          <img src="src/hostel.jpg" className="logo1" alt='Capture-image'/>
      </div>
     <div className="reviews">
        <table width="100%">
          <tr class="header">
            <th colspan="5"><b>Reviews</b></th>
          </tr>
          <tr>
          <td width="25%" height="200px%">This is One of the best equipped places i have seen in this city. All the amenities are in top condition. You can expect a comfortable experience.<br/>-Varun(Sony manager)</td>
          <td width="25%">I suggest all my college students to take a place here. Follows proper ethics and cultures.<br/>-Ankur(HOD abc university)</td>
          <td width="25%">Really didnt expect a pg experience to be this smooth and enjoyable. The staff and facilities are up there with the best hotels. Felt as if i never left home.<br/>-Raju(abc pass out 2021)</td>
          <td width="25%">Rated 10/10 in hygiene and food qualities.<br/> Rated 9/10 in life conditions.<br/> Rated 9/10 in extra curicular facilities.<br/> Rated 10/10 in cultural environment.<br/>-Times Magzine(2021)</td>
          </tr>
        </table>
     </div>
     <div>
      <p class="abc">
        <br/>
        <hr/>
          Subscribe to our newsletter to stay updated
        <br/>
        <hr/>
      </p>
      <form name="myform" id="myform" action="" method="post">
        Please enter your name: &nbsp; &nbsp;<input type="text" name="name" />
        <br/>
        <hr/>
        Please enter your email: &nbsp; &nbsp;<input type="text" name="email" />
        <br/>
        <hr/>
        Please enter your Room no: &nbsp; &nbsp;<input type="text" name="room" />
        <br/>
        <hr/>
        <input type="submit" name="submit" onclick="DoSubmit" />
        <br/>
        <hr/>
      </form>
      <div className="card">
        <button onClick={() => {
          let Input=prompt("Input box\nFeel free to write down your opinion and/or input");
          alert("Thank You!");
        }
        }>
          Write your inputs
        </button>
      </div>
     </div>
    </div>
    
  )
}

export default App
