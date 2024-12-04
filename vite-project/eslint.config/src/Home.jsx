import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";


const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then(function (response) {
        setProductData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      <div className="flex-fill">
        <div className="main_1">
        <div className="row m-0">
  <div className="col-sm-12 col-md-6  d-flex flex-column justify-content-center p-5">
    <h1 className="text-black" style={{ fontSize: "40px" }}>
      <b>FIND CLOTHES THAT MATCHES YOUR STYLE</b>
    </h1>
    <p className="" style={{ fontSize: "10px" ,color: '#00000099'}}>
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </p>
    <button 
  className="btn bg-black text-white rounded-pill py-2 px-4 w-20 w-md-20" 
  style={{ fontSize: "10px" ,width:'30%'}}
>
  Shop Now
</button>

<div className="row mt-4 align-items-center justify-content-center">
  <div className="col-6 col-md-4  text-center">
    <h1 style={{ fontSize: "32px" }}>200+</h1>
    <p style={{ fontSize: "11px" }}>International Brands</p>
  </div>

  <div className="col-6 col-md-4 text-center mt-3 mt-sm-0">
    <h1 style={{ fontSize: "32px" }}>2000+</h1>
    <p style={{ fontSize: "11px" }}>High-Quality Products</p>
  </div>

  <div className="col-6 col-md-4 text-center mt-3 mt-md-0">
    <h1 style={{ fontSize: "32px" }}>30000+</h1>
    <p style={{ fontSize: "11px" }}>Happy Customers</p>
  </div>
</div>
  </div>
  <div className="col-sm-12 col-md-6 m-0 p-0">
    <img
      src="/media/img/hero.png"
      className="img-fluid"
      alt="Fashion style illustration"
      style={{ backgroundColor: "#d1d5db" }}
    />
  </div>
</div>


          <div className="row bg-black text-white text-center pt-2 pb-2 m-0 justify-content-around">
  <div className="col-4 col-md-2 fs-4">VERSACE</div>
  <div className="col-4 col-md-2 fs-4">ZARA</div>
  <div className="col-4 col-md-2 fs-4">GUCCI</div>
  <div className="col-4 col-md-2 fs-4">PRADA</div>
  <div className="col-6 col-md-2 fs-4">Calvin Klein</div>
</div>


        </div>
        <div>
          <h2 className="text-center mt-4 mb-4">
            <b>NEW ARRIVALS</b>
          </h2>
        </div>
        <div className="container-fluid">
          {" "}
          {/* Added container-fluid for full-width layout */}
          <div className="row g-3 p-3">
            {" "}
            {/* g-3 added to control the spacing between columns */}
            {productData.map((product) => (
              <div
                className="col-6 col-sm-6 col-md-4 col-lg-3"
                key={product.id}
              >
                {" "}
                {/* Ensure responsive layout */}
                <Link
                  to={`/productdetail/${product.id}`}
                  className="text-decoration-none"
                >
                  <div className="card border-0">
                    <img
                      src={product.image}
                      alt={`Thumbnail of ${product.title}`}
                      className="card-img-top"
                      style={{
                        padding: "25px", // Adjusted padding to avoid overflow
                        objectFit: "cover",
                        width: "100%",
                        height: "200px",
                        backgroundColor: "#d1d5db",
                        borderRadius: "18px",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontSize: "10px" }}>
                        {product.title}
                      </h5>
                      <p className="card-text">${product.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>{" "}
        <Link to="/productlist">
          <div className="d-flex justify-content-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-2 ">
                  <button
                    className="btn bg-white border-gray text-black rounded-pill pb-2 w-100"
                    style={{
                      fontWeight: "500",
                      fontSize: "10px",
                      border: "1px solid #d1d5db",
                    }}
                  >
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div
  className="row m-3 m-md-5 p-3 rounded-5 "
  style={{ background: "#F0F0F0" }}
>
       <div className="container">
  <div className="mb-4">
    <h2 className="text-center mt-3">
      <b>BROWSE BY DRESS STYLE</b>
    </h2>
  </div>
  <div className="row p-0 mb-0">
    <div className="col-12 col-sm-6 col-md-4 p-1 ">
      <img
        src="/media/img/casual.png"
        alt="Casual"
        className="card-img-top rounded-4 w-100"
        style={{
          backgroundSize:'contain',
          height: "200px",
          backgroundColor: "#d1d5db",
          borderRadius: "18px",
        }}
      />
    </div>
    <div className="col-12 col-sm-6 col-md-8 p-1">
      <img
        src="/media/img/formal.png"
        alt="Formal"
        className="card-img-top rounded-4 w-100"
        style={{
          backgroundSize:'contain',
          height: "200px",
          backgroundColor: "#d1d5db",
          borderRadius: "18px",
        }}
      />
    </div>
  </div>
  <div className="row p-0 mb-0">
    <div className="col-12 col-sm-8 p-1">
      <img
        src="/media/img/party.png"
        alt="Party"
        className="card-img-top rounded-4 w-100"
        style={{
          backgroundSize:'contain',
          height: "200px",
          backgroundColor: "#d1d5db",
          borderRadius: "18px",
        }}
      />
    </div>
    <div className="col-12 col-sm-4 p-1">
      <img
        src="/media/img/gym.png"
        alt="Gym"
        className="card-img-top rounded-4 w-100"
        style={{
          backgroundSize:'contain',
          height: "200px",
          backgroundColor: "#d1d5db",
          borderRadius: "18px",
        }}
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
