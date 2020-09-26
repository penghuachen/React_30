import React from 'react';
import styles from './index.css';

console.log(styles)

const Card = () => (
  <div className={styles.Card}>
    <h1>This is a card.</h1>
    <p>card content...</p>
  </div>
);

export default Card;