import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

interface Activity {
  id: string;
  title: string;
  path: string;
}

const activities: Activity[] = [
  { id: "genai-factory", title: "GenAI Factory Model", path: "/genai-factory" },
  // { id: "command-center", title: "Command Center", path: "/command-center" },
  { id: "genai-adoption", title: "GenAI Adoption and Industrialization", path: "/genai-adoption" },
  { id: "engineering-excellence", title: "Engineering Excellence", path: "/engineering-excellence" },
  { id: "genai-services", title: "GenAI Services", path: "/genai-services" },
  { id: "talent-readiness", title: "Talent Readiness", path: "/talent-readiness" },
  { id: "innovation-plan", title: "Innovation Plan", path: "/innovation-plan" },
  { id: "cipher", title: "CIPHER", path: "/cipher" },
];

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
        }
      }
    };

    // Only add listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brandText}></div>

        <div className={styles.centerButtons}>
          <Link to="/" className={styles.homeButton}>
            🏠 Home
          </Link>
          
          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              className={styles.activitiesButton}
              onClick={toggleDropdown}
            >
              Navigation Hub {isDropdownOpen ? '▲' : '▼'}
            </button>
            
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {activities.map((activity) => (
                  <Link
                    key={activity.id}
                    to={activity.path}
                    className={styles.dropdownItem}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {activity.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <img 
          src="/assets/logo.png" 
          alt="FFTO Logo" 
          className={styles.logo}
        />
      </div>
    </nav>
  );
};

export default Navbar;
