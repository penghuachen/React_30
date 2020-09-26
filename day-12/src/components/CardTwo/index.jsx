import React from 'react';
import styles from './index.module.css';

console.log(styles)

const CardTwo = () => (
  <div className={styles.Card}>
    <h1>This is a card two.</h1>
    <p>card content...</p>
  </div>
);

export default CardTwo;