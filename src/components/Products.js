import React from 'react';
import productPlaceholder from '../assets/images/product-placeholder.png';

const productData = [
    {
        name: "Triple Act Creamy Tint",
        price: "Rp 65.000",
        shades: "3 Pilihan Shade: Peppy, Dainty, Keen.",
        image: productPlaceholder
    },
    {
        name: "2 in 1 Lip Colour Glossy",
        price: "Rp 110.000",
        shades: "7 Pilihan Shade: Lea, Elanor, Gracie, dll.",
        image: productPlaceholder
    },
    {
        name: "Superstay Eyeliner",
        price: "Rp 48.000",
        shades: "Warna: Hitam Pekat.",
        image: productPlaceholder
    },
    {
        name: "Sparkling Glow Cushion",
        price: "Rp 90.000",
        shades: "3 Pilihan Shade: Beige, Ivory, Natural.",
        image: productPlaceholder
    }
];

const Products = () => {
    return (
        <section id="products" className="products-section">
            <h2>Produk Unggulan Kami</h2>
            <div className="product-grid">
                {productData.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <p className="product-shades">{product.shades}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;