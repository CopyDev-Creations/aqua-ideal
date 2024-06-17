"use client"
import { Footer, Intro, LoadingContext, Section1, Section2 } from "@/components";
import styles from "@/styles/home.module.css";
import { useContext, useEffect } from "react";

export default function Home() {
  let { stopLoading } = useContext(LoadingContext);

  useEffect(() => {
    stopLoading();
  }, [])

  return (
    <>
      <main>
        <Intro />
        <Section1 />
        <Section2 />
        <Footer />
      </main>
    </>
  );
}
