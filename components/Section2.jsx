import styles from "@/styles/section2.module.css";

const Section2 = () => {
    return (
        <section className={styles.section}>
            <h2>Beyond Luxury</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    <h3>Superb Craftsmanship</h3>
                    <p className={styles.text}>
                        We approach furnishing like art, meticulously attending to every detail to create a spa-like
                        atmosphere. High-end materials guarantee a feeling of luxury and exclusiveness and transform
                        your bathroom into a refined sanctuary.
                    </p>
                </div>
                <img src="/visual.png" alt="visual" />
            </div>
            <div className={styles.row}>
                <img src="/countertop.png" alt="countertop" />
                <div className={styles.col}>
                    <h3 className={styles.title2}><span>The Wisdom of Simplicity</span><span>The Luxury of efficiency</span></h3>
                    <p className={styles.text}>
                        Our furniture is effortless to clean and keeps its pristine look for a long time. It boasts
                        unparalleled moisture and stain resistance, enabling you to keep a clean bathroom with minimal effort.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Section2