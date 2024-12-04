import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const navigate = useNavigate( );
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(data)
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    axios.post('https://fakestoreapi.com/carts', {
      
        userId:data.id,
        date: new Date(Date.now()),
        products:[{productId:data.id,quantity:1}]
    
        })
    .then(response => {
      console.log('Product added to cart:', response.data);
      navigate("/cart");
    })
    .catch(error => {
      console.error('Error adding product to cart:', error);
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No product found.</p>;
  }

  return (
    <>
    <div className="container-fluid">

          <div className="row p-5">
        <div className="col-sm-6 ">
          <img
            src={data.image}
            alt={data.title}
            className='pl-3 pr-3 pb-4 pt-4'
            style={{
              width: '100%',
              objectFit: 'cover',
              height: '400px',
              borderRadius: '12px',
              backgroundColor: '#d1d5db',
            }}
          />
        </div>
        <div className="col-sm-6">
          <h2 style={{
            fontWeight:'800'
          }}>{data.title}</h2>
          <h4>${data.price}</h4>    
          <p style={{
            fontSize:'13px'
          }}>{data.description}</p>
          <span
            style={{
              display: "block",
              height: "1.25px",
              width: "100%",
              margin: "15px 0 15px 0",
              background:"#F0F0F0"
            }}
          ></span>
        <button className="btn btn-black  rounded-pill bg-black text-white  p-2 w-100 fs-7  " onClick={handleAddToCart}>
        Add to Cart
        </button>
        
        </div>
        </div>

      </div>
    </>
  );
};

export default ProductDetail; 