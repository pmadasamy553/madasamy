import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  return (
    <>
      <div className="home-screen container-fluid">
        <div className="home-cover">
          <div id="menu-jk" className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-3 logo">
                  <img className="logo-wt" src="assets/images/logo.png" alt="Logo" />
                  <img className="logo-gry" src="assets/images/logo-gray.png" alt="Gray Logo" />
                  <a data-toggle="collapse" data-target="#menu" href="#menu">
                    <i className="fas d-block d-md-none small-menu fa-bars"></i>
                  </a>
                </div>
                <div id="menu" className="col-md-9 d-none d-md-block">
                  <ul>
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <a href="#about_us">About Us</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="#cntact_us">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row home-detail">
              <div className="col-md-5 animated bounceInLeft hom-img">
                <img src="assets/me/square.jpg" alt="Profile" />
              </div>
              <div className="col-md-7 animated bounceInRight homexp">
                <h5>Hello I'm</h5>
                <h2>MADASAMY</h2>
                <span>
  Professional <a href="https://madasamy.vercel.app/">Freelance Web Designer</a>
</span>

                <ul className="socil-icon">
                  <li>
                    <a href="https://www.instagram.com/lovely._._.passion?igsh=cTZqcWYxbDZ3YWw2">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/pmadasamy553">
                      <i className="fab fa-github"></i> Github
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/madasamy-p-932aa7288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <i className="fab fa-linkedin"></i> linkedin
                    </a>
                  </li>
                </ul>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;
