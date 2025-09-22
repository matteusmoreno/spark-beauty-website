import React from 'react';
import { motion } from 'framer-motion';
// ALTERAÇÃO: Importando a nova imagem de textura
import heroProductImage from '../assets/images/hero-beauty-texture.png';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "circOut",
            },
        },
    };


    return (
        <motion.section
            id="home"
            className="hero"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="hero-container">
                <div className="hero-content">
                    <motion.h1 variants={itemVariants}>
                        Percaya Diri Setiap Hari
                    </motion.h1>
                    <motion.p variants={itemVariants}>
                        Temukan kecantikan alami Anda dengan produk inovatif dan praktis dari Spark Beauty.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <a href="#products" className="cta-button">
                            Lihat Produk Kami
                        </a>
                    </motion.div>
                </div>
                <div className="hero-image-container">
                    <motion.div className="hero-image-bg" variants={imageVariants}></motion.div>
                    <motion.img
                        src={heroProductImage}
                        alt="Spark Beauty Product"
                        className="hero-image"
                        variants={imageVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;