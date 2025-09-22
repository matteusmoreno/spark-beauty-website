import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/logo1.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    // Efeito para mudar o fundo da navbar ao rolar a página
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Efeito para detetar a seção ativa
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px" });

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: "#home", title: "Home" },
        { href: "#products", title: "Produk" },
        { href: "#about", title: "Tentang Kami" },
        { href: "#promo", title: "Promo Spesial" },
        { href: "#contact", title: "Kontak" }
    ];

    const menuVariants = {
        hidden: { x: '100%' },
        visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="Spark Beauty Logo" />
                </a>

                {/* Menu para Desktop */}
                <div className="nav-menu-desktop">
                    {navLinks.map(link => (
                        <a
                            key={link.title}
                            href={link.href}
                            className={`nav-item ${activeLink === link.href.substring(1) ? 'active' : ''}`}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Botão Hamburger para Mobile */}
                <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Menu para Mobile com Animação */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="nav-menu-mobile"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {navLinks.map(link => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="nav-item-mobile"
                                    onClick={toggleMenu}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;