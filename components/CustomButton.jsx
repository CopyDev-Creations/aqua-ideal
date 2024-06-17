"use client"
import { useContext, useEffect, useRef } from 'react';
import styles from "@/styles/customButton.module.css"
import { LenisContext, LoadingContext } from '.';
import { usePathname, useRouter } from 'next/navigation';

const customButton = ({ href, animated, className, style, onClick, children }) => {
    const buttonRef = useRef(null);
    let { lenis } = useContext(LenisContext);
    let { startLoading } = useContext(LoadingContext);
    const router = useRouter();
    const pathname = usePathname();

    if (animated === undefined) animated = true;

    const handleButton = () => {
        if (onClick !== undefined) onClick();
        if (href?.length == 0 || !href) return;
        if (href[0] == '#' || href[0] == '.' || href == pathname || href == `${pathname}/#${href.split('#')[1]}`) {
            let elem;
            if (href == `${pathname}/#${href.split('#')[1]}`) {
                elem = document.querySelector(`#${href.split('#')[1]}`);
            } else {
                elem = document.querySelector(href == "#" || href == pathname ? "body" : href);
                if (elem.parentElement.className == 'pin-spacer') elem = elem.parentElement;
                if (elem.offsetTop == lenis?.targetScroll) return;
            }
            lenis?.scrollTo(elem, {
                duration: Math.abs(elem.offsetTop - lenis?.targetScroll) / innerHeight * 0.25,
                lock: true,
                easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
            })
        } else if (!href.includes("http")) {
            startLoading(() => {
                router.push(href);
            })
        }
    }

    return (
        <>
            {href?.includes("http")
                ?
                <a href={href} target='_blank' className={(className !== undefined ? ` ${className}` : '') + (animated ? ` ${styles.customButton}` : ` ${styles.customButtonStatic}`)} onClick={handleButton} style={{ ...style }} ref={buttonRef}><div className={styles.buttonContent}>{children}</div></a>
                :
                <button className={(className !== undefined ? ` ${className}` : '') + (animated ? ` ${styles.customButton}` : ` ${styles.customButtonStatic}`)} onClick={handleButton} style={{ ...style }} ref={buttonRef}><div className={styles.buttonContent}>{children}</div></button>
            }
        </>
    )
}
export default customButton