import React from 'react';
import '../App.css'
import Product from './Product';

export default function Tiffin({onAdd,onRemove,cartItems,tiffins}){
    return (
        <div className="full-items">
        <p className='tiffin'>tiffin</p>
        <div className='tiffins'>
         { tiffins.map(product=>{
          return (
        <Product key={product.id} items={cartItems.find(x=> x.id===product.id)}  product={product} onAdd={onAdd} onRemove={onRemove} />
          )
          })
        }
        </div>
        </div>
    )
}