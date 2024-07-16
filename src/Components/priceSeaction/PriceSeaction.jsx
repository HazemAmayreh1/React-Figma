import styles from './PriceSeaction.module.css';
import Button from "../Button/Button";

function PriceSeaction() {
    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.pricingContainer}>
                <h1 className={styles.title}>A Price To Suit Everyone</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <div className={styles.price}>$40</div>
                <p className={styles.priceDescription}>UI Design Kit</p>
                <p className={styles.simpleText}>See, One price. Simple.</p>
                <Button className={styles.btn} text="Purchase Now" onClick={() => console.log("Clicked!")} />
            </div>
            <div className={styles.curveSection}></div>
        </div>
    );
}

export default PriceSeaction;
