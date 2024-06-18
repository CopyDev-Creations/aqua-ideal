import styles from "@/styles/section1.module.css";
import { CustomButton, ProductCard } from ".";
import Link from "next/link";

const Section1 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.carouselContainer}>
                <h2 className={styles.carousel}>
                    <span>Beyond luxury Velvety smooth Ideal for you Timeless elegance Modern sophistication Unmatched quality Pure relaxation Luxurious touch Superb craftsmanship Distinctive design </span>
                    <span>Beyond luxury Velvety smooth Ideal for you Timeless elegance Modern sophistication Unmatched quality Pure relaxation Luxurious touch Superb craftsmanship Distinctive design </span>
                </h2>
            </div>
            <div className={styles.cards}>
                <div>
                    <ProductCard href={"/products/AIP120"} thumbnail={"/images/AIP120_oak.png"} name={"Wall-mounted Tall Cabinet"} />
                </div>
                <div>
                    <ProductCard href={"/products/AIWC80"} thumbnail={"/images/AIWC80_oak.png"} name={"Sink Basin Cabinet"} />
                </div>
                <div>
                    <ProductCard href={"/products/AIM35"} thumbnail={"/images/AIM35.png"} name={"Cabinet Extension"} />
                </div>
                <div>
                    <CustomButton href={"/products"} animated={false} className={styles.card}>
                        <img src={`${process.env.basePath || ""}/images/card_background.png`} alt="background" className={styles.cardBg} />
                        <div className={styles.cardContent}>
                            <h2>Discover<br />Perfection</h2>
                            <svg className={styles.cta} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            {/* <img className={styles.cta} src="/icons/arrow-right-circle.svg" alt="Next" /> */}
                        </div>
                    </CustomButton>
                </div>
                <div className={styles.scrollCard}>
                    <h3>Not convinced yet?</h3>
                    <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 302.816 302.816">
                        <path id="XMLID_6_" d="M298.423,152.996c-5.857-5.858-15.354-5.858-21.213,0l-35.137,35.136  c-5.871-59.78-50.15-111.403-112.001-123.706c-45.526-9.055-92.479,5.005-125.596,37.612c-5.903,5.813-5.977,15.31-0.165,21.213  c5.813,5.903,15.31,5.977,21.212,0.164c26.029-25.628,62.923-36.679,98.695-29.565c48.865,9.72,83.772,50.677,88.07,97.978  l-38.835-38.835c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l62.485,62.485  c2.929,2.929,6.768,4.393,10.606,4.393s7.678-1.464,10.607-4.393l62.483-62.482C304.281,168.352,304.281,158.854,298.423,152.996z" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
export default Section1