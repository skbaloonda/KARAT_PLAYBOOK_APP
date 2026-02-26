import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import Modal from '../components/common/Modal';
import pageData from '../data/talentReadiness.json';
import { PageContent } from '../types';
import styles from './TalentReadiness.module.css';

const TalentReadiness: React.FC = () => {
  const data: PageContent = pageData;
  const [showLearningPathModal, setShowLearningPathModal] = useState(false);

  const handleLearningPathClick = () => {
    setShowLearningPathModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>👥 Talent Readiness</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
      <main className={styles.main}>
        {data.description && (
          <p className={styles.description}>{data.description}</p>
        )}
        <div className={styles.grid}>
          {data.sections.map((section, index) => {
            // Special handling for HSBC Learning Path for Agentic AI Journey
            if (section.title.includes('HSBC Learning Path for Agentic AI Journey')) {
              return (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span>{section.icon}</span>
                    {section.title}
                  </h2>
                  <button 
                    onClick={handleLearningPathClick}
                    className={styles.viewLink}
                  >
                    {section.linkText || 'Explore More'}
                  </button>
                </section>
              );
            }
            
            return <ActivitySection key={index} section={section} />;
          })}
        </div>
      </main>

      <Modal isOpen={showLearningPathModal} onClose={() => setShowLearningPathModal(false)}>
        <img 
          src="/assets/HSBC Learning Path for Agentic AI Journey.png" 
          alt="HSBC Learning Path for Agentic AI Journey"
          style={{ maxWidth: '80vw', maxHeight: '70vh' }}
        />
      </Modal>
    </div>
  );
};

export default TalentReadiness;
