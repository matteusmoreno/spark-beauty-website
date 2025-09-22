import React from 'react';
import '../assets/styles/Footer.css'; // Importando o CSS do Footer

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer-professional">
            <div className="footer-container">
                <div className="footer-main">

                    <div className="footer-about">
                        <h4 className="footer-heading">Spark Beauty</h4>
                        <p>Menjadi brand kecantikan lokal terpercaya yang menghadirkan produk inovatif, alami, dan praktis untuk mendukung setiap wanita tampil percaya diri.</p>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">Hubungi Kami</h4>
                        <ul className="contact-list">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.803V4.697l-5.803 3.546z" />
                                </svg>
                                <a href="mailto:Sparkbeautyid@gmail.com">Sparkbeautyid@gmail.com</a>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                                <a href="https://wa.me/6281389644498" target="_blank" rel="noopener noreferrer">+62 81389644498</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-heading">Temukan Kami</h4>
                        <div className="social-icons">
                            <a href="https://shopee.co.id/sparkbeauty.id" target="_blank" rel="noopener noreferrer" aria-label="Shopee">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.15,13.82c-0.31,0.05-0.62,0.12-0.92,0.22c-0.65,0.21-1.29,0.5-1.89,0.85c-1.23,0.72-2.3,1.69-3.08,2.83 c-0.58,0.84-1.04,1.78-1.2,2.71c-0.03,0.17-0.05,0.33-0.08,0.5c-0.05-0.02-0.1-0.04-0.15-0.05c-1.31-0.37-2.43-1.28-3.08-2.45 c-0.74-1.32-0.89-2.88-0.45-4.32c0.39-1.28,1.25-2.39,2.4-3.11c1.1-0.68,2.38-1.02,3.68-0.9c0.2,0.02,0.4,0.04,0.59,0.08 c-0.02-0.12-0.04-0.25-0.05-0.37c-0.18-1.79,0.31-3.58,1.38-5.04C10.74,5.1,12.21,4,13.88,3.53C14.71,3.29,15.58,3.18,16.44,3.2 c1.8,0.04,3.58,0.78,4.86,2.06c1.28,1.28,2.02,3.06,2.06,4.86c0.02,0.86-0.09,1.73-0.33,2.56c-0.47,1.67-1.57,3.14-3.02,4.18 c-1.46,1.04-3.25,1.53-5.04,1.35c-0.12-0.01-0.25-0.03-0.37-0.05c-0.01,0.2-0.03,0.4-0.06,0.59c-0.44,2.44-2.15,4.4-4.32,5.32 c-0.02,0-0.03,0.01-0.05,0.01c0.01-0.05,0.02-0.09,0.02-0.14c0.11-0.7,0.31-1.39,0.61-2.06c0.6-1.31,1.51-2.43,2.67-3.28 c0.67-0.49,1.39-0.88,2.15-1.18c0.3-0.12,0.61-0.21,0.92-0.28c0.18-0.04,0.36-0.06,0.54-0.08c-0.18,0.02-0.36,0.04-0.54,0.08 Z M11.85,11.53c-1.23-0.27-2.52-0.05-3.6,0.67c-1.1,0.73-1.84,1.88-2.07,3.17c-0.2,1.1,0.04,2.23,0.63,3.2 c0.54,0.88,1.38,1.55,2.35,1.86c0.05,0.01,0.09,0.03,0.14,0.04c-0.14-0.56-0.2-1.15-0.14-1.73c0.11-1.07,0.51-2.08,1.15-2.95 c0.83-1.14,1.95-2,3.23-2.4c0.1-0.03,0.2-0.06,0.3-0.08c-0.21-0.04-0.42-0.06-0.63-0.07C12.92,11.53,12.38,11.5,11.85,11.53 Z M17.65,14.65c-0.88,0.54-1.9,0.85-2.95,0.83c-1.29-0.23-2.44-0.97-3.17-2.07c-0.89-1.33-1.11-2.96-0.67-4.47 c0.39-1.36,1.33-2.49,2.56-3.15c1.02-0.55,2.18-0.76,3.31-0.59c1.13,0.17,2.17,0.73,2.96,1.53s1.36,1.83,1.53,2.96 c0.17,1.13-0.04,2.29-0.59,3.31c-0.51,0.93-1.26,1.72-2.15,2.29C17.9,14.62,17.77,14.63,17.65,14.65 Z" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@sparkbeauty.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.15-4.14-1.71-6.53.45-2.4 1.91-4.41 3.8-5.74.57-.4 1.18-.76 1.81-1.07.08-3.08.02-6.16.05-9.23h4.08v11.57c.02.19-.01.38-.02.57.01-.19.01-.38.02-.57V.02z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-map">
                        {/* ALTERAÇÃO: Traduzido para "Lokasi Kami" */}
                        <h4 className="footer-heading">Lokasi Kami</h4>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666421830608!2d106.7923393153945!3d-6.17539239552824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6f2c4a2c0e5%3A0x29e6e0f812d3c12e!2sMedit%202%20Tower%20J%20Jasmine%20Tower%2C%20Apt.%20Mediterania%20G.R.2!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Endereço da Spark Beauty"
                            ></iframe>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p className="copyright">Hak Cipta © {currentYear} Spark Beauty. Semua Hak Dilindungi.</p>
                    <p className="developer-credit">
                        Dikembangkan oleh <a href="https://github.com/matteusmoreno" target="_blank" rel="noopener noreferrer">Matteus Moreno</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;