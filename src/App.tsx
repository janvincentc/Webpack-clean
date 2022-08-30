import Header from './components/header'
import React from "react";

// Styles
import styles from "./App.scss";

const App = () => {
  return (
    <>
      <div className={styles.Container}>
        <Header/>
      </div>
    </>
  );
};

export default App;
