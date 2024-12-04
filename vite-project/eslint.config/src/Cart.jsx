import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(cart)

  useEffect(() => {
    setLoading(true);
    axios.get('https://fakestoreapi.com/carts') 
      .then(response => {
     
     setCart(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    
    <div className="container">
      <span
            style={{
              display: "block",
              height: "1px",
              backgroundColor: "#00000099",
              width: "100%",
            }}
          ></span>
      <span>Home  Cart</span>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group mb-4">
          {cart.map((item, index) => (
              item.products.map((product,nd) =>(
            
            <li key={nd} className="list-group-item">
            
              <span>Product ID: {item.id}</span>
                <span className="float-end">Quantity: {product.quantity}</span>  
            
            
            </li>
            )) 
              
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
