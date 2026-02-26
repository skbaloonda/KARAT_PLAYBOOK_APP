import React, { useState } from 'react';
import { Poster } from '../../types';
import Modal from '../common/Modal';
import styles from './PosterGallery.module.css';

interface PosterGalleryProps {
  posters: Poster[];
}

const PosterGallery: React.FC<PosterGalleryProps> = ({ posters }) => {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  return (
    <>
      <div className={styles.gallery}>
        {posters.map((poster) => (
          <div 
            key={poster.id} 
            className={styles.card}
            onClick={() => setSelectedPoster(poster)}
          >
            <h2 className={styles.title}>
              📄 {poster.title}
            </h2>
            <img 
              src={poster.imagePath} 
              alt={`${poster.title} Poster`}
              className={styles.thumb}
              loading="lazy"
            />
            <a 
              href={poster.pdfLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              Explore More
            </a>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedPoster} 
        onClose={() => setSelectedPoster(null)}
      >
        {selectedPoster && (
          <img 
            src={selectedPoster.imagePath} 
            alt={`${selectedPoster.title} Expanded`}
          />
        )}
      </Modal>
    </>
  );
};

export default PosterGallery;
