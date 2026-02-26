import React from 'react';
import { Link } from 'react-router-dom';
import { ActivitySection as ActivitySectionType } from '../../types';
import styles from './ActivitySection.module.css';

interface ActivitySectionProps {
  section: ActivitySectionType;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ section }) => {
  const linkContent = (
    <>
      {section.icon && <span className={styles.icon}>{section.icon}</span>}
      <span>{section.linkText || 'View'}</span>
    </>
  );

  // If no link is provided, just return the section without a clickable link
  if (!section.link) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {section.icon && <span>{section.icon}</span>}
        {section.title}
      </h2>
      {section.isExternal ? (
        <a 
          href={section.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          {linkContent}
        </a>
      ) : (
        <Link to={section.link} className={styles.link}>
          {linkContent}
        </Link>
      )}
    </section>
  );
};

export default ActivitySection;
