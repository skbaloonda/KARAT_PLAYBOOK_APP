import React from 'react';
import styles from './SandboxLogos.module.css';

const SandboxLogos: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Available Sandboxes</h2>
      <div className={styles.logosGrid}>
        <div className={styles.logoCard}>
          <img 
            src="/assets/GCP.png" 
            alt="Google Cloud Platform"
            className={styles.logo}
          />
        </div>
        
        <div className={styles.logoCard}>
          <img 
            src="/assets/Azure.png" 
            alt="Microsoft Azure"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};

export default SandboxLogos;
