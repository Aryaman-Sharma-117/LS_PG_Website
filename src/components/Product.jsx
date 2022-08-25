import React, {useState} from 'react'

export default function Product(props) {
    const {product, onAdd}=props;
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
    <div className="prod">
        <img className="logo" src={product[counter].image} alt={product[counter].name}/>
        <h3>{product[counter].name}</h3> 
        <div>{product[counter].price}</div>
        <button onClick={()=>{onAdd(product[counter])}}>Add to Cart</button>
        <br/>
        Product: {counter+1} of 8
        <br/>
        <button onClick={PrevP}>Previous</button>&nbsp;
        <button onClick={NextP}>Next</button><br/><br/><hr/><br/>
        
    </div>
  )
}
