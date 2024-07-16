import styles from "./Hero.module.css";
import designerImage from "../../img/designer_1.png";
import icon1 from "../../img/COMBIN.png";
import undrwa from "../../img/undraw_mobile_login_ikmv.png";
import Button from "../Button/Button";
function Hero() {
  return (
    <>
    <div className={styles.seaction}>
      <div className={styles.hero}>
        
            <div className={styles.lr}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h1>Introduce Your Product Quickly & Effectively</h1>
            </div>
            <div className={styles.descraption}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
              </p>
            </div>
            <div className={styles.descraption}>
              <p>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className={styles.btn}>
              <Button text="Purchase UI Kit" onClick={() => console.log("Clicked!")} />
              <button className={styles.lightBtn}>Learn More</button>
            </div>
          </div>
          <div className={styles.right}>
            <img src={designerImage} alt="this is hero image" />
          </div>
        </div>
      </div>
      

      <div className={styles.hero}>
        
        <div className={styles.lr}>
      <div className={styles.left}>
        <div className={styles.title}>
          <h2>Light, Fast & Powerful</h2>
        </div>
        <div className={styles.descraption}>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus {" "}
          </p>
        </div>
        <div className={styles.descraption}>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <div className={styles.big}>
        <div className={styles.col}>
        <img src={icon1} alt="this is icon image" />
        <h4>Title Goes Here</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
          </p>
        </div>
        <div className={styles.col}>
        <img src={icon1} alt="this is icon image" />
        <h4>Title Goes Here</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
          </p>
        </div>
        </div>
      </div>
      <div className={styles.right}>
      <img src={undrwa} alt="undrwa mobile image" />
      </div>
     
    </div>
  </div>
  </div>
    </>
  );
}

export default Hero;
