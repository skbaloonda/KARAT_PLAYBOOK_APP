import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommandCenter.module.css';

const CommandCenter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>💻 Command Center</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
      <main className={styles.main}>
        <div className={styles.placeholder}>
          <div className={styles.icon}>💻</div>
          <h2>Coming Soon</h2>
          <p>
            The Command Center dashboard for monitoring, managing, and optimizing GenAI operations is currently under development.
          </p>
          <p className={styles.subtitle}>
            This will be your centralized hub for all GenAI activities and metrics.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CommandCenter;
