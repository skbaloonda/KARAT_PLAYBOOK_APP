import React from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import pageData from '../data/prompts.json';
import { PageContent } from '../types';
import styles from './GenAIAdoption.module.css';

const Prompts: React.FC = () => {
  const data = pageData as PageContent;

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>💬 Prompts</h1>
        <Link to="/copilot-adoption" className={styles.backLink}>← Back to Copilot Adoption</Link>
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

export default Prompts;
