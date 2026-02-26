import React from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import pageData from '../data/cgToolsAssets.json';
import { PageContent } from '../types';
import styles from './CGToolsAssets.module.css';

const CGToolsAssets: React.FC = () => {
  const data = pageData as PageContent;

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>🛠️ CG Tools and Assets</h1>
        <Link to="/genai-adoption/copilot" className={styles.backLink}>← Back to Copilot Adoption</Link>
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

export default CGToolsAssets;
