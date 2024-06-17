"use client"
import { CustomButton, LoadingContext, ProductCard } from "@/components";
import styles from "@/styles/products.module.css";
import { useContext, useEffect } from "react";

const Products = () => {
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
        document.querySelector("header").style.mixBlendMode = "difference";
        return () => {
            if (document.querySelector("header")) document.querySelector("header").style.mixBlendMode = "unset";
        }
    }, [])

    return (
        <section className={styles.section}>
            <div className="row">
                <CustomButton href={"/"}>Home</CustomButton>
                <span>{'>'}</span>
                <CustomButton href={"/products"}>Products</CustomButton>
                {/* <span>{'>'}</span>
                <CustomButton>Home</CustomButton> */}
            </div>
            <div className={styles.cards}>
                <div>
                    <ProductCard href={"/products/AIP120"} thumbnail={"/AIP120_oak.png"} name={"Szafka łazienkowa"} />
                </div>
                <div>
                    <ProductCard href={"/products/AIWC80"} thumbnail={"/AIWC80_oak.png"} name={"Szafka podumywalkowa"} />
                </div>
                <div>
                    <ProductCard href={"/products/AIM35"} thumbnail={"/AIM35.png"} name={"Dostawka do szafki"} />
                </div>
                <div>
                    <ProductCard href={"/products/CT115"} thumbnail={"/CT115.png"} name={"Blat łazienkowy"} />
                </div>
            </div>
            <div style={{ marginTop: '100lvh' }}></div>
            <div id="test" style={{ backgroundColor: 'red', width: '100%', height: '300px' }}></div>
            <div style={{ marginTop: '100lvh' }}></div>
        </section>
    )
}
export default Products