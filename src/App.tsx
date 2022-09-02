import Body from "./components/body/body";
import React from "react";

// Styles
import styles from "./App.scss";
import Sidenav from './components/sidenav/sidenav';

const App = () => {
  return (
    <>
      <div className={styles.Container}>
        <Sidenav/>
        <Body/>
      </div>
    </>
  );
};

export default App;
