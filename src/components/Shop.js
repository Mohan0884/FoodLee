import React from 'react'
import Product from './Product'
function Shop({cartItems,tiffins,lunch,onAdd,onRemove,shakes}){

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
        <hr />
        <br />
        <p className='tiffin'>Lunch</p>
        <div className='tiffins'>
         { lunch.map(product=>{
          return (
        <Product key={product.id} items={cartItems.find(x=> x.id===product.id)}  product={product} onAdd={onAdd} onRemove={onRemove} />

          )

          })
        }
        
        </div>
        <hr />
        <br />
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

export default Shop