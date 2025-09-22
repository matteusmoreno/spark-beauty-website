import React from 'react';

const Promotions = () => {
    return (
        <section id="promo" className="promo-section">
            <h2>Promo Spesial Event</h2>
            <div className="promo-rules">
                <div className="promo-card">
                    <h3>Diskon 20% Per Produk!</h3>
                    <p>Cukup dengan follow Instagram kami dan post story saat pembelian.</p>
                </div>
                <div className="promo-card">
                    <h3>Free Undian!</h3>
                    <p>Untuk minimal pembelian Rp 200.000 (setelah diskon).</p>
                </div>
            </div>
            <p className="promo-note">Diskon 20% berlaku tanpa minimum atau maksimum pembelian jika sesuai rules.</p>
        </section>
    );
};

export default Promotions;