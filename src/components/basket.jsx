import React from 'react'
import {Link} from 'react-router-dom'

export default function Basket(props) {
    const {cartItems, onAdd, onRemove}=props;
    const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    const webFee=itemsPrice*0.10;
    const totalPrice=itemsPrice+webFee;
    return(
        <div>
            <h1 className="basketh1"><span>Cart items</span></h1>
            <div className="abc">
                {cartItems.length===0 && <div>Cart is Empty</div>}
            </div>
            {
                cartItems.map(
                    (item)=>
                    <div key={item.id} className="row">
                        <div className="col-5 abc">{item.name}</div>
                        <div className="col-2">
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            <button onClick={()=>onRemove(item)} className="remove">-</button>
                        </div>
                        <div className="col-2 abc text-right">
                            {item.qty}*{item.price}
                        </div>
                    </div>
                    
                )
            }
            {cartItems.length!==0 && (
            <>
                <hr></hr>
                <div className="row abcd">
                    <div className="col-7">Items Price</div>
                    <div className="col-2 text-right">{itemsPrice}</div>
                </div>
                <div className="row abcd">
                    <div className="col-7">Web Fee</div>
                    <div className="col-2 text-right">{webFee}</div>
                </div>
                <div className="row abcd">
                    <div className="col-7"><strong>Total Price</strong></div>
                    <div className="col-2 text-right"><strong>{totalPrice}</strong></div>
                </div>
                <div className="row abcd">
                    <div className="col-7"></div>
                    <div className="col-2 text-right">
                        <Link to='login' class="btn btn-dark">Checkout</Link>
                    </div>
                </div>
            </>
        )}
        </div>
        
    );
}