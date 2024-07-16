import { useState, useEffect } from 'react';
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 768) {
        setIsOpen(true);  
    }
}, []);

  return (
    <>
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.nav}>
            <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
              &#9776;
            </div>
            <div className={isOpen ? styles.list : styles.listHidden}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className={styles.icon}>
              <a href="#">Landing</a>
            </div>
            <div className={styles.btn}>
              <Button text="Buy Now" onClick={() => console.log("Clicked!")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
