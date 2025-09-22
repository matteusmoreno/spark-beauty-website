import React, { useState } from 'react';
import logo from '../assets/images/logo1.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#home" className="nav-logo">
                    <img src={logo} alt="Spark Beauty Logo" />
                </a>
                <div className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <a href="#products" className="nav-item">Produk</a>
                    <a href="#about" className="nav-item">Tentang Kami</a>
                    <a href="#promo" className="nav-item">Promo Spesial</a>
                    <a href="#contact" className="nav-item">Kontak</a>
                </div>
                <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;