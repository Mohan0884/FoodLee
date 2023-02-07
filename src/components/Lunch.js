import React from 'react'
import '../App.css'
import Product from './Product';
function Lunch({onAdd,onRemove,cartItems,lunch}) {
    return (
        <div className="full-items">
        <p className='tiffin'>Lunch</p>
        <div className='tiffins'>
         { lunch.map(product=>{
          return (
        <Product key={product.id} items={cartItems.find(x=> x.id===product.id)}  product={product} onAdd={onAdd} onRemove={onRemove} />

          )

          })
        }
        
        </div>
        </div>
    )
}

export default Lunch