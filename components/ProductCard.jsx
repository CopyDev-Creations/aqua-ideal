import styles from "@/styles/card.module.css";
import Link from "next/link";

const ProductCard = ({ href, thumbnail, name }) => {
    return (
        <Link href={href || "#"}>
            <div className={styles.card}>
                <img className={styles.thumbnail} src={thumbnail} alt={name} />
                <div className={styles.nameContainer}>
                    <h3>{name}</h3>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard