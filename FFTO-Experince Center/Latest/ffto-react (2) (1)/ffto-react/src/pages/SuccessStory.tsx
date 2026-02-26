import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import Modal from '../components/common/Modal';
import pageData from '../data/successStory.json';
import { PageContent } from '../types';
import styles from './SuccessStory.module.css';

const SuccessStory: React.FC = () => {
  const data: PageContent = pageData;
  const [showImplementationModal, setShowImplementationModal] = useState(false);

  const handleImplementationClick = () => {
    setShowImplementationModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>🏆 Success Story</h1>
        <Link to="/genai-adoption" className={styles.backLink}>← Back to GenAI Adoption</Link>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {data.sections.map((section, index) => {
            // Special handling for GenAI HSBC Implementation
            if (section.title.includes('GenAI HSBC Implementation')) {
              return (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span>{section.icon}</span>
                    {section.title}
                  </h2>
                  <button 
                    onClick={handleImplementationClick}
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

      <Modal isOpen={showImplementationModal} onClose={() => setShowImplementationModal(false)}>
        <img 
          src="/assets/GenAI HSBC Implementation.png" 
          alt="GenAI HSBC Implementation"
          style={{ maxWidth: '80vw', maxHeight: '70vh' }}
        />
      </Modal>
    </div>
  );
};

export default SuccessStory;
