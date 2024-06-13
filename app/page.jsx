"use client"
import { Footer, Intro, Section1, Section2 } from "@/components";
import styles from "@/styles/home.module.css";

export default function Home() {

  return (
    <>
      <main>
        <Intro />
        <Section1 />
        <Section2 />
        <Footer />
        {/* <Section3 />
        <Section4 /> */}
      </main>
    </>
  );
}
