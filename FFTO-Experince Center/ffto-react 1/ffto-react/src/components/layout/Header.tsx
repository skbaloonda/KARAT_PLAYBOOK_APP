import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBackLink?: boolean;
  backTo?: string;
  backText?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "FFTO Experiece Center", 
  subtitle,
  showBackLink = false,
  backTo = "/",
  backText = "Back to Home"
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && (
        <div className={styles.subtitle}>{subtitle}</div>
      )}
      {!subtitle && !showBackLink && (
        <p className={styles.description}>
          Welcome! Explore all FFTO activities, resources, and guides below.
        </p>
      )}
      {showBackLink && (
        <Link to={backTo} className={styles.backLink}>
          ← {backText}
        </Link>
      )}
    </header>
  );
};

export default Header;
