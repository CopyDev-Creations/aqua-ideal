"use client"
import { useContext, useRef } from 'react';
import styles from "@/styles/customButton.module.css"
import { LenisContext } from '.';
import { useRouter } from 'next/navigation';

const customButton = ({ name, href, animated, className, style, onClick, children }) => {
    const buttonRef = useRef(null);
    let { lenis } = useContext(LenisContext);
    const router = useRouter();

    if (animated === undefined) animated = true;

    const handleButton = () => {
        if (onClick !== undefined) onClick();
        if (href[0] == '#' || href[0] == '.') {
            let elem = document.querySelector(href);
            if (elem.parentElement.className == 'pin-spacer') elem = elem.parentElement;
            if (elem.offsetTop == lenis?.targetScroll) return;
            lenis?.scrollTo(href, {
                duration: Math.abs(elem.offsetTop - lenis?.targetScroll) / innerHeight * 0.25,//2,
                lock: true,
                easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
            })
        } else {
            router.push(href);
        }
    }

    return (
        <button className={(className !== undefined ? ` ${className}` : '') + (animated ? ` ${styles.customButton}` : ` ${styles.customButtonStatic}`)} onClick={handleButton} style={{ fontSize: `${name ? '' : '0'}`, ...style }} ref={buttonRef}><div className={styles.buttonContent}>{name || children}</div></button>
    )
}
export default customButton