import Header from './components/header/header'
import React from "react";

// Styles
import styles from "./App.scss";
import Sidenav from './components/sidenav/sidenav';

const App = () => {
  return (
    <>
      <div className={styles.Container}>
        <Sidenav/>
      </div>
    </>
  );
};

export default App;
