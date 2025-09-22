import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2>Visi & Misi Kami</h2>
                <div className="vision-mission">
                    <div className="vision">
                        <h3>Visi</h3>
                        <p>"Menjadi brand kecantikan lokal terpercaya yang menghadirkan produk inovatif, alami, dan praktis sehingga mendukung setiap wanita untuk tampil percaya diri dalam kesehariannya."</p>
                    </div>
                    <div className="mission">
                        <h3>Misi</h3>
                        <ul>
                            <li>Menghadirkan produk kecantikan berbahan alami yang aman untuk semua jenis kulit.</li>
                            <li>Mengembangkan inovasi produk kecantikan yang cepat, mudah, dan tetap berkualitas.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;