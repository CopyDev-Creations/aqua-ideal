"use client"
import styles from "@/styles/product.module.css"
import productInfo from "@/data/productInfo.json"
import { useContext, useEffect, useState } from "react";
import { CustomButton, CustomImageGallery, LoadingContext } from "@/components";

const ProductPage = ({ params }) => {
    const productData = productInfo.en[params.productID];
    const [chosenColor, setChosenColor] = useState('oak');
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
        document.querySelector("header").style.mixBlendMode = "difference";
        return () => {
            document.querySelector("header").style.mixBlendMode = "unset";
        }
    }, [])

    const changeColor = (color) => {
        setChosenColor(color);
    }


    return (
        <section className={styles.section}>
            <div className={styles.navigation}>
                <CustomButton href={"/"}>Home</CustomButton>
                <span>{'>'}</span>
                <CustomButton href={"/products"}>Products</CustomButton>
                <span>{'>'}</span>
                <CustomButton href={"#"}>{productData.short}</CustomButton>
            </div>
            <div className={styles.mainContainer}>
                <div>
                    <CustomImageGallery images={productData.images} />
                </div>
                <div className={styles.titleContainer}>
                    <h2>{productData.title}</h2>
                </div>
                <div className={styles.priceContainer}>
                    <h2><span>{productData.price.split('.')[0]}</span> <sup>{productData.price.split('.')[1]} zł</sup></h2>
                </div>
                <div className={styles.colorContainer}>
                    {productData.colors &&
                        <>
                            <h3>Color:</h3>
                            <div className={styles.colors}>
                                {productData.colors.map((color) => {
                                    const elementColor = (() => {
                                        switch (color) {
                                            case "graphite": return "#5F5E63";
                                            case "oak": return "#D5B696";
                                            case "walnut": return "#86736B";
                                        }
                                    })();
                                    return (
                                        <div key={color}>
                                            <CustomButton onClick={() => { changeColor(color) }}>
                                                <div className={styles.outerCircle} style={{ border: chosenColor == color ? "2px solid var(--primary-color)" : "" }}>
                                                    <div className={styles.innerCircle} style={{ backgroundColor: elementColor }}></div>
                                                </div>
                                            </CustomButton>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    }
                </div>
                <div className={styles.amazonContainer}>
                    <CustomButton href={productData.amazon}>
                        <h2 className={styles.amazonBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                            </svg>
                            Amazon
                        </h2>
                    </CustomButton>
                </div>
            </div>
        </section>
    )
}
export default ProductPage