"use client"
import styles from "@/styles/footer.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";

const Footer = () => {
    const d = new Date();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            let tl1 = gsap.timeline({
                defaults: {
                    ease: "slow(0.1,1,false)"
                },
                scrollTrigger: {
                    trigger: 'footer',
                    pin: false, // pin the trigger element while active
                    start: 'top bottom', // when the ___ of the trigger hits the ___ of the viewport
                    end: 'bottom bottom',
                    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    markers: false,
                }
            });

            let tl2 = gsap.timeline({
                defaults: {
                    ease: "none"
                },
                scrollTrigger: {
                    trigger: 'footer',
                    pin: false, // pin the trigger element while active
                    start: 'top bottom', // when the ___ of the trigger hits the ___ of the viewport
                    end: 'bottom bottom',
                    scrub: 0.1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    markers: false,
                }
            });

            tl1
                .addLabel('part1')
                .to(`.${styles.background}`, { display: 'none' }, "part1")
                .to(`.${styles.background}`, { display: 'unset' }, "part1")
                .addLabel('part2')
                .to('.logo', { top: "calc(100% - 60px)", translate: '0 -100%', marginTop: 0 }, "part2")
                .to('header', { mixBlendMode: 'luminosity' }, "part2")
                .addLabel('part3')
                .to('.logo', { width: '100%', lineHeight: '15lvw', fontSize: '15lvw', left: '0px' }, "part3")

            tl2.to(`.${styles.background}`, { translate: '0 0' })
        })
    }, [])

    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>Copyright &copy; {d.getFullYear()} Aqua Ideal Sp. z o. o.</p>
            <div className={styles.background}>
                <img src="/footer.png" alt="test" className={styles.backgroundImage} />
            </div>
            <a href="https://copydevcreations.com" target="_blank" className={styles.copydevcreations}><img src="/icons/copydevcreations.svg" alt="CopyDev Creations" title="Designed by CopyDev Creations" /></a>
        </footer>
    )
}
export default Footer