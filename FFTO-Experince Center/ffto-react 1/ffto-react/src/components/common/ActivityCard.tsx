import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from '../../types';
import styles from './ActivityCard.module.css';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{activity.icon}</div>
      <div className={styles.title}>{activity.title}</div>
      <div className={styles.description}>{activity.description}</div>
      <Link to={activity.path} className={styles.button}>
        Explore More
      </Link>
    </div>
  );
};

export default ActivityCard;
