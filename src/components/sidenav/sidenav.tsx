import React from 'react'
import { sideNavData } from '../data/data'
// Styles
import styles from './sidenav.scss'

const Sidenav = () => {

  return (
    <>
      <div className={styles.sideNavCont}>
        {sideNavData.map((item, index)=>(
          <div key={index} className={styles.sideNav}>
              <div className={styles.sideNavList}>
                <button>{item}</button>
              </div>
          </div>
          ))}
      </div>
    </>
  )
}

export default Sidenav
