import React from 'react'
import { useSelector } from 'react-redux'
import '../pages/Cart.css';
import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice';

const Cart = () => {

  const cartitem = useSelector(state=> state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productid) =>{
    dispatch(remove(productid));
  } 
  return (<div>
  <h1>Cart</h1>
    <div className="cart-item">
    {
      
    }
      {
        cartitem.map(item => (
          <div className='item-card' key={item.id}><img src={item.image} alt="" className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price}</p>
        <button  className="cart-item-remove-btn" onClick={()=>handleRemove(item.id)}>
          Remove
        </button>
      </div>
      </div>))
      }
    </div>
    </div>
  )
}

export default Cart
