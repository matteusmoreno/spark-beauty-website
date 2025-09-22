import React from 'react';
import '../assets/styles/Footer.css'; // Importando o CSS do Footer
import { FaTiktok, FaInstagram } from 'react-icons/fa6';
import { SiShopee } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const mapLocation = "https://maps.google.com/maps?q=Medit%202%20Tower%20J%20Jasmine%20Tower%2C%20Apt.%20Mediterania%20G.R.2%2C%20Letjen%20S.%20Parman%20No.Kav.%2028%2C%20RT.9%2FRW.5%2C%20South%20Tanjung%20Duren%2C%20Grogol%20petamburan%2C%20West%20Jakarta%20City%2C%20Jakarta%2011470%2C%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed";

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
                                <SiShopee />
                            </a>
                            <a href="https://www.tiktok.com/@sparkbeauty.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <FaTiktok />
                            </a>
                            <a href="https://www.instagram.com/sparkbeauty.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className="footer-map">
                        <h4 className="footer-heading">Lokasi Kami</h4>
                        <div className="map-container">
                            <iframe
                                src={mapLocation}
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