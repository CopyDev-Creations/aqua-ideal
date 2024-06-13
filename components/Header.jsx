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

    useEffect(() => {
        checkboxRef.current.addEventListener('change', handleCheckbox);

        return () => {
            checkboxRef.current.removeEventListener('change', handleCheckbox);
        }
    }, []);


    return (
        <>
            <header className={styles.header}>
                <nav>
                    <CustomButton href={"#"} animated={false} className="logo prevent-select">Aqua Ideal</CustomButton>
                </nav>
                <label className={`${styles.hamburgerMenu} prevent-select`}>
                    <input type="checkbox" id="menu" ref={checkboxRef} />
                </label>
            </header>
            <aside className={styles.sidebar} ref={sidebarRef}>
                <a href="#">Element listy</a>
                <a href="#">Element listy</a>
                <a href="#">Element listy</a>
                <a href="#">Element listy</a>
            </aside>
        </>
    )
}
export default Header