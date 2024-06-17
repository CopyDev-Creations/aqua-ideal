"use client"
import styles from "@/styles/header.module.css"
import Link from "next/link";
import { useEffect, useRef } from "react"
import { CustomButton } from ".";

const Header = () => {
    const checkboxRef = useRef(null);
    const sidebarRef = useRef(null);

    const handleCheckbox = (event) => {
        if (event.currentTarget.checked) {
            sidebarRef.current.style.translate = '0%';
        } else {
            sidebarRef.current.style.translate = '';
        }
    }

    const handleClick = (event) => {
        if (event.target.className != styles.sidebar && event.pointerId == 1 && event.target.className != `${styles.hamburgerMenu} prevent-select hamburgerMenu`) {
            checkboxRef.current.checked = false;
            sidebarRef.current.style.translate = '';
        }
    }

    useEffect(() => {
        checkboxRef.current.addEventListener('change', handleCheckbox);
        document.addEventListener('click', handleClick);

        return () => {
            checkboxRef.current.removeEventListener('change', handleCheckbox);
            document.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <>
            <header className={styles.header}>
                <nav>
                    <CustomButton href={"/"} animated={false} className="logo prevent-select">Aqua Ideal</CustomButton>
                </nav>
            </header>
            <label className={`${styles.hamburgerMenu} prevent-select hamburgerMenu`}>
                <input type="checkbox" id="menu" className={styles.menu} ref={checkboxRef} />
            </label>
            <aside className={styles.sidebar} ref={sidebarRef}>
                <CustomButton href="/" className={styles.link}>Home</CustomButton>
                <CustomButton href="/products" className={styles.link}>Products</CustomButton>
                <CustomButton href="/products/#test" className={styles.link}>How it works</CustomButton>
            </aside>
        </>
    )
}
export default Header