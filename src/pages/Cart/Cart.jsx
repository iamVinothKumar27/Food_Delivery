import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { exportToFile, importFromFile } from '../../storage/jsonStorage';
import { useNavigate } from 'react-router-dom'; // assuming you are using React Router for navigation

const Cart = () => {
  const { cartItems, setCartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate(); // useNavigate hook for navigation

  return (
    <div className='cart'>
      <div style={{display:'flex', gap:'8px', justifyContent:'flex-end', marginBottom: '12px'}}>
        <button onClick={() => exportToFile(cartItems, 'cart.json')}>Export JSON</button>
        <label style={{border:'1px solid #ddd', padding:'6px 10px', borderRadius:'6px', cursor:'pointer'}}>
          Import JSON
          <input type="file" accept="application/json" style={{display:'none'}} onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) importFromFile(f).then(obj => setCartItems(obj || {})).catch(() => alert('Invalid JSON'));
          }}/>
        </label>
      </div>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            );
          } else {
            return null; // return null or handle the case where cartItems[item._id] <= 0
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className='cart-promocode'>
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className='cart-promo'>
                <input type='text' placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;