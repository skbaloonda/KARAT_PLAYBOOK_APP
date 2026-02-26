import React from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import pageData from '../data/genaiAdoption.json';
import { PageContent } from '../types';
import styles from './GenAIAdoption.module.css';

const GenAIAdoption: React.FC = () => {
  const data: PageContent = pageData;

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>💡 GenAI Adoption and Industrialization</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {data.sections.map((section, index) => (
            <ActivitySection key={index} section={section} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GenAIAdoption;
