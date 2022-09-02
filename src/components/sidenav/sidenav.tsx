import React from "react";
import { sideNavData } from "../data/data";
// Styles
import styles from "./sidenav.scss";

const Sidenav = () => {
  return (
    <>
      <div className={styles.sideNavCont}>
        <ul className={styles.buttons}>
          <li>Burgers</li>
          <li>Drinks</li>
          <li>Vegetables</li>
          <li>Chicken</li>
          <li>Rice</li>
          <li>Desserts</li>
          <li>Fish</li>
        </ul>
      </div>
    </>
  );
};

export default Sidenav;
