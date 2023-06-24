import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>
            Where movies come alive, passions ignite, and cinephiles unite
            </p>
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/tv-shows">TV Shows</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <i className="fa fa-envelope"></i> info@example.com
              </li>
              <li>
                <i className="fa fa-phone"></i> +1 123 456 7890
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Movie Website. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;