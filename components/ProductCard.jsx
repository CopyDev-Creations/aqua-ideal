import styles from "@/styles/card.module.css";
import Link from "next/link";
import { CustomButton } from ".";

const ProductCard = ({ href, thumbnail, name }) => {
    return (
        <CustomButton href={href || "#"} animated={false} className={styles.card}>
            <div className={styles.thumbnailContainer}>
                <img className={styles.thumbnail} src={process.env.basePath || "" + thumbnail} alt={name} />
            </div>
            <div className={styles.nameContainer}>
                <p>{name}</p>
            </div>
        </CustomButton>
    )
}
export default ProductCard