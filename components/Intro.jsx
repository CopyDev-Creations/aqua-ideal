"use client"
import styles from "@/styles/intro.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";

const Intro = () => {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            let tl = gsap.timeline({
                defaults: {
                    ease: "slow(0.1,1,false)"
                },
                scrollTrigger: {
                    trigger: '#intro-trigger',
                    pin: false, // pin the trigger element while active
                    start: 'top top', // when the ___ of the trigger hits the ___ of the viewport
                    end: '100% bottom',
                    scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    markers: false,
                    snap: {
                        snapTo: [0, 0.15, 0.459, 0.747, 1],//'labels', // snap to the closest label in the timeline
                        duration: { min: 0.2, max: 2 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                        directional: false
                    },
                }
            });

            let tl2 = gsap.timeline({
                defaults: {
                    ease: "sine.inOut"
                },
                scrollTrigger: {
                    trigger: '#intro-trigger1',
                    pin: false, // pin the trigger element while active
                    start: 'top top', // when the ___ of the trigger hits the ___ of the viewport
                    end: '200% top',
                    scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                }
            });

            // add animations and labels to the timeline
            tl
                .addLabel('part1')
                .to('.title1', { translate: "0 16.66%" }, "part1")
                .to('.title2', { translate: "0 -16.66%" }, "part1")
                .to('#videoContainer2', { translate: "0 0%" }, "part1")
                .to('#video2', { translate: "0 0%" }, "part1")
                .to('#videoContainer1', { display: "none" }, "part1")
                .to('#videoContainer2', { display: "" }, "part1")
                .addLabel('part2')
                // .to(`.${styles.heroSection}`, { translate: "0 -100%" }, "part2")
                .add("part2", "+=0.5") // delay
                .to('#videoContainer3', { translate: "0 0%" }, "part2")
                .to('#video3', { translate: "0 0%" }, "part2")
                .to('#videoContainer2', { display: "none" }, "part2")
                .to('#videoContainer3', { display: "" }, "part2")
                .addLabel('part3')
                .add("part3", "+=0.5") // delay
                .to('#videoContainer4', { translate: "0 0%" }, "part3")
                .to('#video4', { translate: "0 0%" }, "part3")
                .to('#videoContainer3', { display: "none" }, "part3")
                .to('#videoContainer4', { display: "" }, "part3")
                .addLabel('part4')
                .add("part4", "+=0.5") // delay
                .to('#videoContainer4', { translate: "0 -100%" }, "part4")
                .to('#video4', { translate: "0 100%" }, "part4")
                .to('#videoContainer4', { display: "none" }, "part4");

            tl2.to(`.${styles.heroSection}`, { translate: "0 -100%" }, 0.025)


            const canvas = document.getElementById("hero-lightpass");
            const context = canvas.getContext("2d");

            canvas.width = innerWidth;
            canvas.height = innerWidth * (1000 / 1440);

            const observer = new ResizeObserver((entries) => {
                // canvas.width = entries[0].contentRect.width;
                // canvas.height = entries[0].contentRect.height;
                canvas.width = innerWidth;
                canvas.height = innerWidth * (1000 / 1440);
                render();
            });
            observer.observe(canvas);

            const beforeTransition = () => {
                canvas.style.display = "";
                document.querySelector("body").style.background = 'var(--background)';
                document.querySelector("header").style.mixBlendMode = 'unset';
                document.querySelector(".hamburgerMenu").style.mixBlendMode = 'unset';
            }

            const afterTransition = () => {
                canvas.style.display = "none";
                document.querySelector("body").style.background = 'black';
                document.querySelector("header").style.mixBlendMode = 'difference';
                document.querySelector(".hamburgerMenu").style.mixBlendMode = 'difference';
            }

            const frameCount = 100;
            const currentFrame = (index) => `/transition/${(index).toString().padStart(4, "0")}.png`;
            const images = [];
            const animation = {
                frame: 0
            };

            for (let i = 0; i < frameCount; i++) {
                const img = document.createElement("img");
                img.src = currentFrame(i);
                img.alt = `animation-frame-${i}`;
                images.push(img);
            }

            let transition = gsap.to(animation, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: "#canvas-container",
                    endTrigger: "#end-transition",
                    start: "50% 50%", // when the ___ of the trigger hits the ___ of the viewport
                    end: "top bottom",
                    pin: true,
                    scrub: 0.1,
                    markers: false,
                    onEnterBack: beforeTransition,
                    onLeave: afterTransition,
                },
                // onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
                onUpdate: () => {
                    render();
                    if (innerHeight / innerWidth > 1000 / 1440) {
                        let height = innerWidth * (1000 / 1440);
                        let progress = (animation.frame + 1) / 100;
                        canvas.style.scale = 1 + progress * (1 / (height / innerHeight)) * 1.1;
                    } else {
                        canvas.style.scale = 1;
                    }
                }, // use animation onUpdate instead of scrollTrigger's onUpdate
            });

            images[0].onload = render;

            function render() {
                // canvas.width = innerWidth;
                // canvas.height = innerWidth * (1000 / 1440);
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images[animation.frame], 0, 0, canvas.width, canvas.height);
            }
        })

        return () => {
            document.querySelector("body").style.background = 'var(--background)';
            ctx.revert();
        }
    }, [])

    return (
        <>
            <section className={styles.heroSection}>
                <div className="row">
                    <h1 className={styles.title}><div className="title1"><span>Modern</span> <span>Trusted</span></div><div className="title2"><span>approach</span> <span>solutions</span></div></h1>
                    {/* <h1><div className="title1"><span>Nowoczesne</span> <span>Zaufane</span></div><div className="title2"><span>podejście</span> <span>rozwiązania</span></div></h1> */}
                </div>
            </section>
            <div className={styles.trigger} id="intro-trigger" style={{ height: '500lvh' }}>
                <section id="intro-trigger1" style={{ height: '100lvh' }}></section>
                <section style={{ height: '100lvh' }}>
                    <h2></h2>
                    <p style={{ alignSelf: 'flex-end' }}>
                        Our customers are central to our design process. We craft our products with your needs in mind to
                        ensure maximal functionality for everyday purposes.
                    </p>
                </section>
                <section style={{ height: '115lvh' }}>
                    <h2 className={styles.title}>Pre-built to perfection</h2>
                    <p style={{ alignSelf: 'flex-start' }}>
                        Wave goodbye to overwhelming assembly instructions. Our furniture comes pre-assembled and ready
                        for installation in your bathroom.
                    </p>
                </section>
                <section style={{ height: '85lvh' }}>
                    <h2 className={styles.title}>Top-shelf components</h2>
                    <p style={{ alignSelf: 'flex-end' }}>
                        We draw on extensive expertise by collaborating with the industry's best. Partnering with Blum
                        and Egger, we rely on proven solutions that ensure unparalleled reliability.
                    </p>
                </section>
                <section className={styles.transition} id="transition">
                    <h2 style={{ fontWeight: 600 }}>We don't <span style={{ fontSize: '1.4em', fontWeight: 900 }}>meet</span><br />expectations, we<br /><span style={{ fontSize: '1.4em', fontWeight: 900 }}>exceed</span> them.</h2>
                    <p>
                        Aqua Ideal takes restroom design to the next level, offering sleek and minimalistic furniture
                        for your bathroom. Discover our inspirational collection to experience a spa-like atmosphere.
                    </p>
                    <div className={styles.canvasContainer} id="canvas-container">
                        <canvas id="hero-lightpass" />
                    </div>
                </section>
            </div>
            <section className="videoContainer" id="videoContainer1" style={{ zIndex: 0 }}>
                <div className="video">
                    <video autoPlay muted loop playsInline id="video1">
                        <source src="/aquaideal-visual1.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section className="videoContainer" id="videoContainer2" style={{ zIndex: 1, translate: "0 100%", display: "none" }}>
                <div className="video" id="video2" style={{ translate: "0 -100%" }}>
                    <div className={styles.heroSection}>
                        <div className="row">
                            <h2 className={styles.title}><div className="title1"><span>Modern</span> <span className="prevent-select" style={{ opacity: 0 }}>Trusted</span></div><div className="title2"><span className="prevent-select" style={{ opacity: 0 }}>approach</span> <span>solutions</span></div></h2>
                            {/* <h1><div className="title1"><span>Nowoczesne</span> <span className="prevent-select" style={{ opacity: 0 }}>Zaufane</span></div><div className="title2"><span className="prevent-select" style={{ opacity: 0 }}>podejście</span> <span>rozwiązania</span></div></h1> */}
                        </div>
                    </div>
                    <video autoPlay muted loop playsInline>
                        <source src="/aquaideal-visual2.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section className="videoContainer" id="videoContainer3" style={{ zIndex: 2, translate: "0 100%", display: "none" }}>
                <div className="video" id="video3" style={{ translate: "0 -100%" }}>
                    <video autoPlay muted loop playsInline>
                        <source src="/aquaideal-visual3.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section className="videoContainer" id="videoContainer4" style={{ zIndex: 3, translate: "0 100%", display: "none" }}>
                <div className="video" id="video4" style={{ translate: "0 -100%" }}>
                    <video autoPlay muted loop playsInline>
                        <source src="/aquaideal-visual4.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <div style={{ marginTop: '200lvh' }} id="end-transition"></div>
        </>
    )
}
export default Intro