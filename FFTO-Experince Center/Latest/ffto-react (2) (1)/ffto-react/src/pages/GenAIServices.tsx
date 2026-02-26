import React from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import pageData from '../data/genaiServices.json';
import { PageContent } from '../types';
import styles from './GenAIServices.module.css';

const GenAIServices: React.FC = () => {
  const data: PageContent = pageData;

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>⚙️ GenAI Services</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
      <main className={styles.main}>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.grid}>
          {data.sections.map((section, index) => (
            <ActivitySection key={index} section={section} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GenAIServices;
