import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./layout.css";

const Layout = () => {
  // const { cart } = useCart(); // Access the cart state
  // const cartItemCount = cart.length;
  return (
    <div className="d-flex flex-column min-vh-100">
      {" "}
      {/* Added wrapper div */}
      <div className="text-center bg-dark text-white mb-0">
        <p className="m-0">
          Sign up and get 20% off your first order.
          <Link className="text-white" to="/login">
            {" "}
            Sign Up Now
          </Link>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand ml-4" href="#">
            <h2 className="nav-item Shop.co_logo">SHOP.CO</h2>
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Shop <i className="bi bi-chevron-down"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brands
                </a>
              </li>
            </ul>
            <form className="d-flex w-50">
              <div className="input-group ml-4">
                <input
                  type="email"
                  className="form-control input-with-icon emaildetailshome  border-0"
                  placeholder="Search for products....."
                  style={{
                    background: "#F0F0F0",
                  }}
                />
              </div>
            </form>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart" />
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person" />
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
      <div className="flex-fill">
        <Outlet />
      </div>
      {/* Footer */}
      <footer
        className="text-black pb-0 p-3 p-md-5 mt-auto "
        style={{ backgroundColor: "rgb(240, 240, 240)", marginTop: "50px" }}
      >
        <div className="container">
          <div
            className="row bg-black p-4"
            style={{
              borderRadius: "20px",
              marginTop: "-115px",
              marginBottom: "25px",
            }}
          >
            <div className="col-sm-6 col-md-8 mb-3 mb-md-0">
              <h3 className="text-white">
                <b>STAY UP TO DATE ABOUT</b>
              </h3>
              <h3 className="text-white">
                <b>OUR LATEST OFFERS</b>
              </h3>
            </div>
            <div className="col-sm-6 col-md-4">
              <div>
                <input
                  type="email"
                  className="form-control input-with-icon emaildetailshome mb-2 w-100"
                  placeholder="Enter your email address"
                />
                <button className="btn btn-white border rounded-pill bg-white text-black btnnews p-2 w-100">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-4 mb-lg-0">
              <h3>
                <b>SHOP.CO</b>
              </h3>
              <p className="footerdetails" style={{ color: "#00000099" }}>
                We have clothes that suit your style and which you’re proud to
                wear. From women to men.
              </p>
              <div>
                <a href="#" className="text-dark me-3">
                  <i
                    className="bi bi-instagram"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#" className="text-dark me-3">
                  <i
                    className="bi bi-facebook"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#" className="text-dark me-3">
                  <i
                    className="bi bi-twitter"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#" className="text-dark">
                  <i
                    className="bi bi-github"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-6 col-md-3 mb-3 mb-md-0">
                  <h5>COMPANY</h5>
                  <ul className="list-unstyled" style={{ color: "#00000099" }}>
                    <li>
                      <p className="footerdetails">About</p>
                    </li>
                    <li>
                      <p className="footerdetails">Features</p>
                    </li>
                    <li>
                      <p className="footerdetails">Works</p>
                    </li>
                    <li>
                      <p className="footerdetails">Career</p>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-md-0">
                  <h5>HELP</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p className="footerdetails">Customer Support</p>
                    </li>
                    <li>
                      <p className="footerdetails">Delivery Details</p>
                    </li>
                    <li>
                      <p className="footerdetails">Terms & Conditions</p>
                    </li>
                    <li>
                      <p className="footerdetails">Privacy Policy</p>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-md-0">
                  <h5>FAQ</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p className="footerdetails">Account</p>
                    </li>
                    <li>
                      <p className="footerdetails">Manage Deliveries</p>
                    </li>
                    <li>
                      <p className="footerdetails">Orders</p>
                    </li>
                    <li>
                      <p className="footerdetails">Payments</p>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <h5>RESOURCES</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p className="footerdetails">Free eBooks</p>
                    </li>
                    <li>
                      <p className="footerdetails">Development Tutorial</p>
                    </li>
                    <li>
                      <p className="footerdetails">How to Blog</p>
                    </li>
                    <li>
                      <p className="footerdetails">YouTube Playlist</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span
            style={{
              display: "block",
              height: "1px",
              backgroundColor: "black",
              width: "100%",
              margin: "10px 0",
              background: "#00000099",
            }}
          ></span>
          <div className="row">
            <div className="col-6">
              <p className="footerdetails " style={{ color: "#00000099" }}>
                Shop.co © 2000-2021, All rights reserved
              </p>
            </div>
            <div className="col-6 text-end">
              <p className="footerdetails">
                <i className="fab fa-cc-visa mx-1 fs-3"></i> {/* Visa Icon */}
                <i className="fab fa-cc-mastercard mx-1 fs-3"></i>{" "}
                {/* MasterCard Icon */}
                <i className="fab fa-cc-paypal mx-1 fs-3"></i>{" "}
                {/* PayPal Icon */}
                <i className="fab fa-apple-pay mx-1 fs-3"></i>{" "}
                {/* Apple Pay Icon */}
                <i className="fab fa-google-pay mx-1 fs-3"></i>{" "}
                {/* Google Pay Icon */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
