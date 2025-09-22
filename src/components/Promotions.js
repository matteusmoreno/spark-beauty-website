import React from 'react';
import { motion } from 'framer-motion';

// Ícones para as promoções
const DiscountIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
        <path d="M4.57.293a.5.5 0 0 0-.293.707L6 5.293a.5.5 0 0 0 .707.293l-5-2.5a.5.5 0 0 0-.434-.707zM11.43 15.707a.5.5 0 0 0 .293-.707L10 10.707a.5.5 0 0 0-.707-.293l5 2.5a.5.5 0 0 0 .434.707z" />
        <path fillRule="evenodd" d="M5.5 6.5A1.5 1.5 0 1 1 4 5a1.5 1.5 0 0 1 1.5 1.5zm5 5A1.5 1.5 0 1 1 9 10a1.5 1.5 0 0 1 1.5 1.5z" />
    </svg>
);

const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v1.086c1.258.89 1.993 2.375 1.993 4.01V11a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 1 11V7.596c0-1.635.735-3.12 1.993-4.01V2.5zm1.007 0c-.002.26-.005.524-.005.796C4 4.886 3.01 6.11 3.01 7.596v3.404a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V7.596c0-1.486-.99-2.71-1.005-4.204 0-.272-.003-.536-.005-.796a1.5 1.5 0 0 0-3 0v1.086a.5.5 0 0 1-.993.054C11.233 2.623 10.271 2 9.25 2c-1.021 0-1.983.623-2.243 1.636a.5.5 0 0 1-.993-.054V2.5a1.5 1.5 0 0 0-3 0z" />
    </svg>
);


const Promotions = () => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (custom) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: custom * 0.2,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="promo" className="promo-section">
            <div className="promo-container">
                <div className="section-header">
                    <h2 className="section-title">Promo Spesial Event</h2>
                    <p className="section-subtitle">Penawaran eksklusif untuk membuat hari Anda lebih bersinar.</p>
                </div>

                <div className="promo-grid">
                    <motion.div
                        className="promo-card"
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="promo-icon"><DiscountIcon /></div>
                        <h3 className="promo-title">Diskon 20% Per Produk!</h3>
                        <p className="promo-description">Cukup dengan follow Instagram kami dan post story saat pembelian.</p>
                    </motion.div>

                    <motion.div
                        className="promo-card"
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="promo-icon"><GiftIcon /></div>
                        <h3 className="promo-title">Free Undian!</h3>
                        <p className="promo-description">Untuk minimal pembelian Rp 200.000 (setelah diskon).</p>
                    </motion.div>
                </div>
                <p className="promo-note">Diskon 20% berlaku tanpa minimum atau maksimum pembelian jika sesuai rules.</p>
            </div>
        </section>
    );
};

export default Promotions;