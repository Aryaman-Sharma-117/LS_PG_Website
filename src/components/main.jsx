import React from 'react'
import Product from './Product';

export default function Main(props) {
    const {products, onAdd, counter}=props;
    
    return(
        <div>
        <h2>Products</h2>
        <Product key={products.id} product={products} onAdd={onAdd} counter={counter}/>
        </div>
    );
}