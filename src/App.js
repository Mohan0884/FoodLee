import './App.css';
// import Landing from './components/Landing';

import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout'
import Login from './components/Login';
import Register from './components/Register'
import Shop from './components/Shop';
import Card from './components/Card';
import data from './components/PDdata';
import { useState } from 'react';
import Tiffin from './components/Tiffin';
import Lunch from './components/Lunch';
import Shake from './components/Shakes'
function App() {
  
  const {tiffins,lunch,shakes}=data;
  const [cartItems,setCartItems]=useState([]);
  function onAdd(item){
    const exist=cartItems.find((x)=>x.id===item.id);
    if(exist){
      const newCartItems=cartItems.map((x)=>
        x.id===item.id?{...exist,quantity:exist.quantity+1}:x
      );
      setCartItems(newCartItems);
    }else{
      const newCartItems=[...cartItems,{...item,quantity:1}];
      setCartItems(newCartItems);
    }
  }
  function onRemove(item){
    const exist=cartItems.find(x=>x.id===item.id);
    if(exist.quantity===1 ){
      const newCartItems=cartItems.filter((x)=>x.id!==item.id);
      setCartItems(newCartItems);
    }else{
      const newCartItems=cartItems.map((x)=>x.id===item.id ?{...exist,quantity:exist.quantity-1}:x);
      setCartItems(newCartItems);
    }
  }
  
  return (
    <div className="App">
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/shop' element={<Shop cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} tiffins={tiffins} lunch={lunch} shakes={shakes}/>}/>
        <Route path='/cart' element={<Card cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path='/cart/checkout' element ={<Checkout />}/> 
        <Route path="/tiffin" element={<Tiffin tiffins={tiffins} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}/>
        <Route path="/lunch" element={<Lunch lunch={lunch} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}/>
        <Route path="/milkshakes" element={<Shake shakes={shakes} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}/>
      </Routes>
    </div>
  );
}

export default App;
