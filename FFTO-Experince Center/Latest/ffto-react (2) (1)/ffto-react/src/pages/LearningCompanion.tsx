import React from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import pageData from '../data/learningCompanion.json';
import { PageContent } from '../types';
import styles from './LearningCompanion.module.css';

const LearningCompanion: React.FC = () => {
  const data = pageData as PageContent;

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>🤝 Learning Companion</h1>
        <Link to="/talent-readiness" className={styles.backLink}>← Back to Talent Readiness</Link>
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

export default LearningCompanion;
