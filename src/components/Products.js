import React from 'react';
// As imagens dos produtos reais serão adicionadas depois. Por enquanto, usamos placeholders.
import creamyTintImg from '../assets/images/product-placeholder.png';
import lipColourImg from '../assets/images/product-placeholder.png';
import eyelinerImg from '../assets/images/product-placeholder.png';
import cushionImg from '../assets/images/product-placeholder.png';

const productData = {
    "Bibir": [ // Categoria Lábios
        {
            name: "Triple Act Creamy Tint",
            price: "Rp 65.000",
            description: "Tint bibir creamy dengan hasil akhir matte yang tahan lama.",
            image: creamyTintImg,
            shades: [
                { name: "Peppy", color: "#E57373" },
                { name: "Dainty", color: "#F06292" },
                { name: "Keen", color: "#BA68C8" }
            ]
        },
        {
            name: "2 in 1 Lip Colour Glossy",
            price: "Rp 110.000",
            description: "Dua fungsi dalam satu, warna intens dan kilau memukau.",
            image: lipColourImg,
            shades: [
                { name: "Lea", color: "#EF5350" },
                { name: "Elanor", color: "#EC407A" },
                { name: "Gracie", color: "#AB47BC" },
                { name: "Kiera", color: "#7E57C2" },
                { name: "Julane", color: "#5C6BC0" },
                { name: "Daphne", color: "#42A5F5" },
                { name: "Holly", color: "#29B6F6" }
            ]
        }
    ],
    "Mata": [ // Categoria Olhos
        {
            name: "Superstay Eyeliner",
            price: "Rp 48.000",
            description: "Eyeliner presisi dengan warna hitam pekat yang tahan air.",
            image: eyelinerImg,
            shades: [
                { name: "Hitam", color: "#000000" }
            ]
        }
    ],
    "Wajah": [ // Categoria Rosto
        {
            name: "Sparkling Glow Cushion",
            price: "Rp 90.000",
            description: "Cushion ringan yang memberikan kilau sehat alami.",
            image: cushionImg,
            shades: [
                { name: "Beige", color: "#F5DEB3" },
                { name: "Ivory", color: "#FFFFF0" },
                { name: "Natural", color: "#DEB887" }
            ]
        }
    ]
};

const Products = () => {
    return (
        <section id="products" className="products-section-v2">
            <div className="section-header">
                <h2 className="section-title">Produk Unggulan</h2>
                <p className="section-subtitle">Diciptakan untuk menonjolkan kecantikan alamimu setiap hari.</p>
            </div>

            {Object.keys(productData).map(categoryName => (
                <div key={categoryName} className="product-category-v2">
                    <h3 className="category-title-v2">{categoryName}</h3>
                    <div className="product-grid-v2">
                        {productData[categoryName].map(product => (
                            <div key={product.name} className="product-card-v2">
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.name} className="product-image-v2" />
                                </div>
                                <div className="product-info">
                                    <h4 className="product-name-v2">{product.name}</h4>
                                    <p className="product-description-v2">{product.description}</p>
                                    <p className="product-price-v2">{product.price}</p>
                                    <div className="shades-container-v2">
                                        <p className="shades-title-v2">Pilihan Warna:</p>
                                        <div className="shades-list">
                                            {product.shades.map(shade => (
                                                <span
                                                    key={shade.name}
                                                    className="shade-color-v2"
                                                    style={{ backgroundColor: shade.color }}
                                                    title={shade.name}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="buy-button">Beli Sekarang</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Products;