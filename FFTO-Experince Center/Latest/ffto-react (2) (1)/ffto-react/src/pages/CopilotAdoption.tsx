import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import Modal from '../components/common/Modal';
import pageData from '../data/copilotAdoption.json';
import { PageContent } from '../types';
import styles from './CopilotAdoption.module.css';

const CopilotAdoption: React.FC = () => {
  const data = pageData as PageContent;
  const [showCipherModal, setShowCipherModal] = useState(false);
  const [showCopilotSummaryModal, setShowCopilotSummaryModal] = useState(false);

  const handleCipherClick = () => {
    setShowCipherModal(true);
  };

  const handleCopilotSummaryClick = () => {
    setShowCopilotSummaryModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>💻 Copilot Adoption</h1>
        <Link to="/genai-adoption" className={styles.backLink}>← Back to GenAI Adoption</Link>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {data.sections.map((section, index) => {
            // Special handling for Cipher Deployment Readiness Plan
            if (section.title.includes('Cipher Deployment Readiness Plan')) {
              return (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span>{section.icon}</span>
                    {section.title}
                  </h2>
                  <button 
                    onClick={handleCipherClick}
                    className={styles.viewLink}
                  >
                    {section.linkText || 'Explore More'}
                  </button>
                </section>
              );
            }
            
            // Special handling for Copilot Summary @ HSBC
            if (section.title.includes('Copilot Summary @ HSBC')) {
              return (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span>{section.icon}</span>
                    {section.title}
                  </h2>
                  <button 
                    onClick={handleCopilotSummaryClick}
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

      <Modal isOpen={showCipherModal} onClose={() => setShowCipherModal(false)}>
        <img 
          src="/assets/CIPHER Deployment Readiness Plan.png" 
          alt="Cipher Deployment Readiness Plan"
          style={{ maxWidth: '80vw', maxHeight: '70vh' }}
        />
      </Modal>

      <Modal isOpen={showCopilotSummaryModal} onClose={() => setShowCopilotSummaryModal(false)}>
        <img 
          src="/assets/Copilot Summary @ HSBC.png" 
          alt="Copilot Summary @ HSBC"
          style={{ maxWidth: '80vw', maxHeight: '70vh' }}
        />
      </Modal>
    </div>
  );
};

export default CopilotAdoption;
