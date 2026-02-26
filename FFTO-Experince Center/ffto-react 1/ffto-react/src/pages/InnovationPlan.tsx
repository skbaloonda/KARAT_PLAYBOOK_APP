import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import Modal from '../components/common/Modal';
import pageData from '../data/innovationPlan.json';
import { PageContent } from '../types';
import styles from './InnovationPlan.module.css';

const InnovationPlan: React.FC = () => {
  const data: PageContent = pageData;
  const [showInnovationPlanModal, setShowInnovationPlanModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>💡 Innovation Plan</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {data.sections.map((section, index) => {
            if (section.title.includes('HSBC Innovation Plan')) {
              return (
                <div key={index} className={styles.section}>
                  <div className={styles.icon}>{section.icon}</div>
                  <h3>{section.title}</h3>
                  <button 
                    onClick={() => setShowInnovationPlanModal(true)}
                    className={styles.viewLink}
                  >
                    {section.linkText || 'Explore More'}
                  </button>
                </div>
              );
            }
            return <ActivitySection key={index} section={section} />;
          })}
        </div>
      </main>

      <Modal 
        isOpen={showInnovationPlanModal} 
        onClose={() => setShowInnovationPlanModal(false)}
      >
        <img 
          src="/assets/HSBC Innovation Plan.png" 
          alt="HSBC Innovation Plan"
          style={{ maxWidth: '80vw', maxHeight: '70vh', objectFit: 'contain' }}
        />
      </Modal>
    </div>
  );
};

export default InnovationPlan;
