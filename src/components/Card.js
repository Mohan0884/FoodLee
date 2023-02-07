import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
function Card({cartItems,onAdd,onRemove}){
  const itemsPrice=cartItems.reduce((a,c)=>a+c.quantity*c.price,0);
  const taxPrice=itemsPrice*0.14;
  const shippingPrice=itemsPrice>500 ? 0 :50;
  const totalPrice=itemsPrice+shippingPrice+taxPrice;
  return (
    <aside >
        <div className="width">
           {cartItems.length===0 && <div>Cart Is Empty</div>} 
          {cartItems.map((item)=>(
            <div key={item.id} >
              <div className="item-name">{item.title}</div>
              <div className="btnslr">
                        <button className="btn-l" onClick={()=>onRemove(item)}>-</button>
                        <p>{item.quantity}</p>
                        <button className="btn-r" onClick={()=>onAdd(item)}>+</button>
              </div>
              <div className="text-right">
                {item.quantity}*₹{item.price.toFixed(2)}
              </div>
              </div>
              
           
          ))}
          {cartItems.length!==0 && (
            <>
            <hr />
            <div>
              <p>items price</p>
              <p className="text-right">₹{itemsPrice.toFixed(2)}</p>

            </div>
            <div>
              <p>tax price</p>
              <p className="text-right" >₹{taxPrice.toFixed(2)}</p>
              
            </div>
            <div>
              <p>Shipping price</p>
              <p className="text-right">₹{shippingPrice.toFixed(2)}</p>
              
            </div>
            <div>
              <h3>total price</h3>
              <h3 className="text-right">₹{totalPrice.toFixed(2)}</h3>
              
            </div>
            <div >
          <NavLink className="nav-link" to='/cart/checkout'>Checkout</NavLink>
          </div>
            </>
          )}
          
        </div>
    </aside>
  )
  
}

export default Card