import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/About.css'; // Importando o CSS

// Ícones para Visão e Missão
const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.12 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
    </svg>
);

const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
        <path d="M6.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm3.5.708a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
        <path d="m13.854.146 3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L15.293 4 13.146.854a.5.5 0 0 1 .708-.708z" />
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
    </svg>
);

// Ícone de Conquista
const AchievementIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0l1.669.864 1.858.962 1.944.408.82.645 1.283 1.282.645.82 1.354 2.115.408 1.944-.012.988-.962 1.858L14.3 14l-1.282 1.283-.82.645-1.944.408-1.858.962L8 16l-1.669-.864-1.858-.962-1.944-.408-.82-.645-1.283-1.282-.645-.82-1.354-2.115-.408-1.944.012-.988.962-1.858L1.7 2 2.982.717l.82-.645 1.944-.408L7.6.012 8 0zm1 4.5a.5.5 0 0 0-1 0v3.086l-1.293-1.293a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .707 0l2-2a.5.5 0 0 0-.707-.707L9 7.586V4.5z" />
    </svg>
);


const About = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: custom * 0.2,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title">Visi & Misi Kami</h2>
                    <p className="section-subtitle">Inti dari semua yang kami lakukan di Spark Beauty.</p>
                </div>

                <div className="vision-mission-grid">
                    <motion.div
                        className="about-card"
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="about-icon">
                            <VisionIcon />
                        </div>
                        <h3 className="about-title">Visi</h3>
                        <p className="about-text">"Menjadi brand kecantikan lokal terpercaya yang menghadirkan produk inovatif, alami, dan praktis sehingga mendukung setiap wanita untuk tampil percaya diri dalam kesehariannya."</p>
                    </motion.div>

                    <motion.div
                        className="about-card"
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="about-icon">
                            <MissionIcon />
                        </div>
                        <h3 className="about-title">Misi</h3>
                        <ul className="mission-list">
                            <li>Menghadirkan produk kecantikan berbahan alami yang aman untuk semua jenis kulit.</li>
                            <li>Mengembangkan inovasi produk kecantikan yang cepat, mudah, dan tetap berkualitas.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* --- NOVA SEÇÃO DE CONQUISTAS --- */}
                <div className="section-header achievement-header">
                    <h2 className="section-title">Prestasi & Pencapaian</h2>
                    <p className="section-subtitle">Perjalanan kami di dunia kecantikan sejak 2023.</p>
                </div>

                <motion.div
                    className="achievement-card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="achievement-icon">
                        <AchievementIcon />
                    </div>
                    <p className="achievement-text">
                        Spark Beauty pernah bergabung dalam beberapa event beauty sejak tahun 2023 dengan estimasi penjualan <strong>2000+ produk</strong>.
                    </p>
                    <div className="achievement-brands">
                        <span className="brand-tag">Global Market</span>
                        <span className="brand-tag">POLI</span>
                        <span className="brand-tag">CHIC</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;