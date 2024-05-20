import React from "react";
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./footer.css";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <ul className="footer-links">
            <li className="flex">
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </li>
            <li>
              <Link to="/">Audio Description</Link>
            </li>
            <li>
              <Link to="/">Investor Relation</Link>
            </li>
            <li>
              <Link to="/">Legal Notice </Link>
            </li>
            <li>
              <Link to="/">1997.2024 Netflix, inc</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li>
              <Link to="/">Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Coporate Information </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
