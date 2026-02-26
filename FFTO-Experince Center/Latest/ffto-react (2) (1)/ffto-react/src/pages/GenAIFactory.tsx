import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivitySection from '../components/common/ActivitySection';
import Modal from '../components/common/Modal';
import SandboxLogos from '../components/common/SandboxLogos';
import pageData from '../data/genaiFactory.json';
import { PageContent } from '../types';
import styles from './GenAIFactory.module.css';

const GenAIFactory: React.FC = () => {
  const data: PageContent = pageData;
  const [showDiagramModal, setShowDiagramModal] = useState(false);
  const [showFactoryModelModal, setShowFactoryModelModal] = useState(false);
  const [showSandboxModal, setShowSandboxModal] = useState(false);

  const handleDiagramClick = () => {
    setShowDiagramModal(true);
  };

  const handleFactoryModelClick = () => {
    setShowFactoryModelModal(true);
  };

  const handleSandboxClick = () => {
    setShowSandboxModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>🤖 GenAI Factory Model</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {data.sections.map((section, index) => {
            // Special handling for the Factory Model image
            if (section.title.includes('HSBC GenAI Factory Model')) {
              return (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    {section.icon && <span>{section.icon}</span>}
                    {section.title}
                  </h2>
                  <button 
                    onClick={handleFactoryModelClick}
                    className={styles.viewLink}
                  >
                    Explore More
                  </button>
                </section>
              );
            }
            
            // Special handling for the diagram section
            if (section.title.includes('Conceptual Architecture Diagram')) {
              return (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    {section.icon && <span>{section.icon}</span>}
                    {section.title}
                  </h2>
                  <button 
                    onClick={handleDiagramClick}
                    className={styles.viewLink}
                  >
                    {section.linkText || 'Explore More'}
                  </button>
                </section>
              );
            }
            
            // Special handling for Sandboxes section
            if (section.title.includes('Sandboxes')) {
              return (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    {section.icon && <span>{section.icon}</span>}
                    {section.title}
                  </h2>
                  <button 
                    onClick={handleSandboxClick}
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

      <Modal isOpen={showDiagramModal} onClose={() => setShowDiagramModal(false)}>
        <img 
          src="/assets/Conceptual Architecture Diagram.jpeg" 
          alt="Conceptual Architecture Diagram"
          style={{ maxWidth: '80vw', maxHeight: '70vh' }}
        />
      </Modal>

      <Modal isOpen={showFactoryModelModal} onClose={() => setShowFactoryModelModal(false)}>
        <img 
          src="/assets/GenAI Factory Model.png" 
          alt="HSBC GenAI Factory Model"
          style={{ maxWidth: '80vw', maxHeight: '70vh' }}
        />
      </Modal>

      <Modal isOpen={showSandboxModal} onClose={() => setShowSandboxModal(false)}>
        <SandboxLogos />
      </Modal>
    </div>
  );
};

export default GenAIFactory;
