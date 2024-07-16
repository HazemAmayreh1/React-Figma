import styles from './Mid.module.css';
import HeroImage from '../../img/undraw_happy_news_hxmt.png';
import soical from '../../img/undraw_social_influencer_sgsv.png';
import mention from '../../img/undraw_mention_6k5d.png';
import Button from "../Button/Button";


function Mid() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={HeroImage} alt="Decorative graphic" />
      </div>
      <div className={styles.textContent}>
        <h1>Light, Fast & Powerful</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={soical} alt="Decorative graphic" />
      </div>
      <div className={styles.textContent}>
        <h1>Light, Fast & Powerful</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={mention} alt="Decorative graphic" />
      </div>
      <div className={styles.textContent}>
        <h1>Light, Fast & Powerful</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div className={styles.btn}>
       <Button  className={styles.btn}text="Purchase Now" onClick={() => console.log("Clicked!")} />
       </div>
      </div>
    </div>
    

    </>
    
  );
}

export default Mid;
