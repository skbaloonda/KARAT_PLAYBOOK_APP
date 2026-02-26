import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PosterGallery from '../components/features/PosterGallery';
import postersData from '../data/posters.json';
import { Poster } from '../types';
import styles from './UseCasesPoster.module.css';

const UseCasesPoster: React.FC = () => {
  const posters: Poster[] = postersData;
  const location = useLocation();
  
  // Determine back link based on current path
  const isFromSuccessStory = location.pathname.includes('/genai-adoption/success-story');
  const backLink = isFromSuccessStory ? '/genai-adoption/success-story' : '/genai-factory';
  const backText = isFromSuccessStory ? '← Back to Success Story' : '← Back to GenAI Factory';

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>📋 Successful UseCases</h1>
        <Link to={backLink} className={styles.backLink}>{backText}</Link>
      </div>
      <main className={styles.main}>
        <PosterGallery posters={posters} />
      </main>
    </div>
  );
};

export default UseCasesPoster;
