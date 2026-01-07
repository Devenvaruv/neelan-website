import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Graphic Designer &amp; Marketing</p>
          <p className="footer-text">Helping brands look sharp, tell better stories, and sell with clarity.</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="mailto:hello@example.com" className="footer-text">hello@example.com</a>
          <div className="icons">
            <AiFillInstagram />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
      <p className="footer-note">© 2026 Portfolio. Built for a graphic designer focused on marketing and sales.</p>
    </footer>
  );
};

export default Footer;
