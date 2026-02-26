import React from 'react';
import Footer from '../components/layout/Footer';
import styles from './Home.module.css';

const Home: React.FC = () => {
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
              src="/assets/Gen-AI.webp" 
              alt="AI Innovation" 
              className={styles.heroImage}
            />
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
