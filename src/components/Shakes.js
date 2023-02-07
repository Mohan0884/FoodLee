import React from 'react'
import '../App.css'
import Product from './Product';
function Shakes({onAdd,onRemove,cartItems,shakes}) {
    return (
        <div className="full-items">
        <p className='tiffin'>Milkshakes</p>
        <div className='tiffins'>
         { shakes.map(product=>{
          return (
        <Product key={product.id} items={cartItems.find(x=> x.id===product.id)}  product={product} onAdd={onAdd} onRemove={onRemove} />

          )

          })
        }
        
        </div>
        </div>
    )
}

export default Shakes