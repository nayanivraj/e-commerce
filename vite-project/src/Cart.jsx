import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const deleteProduct = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete the product");
        }
        return res.json();
      })
      .then(() => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
        alert("Product deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        alert("Failed to delete the product.");
      });
  };

 
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/")   .then((response) => {
        setCart(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5 pt-2">
    <div className="pb-4">
      Home <i className="bi bi-chevron-right" style={{ fontSize: "13px" }}></i> Cart
    </div>
  
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div className="container-fluid p-0">
        <div className="row gy-3">
          {cart.map((product) => (
            <div
              key={product.id}
              className="col-12 shadow-sm border rounded px-3 py-3"
            >
              <div className="row align-items-center">
                <div className="col-md-2 text-center">
                  <img
                    src={product.image}
                    alt={`Thumbnail of ${product.title}`}
                    className="img-fluid rounded"
                    style={{
                      
                      objectFit: "contain",
                    }}
                  />
                </div>
  
                <div className="col-md-8">
                  <h5 className="mb-1 text-primary">{product.title}</h5>
                  <p className="mb-1 text-muted">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="mb-1">
                    <strong>Description:</strong> {product.description}
                  </p>
                  <p className="mb-0">
                    <strong>Price:</strong> ${product.price}
                  </p>
                </div>
  
              
                <div className="col-md-2 text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <i className="bi bi-trash"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  
  );
};

export default Cart;
