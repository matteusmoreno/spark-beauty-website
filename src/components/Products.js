import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Products.css';

// Imagens dos produtos
import creamyTintImg from '../assets/images/product-placeholder.png';
import lipColourImg from '../assets/images/product-placeholder.png';
import eyelinerImg from '../assets/images/product-placeholder.png';
import cushionImg from '../assets/images/product-placeholder.png';

const allProducts = [
    {
        category: "Bibir",
        name: "Triple Act Creamy Tint",
        price: "Rp 65.000",
        description: "Tint bibir creamy dengan hasil akhir matte yang tahan lama, memberikan warna intens yang menyatu sempurna.",
        image: creamyTintImg,
        link: "https://shopee.co.id/Triple-Action-Creamy-Tint-i.59797435.23482725263",
        shades: [
            { name: "Peppy", color: "#E57373" },
            { name: "Dainty", color: "#F06292" },
            { name: "Keen", color: "#BA68C8" }
        ]
    },
    {
        category: "Bibir",
        name: "2 in 1 Lip Colour Glossy",
        price: "Rp 110.000",
        description: "Dua fungsi dalam satu. Dapatkan warna bibir yang intens dan hasil akhir glossy yang memukau dalam satu produk.",
        image: lipColourImg,
        link: "https://shopee.co.id/2-in-1-Lip-Colour-Glossy-i.59797435.26054354717",
        shades: [
            { name: "Lea", color: "#EF5350" },
            { name: "Elanor", color: "#EC407A" },
            { name: "Gracie", color: "#AB47BC" },
            { name: "Kiera", color: "#7E57C2" },
            { name: "Julane", color: "#5C6BC0" },
            { name: "Daphne", color: "#42A5F5" },
            { name: "Holly", color: "#29B6F6" }
        ]
    },
    {
        category: "Wajah",
        name: "Sparkling Glow Cushion",
        price: "Rp 90.000",
        description: "Cushion ringan yang memberikan hasil akhir kilau sehat alami pada wajah Anda sepanjang hari.",
        image: cushionImg,
        link: "https://shopee.co.id/Sparkling-Cushion-i.59797435.25539584751",
        shades: [
            { name: "Beige", color: "#F5DEB3" },
            { name: "Ivory", color: "#FFFFF0" },
            { name: "Natural", color: "#DEB887" }
        ]
    },
    {
        category: "Mata",
        name: "Superstay Eyeliner",
        price: "Rp 48.000",
        description: "Eyeliner presisi dengan warna hitam pekat yang tahan air, sempurna untuk menciptakan berbagai tampilan.",
        image: eyelinerImg,
        link: "https://shopee.co.id/Superstay-Eyeliner-i.59797435.8114890320",
        shades: [
            { name: "Hitam", color: "#000000" }
        ]
    }
];

const ProductRow = ({ product, index }) => {
    const [activeShade, setActiveShade] = useState(product.shades[0]);

    const isReversed = index % 2 !== 0;

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            className={`product-row ${isReversed ? 'product-row-reverse' : ''}`}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image-showcase" />
            </div>
            <div className="product-details">
                <p className="product-category-tag">{product.category}</p>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description-showcase">{product.description}</p>
                <div className="shades-section">
                    <p className="shades-title">Pilihan Warna: <strong>{activeShade.name}</strong></p>
                    <div className="shades-list-showcase">
                        {product.shades.map(shade => (
                            <div
                                key={shade.name}
                                className={`shade-item-showcase ${activeShade.name === shade.name ? 'active' : ''}`}
                                onClick={() => setActiveShade(shade)}
                                onKeyPress={(e) => e.key === 'Enter' && setActiveShade(shade)}
                                tabIndex={0}
                                role="button"
                                aria-label={`Select ${shade.name} shade`}
                            >
                                <span
                                    className="shade-color-showcase"
                                    style={{ backgroundColor: shade.color }}
                                    title={shade.name}
                                ></span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product-buy-section">
                    <p className="product-price-showcase">{product.price}</p>
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="buy-button-showcase">
                        Beli di Shopee
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Products = () => {
    return (
        <section id="products" className="products-section-showcase">
            <div className="section-header">
                <h2 className="section-title">Produk Unggulan</h2>
                <p className="section-subtitle">Diciptakan untuk menonjolkan kecantikan alamimu setiap hari.</p>
            </div>
            <div className="product-list">
                {allProducts.map((product, index) => (
                    <ProductRow key={product.name} product={product} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Products;