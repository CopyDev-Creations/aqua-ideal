"use client"
import styles from "@/styles/header.module.css"

const Header = () => {

    return (
        <>
            <header className={styles.header}>
                <nav>
                    <h3 className="logo prevent-select">Aqua Ideal</h3>
                </nav>
                <label className={`${styles.hamburgerMenu} prevent-select`}>
                    <input type="checkbox" id="menu" />
                </label>
                <aside className={styles.sidebar}>
                    <a href="#">Element listy</a>
                    <a href="#">Element listy</a>
                    <a href="#">Element listy</a>
                    <a href="#">Element listy</a>
                </aside>
            </header>
        </>
    )
}
export default Header