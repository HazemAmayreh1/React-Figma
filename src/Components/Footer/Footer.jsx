import React from 'react';
import styles from './Footer.module.css';
import instagram from '../../img/Instagram.png';
import facebook from '../../img/feacbook.png';
import youtube from '../../img/youtube.png';
import linkedin from '../../img/linkedin.png'; 
import Button from '../Button/Button';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <p>©2023 HazemAmayreh</p>
        </div>
        <div className={styles.centerSection}>
          <h2>Landing</h2>
          <hr className={styles.hrStyle} />
          <nav>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#" className={styles.navLink}>About</a>
            <a href="#" className={styles.navLink}>Contact</a>
          </nav>
        </div>
        <div className={styles.rightSection}>
          <Button className={styles.purchaseButton} text="Purchase Now" onClick={() => console.log("Clicked!")} />
          <div className={styles.socialIcons}>
            <a href="#"><img src={instagram} alt="Instagram" className={styles.socialIcon} /></a>
            <a href="#"><img src={facebook} alt="Facebook" className={styles.socialIcon} /></a>
            <a href="#"><img src={youtube} alt="YouTube" className={styles.socialIcon} /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" className={styles.socialIcon} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
