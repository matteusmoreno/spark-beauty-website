import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assets/styles/Products.css';

// --- Imagens ---
import lipGlossy1 from '../assets/images/products/2-in-1-lip-colour-glossy-1.jpg';
import lipGlossy2 from '../assets/images/products/2-in-1-lip-colour-glossy-2.jpg';
import lipGlossy3 from '../assets/images/products/2-in-1-lip-colour-glossy-3.jpg';
import lipGlossy4 from '../assets/images/products/2-in-1-lip-colour-glossy-4.jpg';
import lipGlossy5 from '../assets/images/products/2-in-1-lip-colour-glossy-5.jpg';
import lipGlossy6 from '../assets/images/products/2-in-1-lip-colour-glossy-6.jpg';
import lipGlossy7 from '../assets/images/products/2-in-1-lip-colour-glossy-7.jpg';
import lipGlossy8 from '../assets/images/products/2-in-1-lip-colour-glossy-8.jpg';
import lipGlossy9 from '../assets/images/products/2-in-1-lip-colour-glossy-9.jpg';
import lipGlossy10 from '../assets/images/products/2-in-1-lip-colour-glossy-10.jpg';

import eyeliner1 from '../assets/images/products/superstay-eyeliner-1.jpg';
import eyeliner2 from '../assets/images/products/superstay-eyeliner-2.jpg';
import eyeliner3 from '../assets/images/products/superstay-eyeliner-3.jpg';
import eyeliner4 from '../assets/images/products/superstay-eyeliner-4.jpg';
import eyeliner5 from '../assets/images/products/superstay-eyeliner-5.jpg';
import eyeliner6 from '../assets/images/products/superstay-eyeliner-6.jpg';
import eyeliner7 from '../assets/images/products/superstay-eyeliner-7.jpg';
import eyeliner8 from '../assets/images/products/superstay-eyeliner-8.jpg';
import eyeliner9 from '../assets/images/products/superstay-eyeliner-9.jpg';
import eyeliner10 from '../assets/images/products/superstay-eyeliner-10.jpg';

import creamyTint1 from '../assets/images/products/triple-act -creamy-tint-1.jpg';
import creamyTint2 from '../assets/images/products/triple-act -creamy-tint-2.jpg';
import creamyTint3 from '../assets/images/products/triple-act -creamy-tint-3.jpg';
import creamyTint4 from '../assets/images/products/triple-act -creamy-tint-4.jpg';
import creamyTint5 from '../assets/images/products/triple-act -creamy-tint-5.jpg';
import creamyTint6 from '../assets/images/products/triple-act -creamy-tint-6.jpg';
import creamyTint7 from '../assets/images/products/triple-act -creamy-tint-7.jpg';
import creamyTint8 from '../assets/images/products/triple-act -creamy-tint-8.jpg';
import creamyTint9 from '../assets/images/products/triple-act -creamy-tint-9.jpg';

import cushion1 from '../assets/images/products/sparkling-glow-cushion-1.png';
import cushion2 from '../assets/images/products/sparkling-glow-cushion-2.png';
import cushion3 from '../assets/images/products/sparkling-glow-cushion-3.png';
import cushion4 from '../assets/images/products/sparkling-glow-cushion-4.png';

const allProducts = [
    {
        category: "Bibir",
        name: "Triple Act Creamy Tint",
        price: "Rp 65.000",
        description: "Tint bibir creamy dengan hasil akhir matte yang tahan lama, memberikan warna intens yang menyatu sempurna.",
        images: [creamyTint1, creamyTint2, creamyTint3, creamyTint4, creamyTint5, creamyTint6, creamyTint7, creamyTint8, creamyTint9],
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
        images: [lipGlossy1, lipGlossy2, lipGlossy3, lipGlossy4, lipGlossy5, lipGlossy6, lipGlossy7, lipGlossy8, lipGlossy9, lipGlossy10],
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
        category: "Mata",
        name: "Superstay Eyeliner",
        price: "Rp 48.000",
        description: "Eyeliner presisi dengan warna hitam pekat yang tahan air, sempurna untuk menciptakan berbagai tampilan.",
        images: [eyeliner1, eyeliner2, eyeliner3, eyeliner4, eyeliner5, eyeliner6, eyeliner7, eyeliner8, eyeliner9, eyeliner10],
        link: "https://shopee.co.id/Superstay-Eyeliner-i.59797435.8114890320",
        shades: [
            { name: "Hitam", color: "#000000" }
        ]
    },
    {
        category: "Wajah",
        name: "Sparkling Glow Cushion",
        price: "Rp 90.000",
        description: "Cushion ringan yang memberikan hasil akhir kilau sehat alami pada wajah Anda sepanjang hari.",
        images: [cushion1, cushion2, cushion3, cushion4],
        link: "https://shopee.co.id/Sparkling-Cushion-i.59797435.25539584751",
        shades: [
            { name: "Beige", color: "#F5DEB3" },
            { name: "Ivory", color: "#FFFFF0" },
            { name: "Natural", color: "#DEB887" }
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
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    className="product-swiper"
                >
                    {product.images.map((image, i) => (
                        <SwiperSlide key={i}>
                            <img src={image} alt={`${product.name} - Imagem ${i + 1}`} className="product-image-showcase" />
                        </SwiperSlide>
                    ))}
                </Swiper>
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