import React, { useState, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const images = [
    '/assets/Gen-AI.webp',
    '/assets/download.webp',
    '/assets/OIP.webp'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}>Welcome to FFTO Experience Center</h1>
          <p className={styles.welcomeText}>
            Explore the future of GenAI innovation and transformation.
          </p>
          
          <div className={styles.imageContainer}>
            <img 
              src={images[currentImageIndex]} 
              alt="AI Innovation" 
              className={styles.heroImage}
              key={currentImageIndex}
            />
            
            <div className={styles.carouselDots}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>
              Use the <strong>" Navigation Hub "</strong> button above to explore all available resources.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
