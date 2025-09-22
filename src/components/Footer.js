import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <h3>Spark Beauty Indonesia</h3>
                <p>Cilandak, Jakarta Selatan</p>
                <div className="contact-info">
                    <p><strong>Email:</strong> <a href="mailto:Sparkbeautyid@gmail.com">Sparkbeautyid@gmail.com</a></p>
                    <p><strong>Telp:</strong> <a href="https://wa.me/6281389644498">+62 81389644498</a></p>
                </div>
                <div className="social-media">
                    <p>Temukan kami di:</p>
                    <span><a href="https://www.shopee.co.id/sparkbeauty_indonesia" target="_blank" rel="noopener noreferrer">Shopee</a></span>
                    <span><a href="https://www.tiktok.com/@sparkbeauty.indonesia" target="_blank" rel="noopener noreferrer">TikTok</a></span>
                </div>
                <p className="copyright">&copy; 2025 Spark Beauty. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;