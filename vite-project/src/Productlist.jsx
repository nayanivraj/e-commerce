import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Productlist = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row p-2 g-2">
        {productData.map((product) => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <Link
              to={`/productdetail/${product.id}`}
              className="text-decoration-none"
            >
              <div className="card border-0 justify-content-center">
                <div
                  style={{
                    borderRadius: "18px",
                    backgroundColor: "#d1d5db",
                    padding: "15px 10px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={`Thumbnail of ${product.title}`}
                    className="card-img-top "
                    style={{
                        
                      // width: "100%",
                      maxHeight: "230px",
                      objectFit: "cover",
                    }}
                  />
                </div>
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
    </div>
  );
};

export default Productlist;
