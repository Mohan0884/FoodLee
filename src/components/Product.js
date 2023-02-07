import React from 'react'
import '../App.css'
function Product({items,onAdd,onRemove,product}) {
    
  return (
    <div className="items">
         

              
                   <div key={product.id} className="itm">

                    <img className='tiffin-img' description="add to cart" src={product.img} alt="" />
                    <p>{product.title}</p>
                     <div className='desc'>
                        <p>₹{product.price}</p>
                        <p>{product.rating}⭐</p>
                    </div>
                    
        </div>
        { !items ? 
                    (<button className='addcart' onClick={()=>onAdd(product)}>add to cart</button>)
                    :
                    (<div className="btns" >
                        <button className="btn"  onClick={()=>onRemove(items)}>-</button>
                        <p>{items.quantity}</p>
                        <button className="btn" onClick={()=>onAdd(items)}>+</button>
                        </div>)
                    }   
    </div>
  )
}

export default Product