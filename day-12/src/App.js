import React from 'react';
import styles from './App.css';
import Card from './components/Card';
import CardTwo from './components/CardTwo';

function App() {
  return (
    <div className={styles.App}>
      <h2>通用型 css module 的設定</h2>
      <Card />
      <hr/>
      <h2>在 create-react-app 建立的專案中，另一種使用的方式：</h2>
      <CardTwo />
    </div>
  );
}

export default App;
