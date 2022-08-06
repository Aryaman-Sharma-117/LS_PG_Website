import React, {useState} from 'react'

export default function Product(props) {
    const {product, onAdd, counter}=props;
    
    return (
    <div className="prod">
        <img className="logo" src={product[counter].image} alt={product[counter].name}/>
        <h3>{product[counter].name}</h3> 
        <div>{product[counter].price}</div>
        <button onClick={()=>{onAdd(product[counter])}}>Add to Cart</button>
        <br/>
        Product: {counter+1} of 8
        <br/>
        
    </div>
  )
}
