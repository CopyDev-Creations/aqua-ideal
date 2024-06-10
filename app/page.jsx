"use client"
import Image from "next/image";
import styles from "@/styles/home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";
import easeInOutSineFromTo from "@/utils/easeInOutSineFromTo";

export default function Home() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        defaults: {
          ease: "slow(0.1,1,false)"
        },
        scrollTrigger: {
          trigger: '#trigger',
          pin: false, // pin the trigger element while active
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '100% bottom',
          scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          markers: false,
          // snap: {
          //   snapTo: 'labels', // snap to the closest label in the timeline
          //   duration: { min: 0.2, max: 2 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          // },
        }
      });

      let tl2 = gsap.timeline({
        defaults: {
          ease: "slow(0.1,1,false)"
        },
        scrollTrigger: {
          trigger: '#trigger',
          pin: false, // pin the trigger element while active
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '100% bottom',
          scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
      });

      let tl3 = gsap.timeline({
        defaults: {
          ease: "slow(0.1,1,false)"
        },
        scrollTrigger: {
          trigger: '#trigger',
          endTrigger: '#transition',
          pin: false, // pin the trigger element while active
          start: '10% top', // when the top of the trigger hits the top of the viewport
          end: 'top top',
          scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          onUpdate: (self) => console.log(self.progress),
          markers: true,
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

      tl2
        // .from(`.${styles.heroSection}`, { translate: "0 -0%" }, 0)
        .to(`.${styles.heroSection}`, { translate: "0 -100%" }, 0.025)

      // tl3
      //   .to('#videoContainer4', { translate: "0 -100%" }, "part4")
      //   .to('#video4', { translate: "0 100%" }, "part4")
      //   .to('#videoContainer4', { display: "none" }, "part4");
    })
  }, [])


  return (
    <>
      <main>
        <section className={styles.heroSection}>
          <div className="row">
            <h1 className={styles.title}><div className="title1"><span>Modern</span> <span>Trusted</span></div><div className="title2"><span>approach</span> <span>solutions</span></div></h1>
            {/* <h1><div className="title1"><span>Nowoczesne</span> <span>Zaufane</span></div><div className="title2"><span>podejście</span> <span>rozwiązania</span></div></h1> */}
          </div>
        </section>
        <div className={styles.trigger} id="trigger" style={{ height: '500lvh' }}>
          <section style={{ height: '100lvh' }}></section>
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
            <h2 style={{ fontWeight: 600 }}>We don’t <span style={{ fontSize: '1.4em', fontWeight: 900 }}>meet</span><br />expectations, we<br /><span style={{ fontSize: '1.4em', fontWeight: 900 }}>exceed</span> them.</h2>
            <p>
              Aqua Ideal takes restroom design to the next level, offering sleek and minimalistic furniture
              for your bathroom. Discover our inspirational collection to experience a spa-like atmosphere.
            </p>
            <img src="/AIWC80.png" alt="test" />
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
        <h2 id="test" style={{ zIndex: 10 }}>Lorem, ipsum dolor.</h2>
        <h3>Lorem, ipsum dolor.</h3>
        <p>Lorem, ipsum dolor.</p>
        <a href="#">Lorem, ipsum dolor.</a>
        {/* <Section1 />
        <Section2 />
        <Section3 />
        <Section4 /> */}
      </main>
    </>
  );
}
