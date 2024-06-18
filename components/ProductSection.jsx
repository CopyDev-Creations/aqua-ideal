"use client"
import styles from "@/styles/product.module.css"
import { useContext, useEffect, useState } from "react";
import { CustomButton, ImageGallery, LoadingContext } from "@/components";

const ProductSection = ({ productID, productData }) => {
    const [chosenColor, setChosenColor] = useState('oak');
    const [images, setImages] = useState([]);
    let { stopLoading } = useContext(LoadingContext);

    const description = (() => {
        switch (productID) {
            case "CT115": return (
                <>
                    <p style={{ maxWidth: '700px' }}>The countertop needs to be purchased as a separate part and manually put onto the cabinet and the extension. You will find the assembly instructions in the box.</p>
                    <div className={styles.CT115_cards}>
                        <div>
                            <h3>Effortless maintenance</h3>
                            <p>Its stain-resistant finish and easy-to-clean surfaces ensure it remains pristine with minimal effort.</p>
                        </div>
                        <div>
                            <h3>Velvety smoothness</h3>
                            <p>Experience luxury anytime you glide your hand along the silky surface of Aqua Ideal furniture.</p>
                        </div>
                    </div>
                </>
            );
            case "AIWC80": return (
                <>
                    <div className={styles.AIWC80_desc}>
                        <p>The Egger lacquered board featured in this cabinet offers you the highest quality and maximal counter space for convenience and functionality, while the drawer slides from Blum ensure smooth and stable drawer action.</p>
                        <p>Designed to be compact and functional, the Aqua Ideal sink basin cabinet fits seamlessly into a luxurious and minimalistic bathroom layout.</p>
                        <p>Its lacquered surface resists moisture, making it a perfect choice for the bathroom environment.</p>
                    </div>
                    <div className={styles.AIWC80_cards} >
                        <div>
                            <h3>Convenient set-up</h3>
                            <p>Aqua Ideal furniture is already pre-built and ready to install straight from the box. Wave goodbye to overcomplicated manuals.</p>
                        </div>
                        <div>
                            <h3>Sturdy build</h3>
                            <p>The drawer sits firmly thanks to the pull-out stops, which stabilize the drawer for maximal comfort.</p>
                        </div>
                        <div>
                            <h3>Delicate Silence</h3>
                            <p>Thanks to the soft-close mechanism, the drawer makes no rattling or clunking sounds, creating a tranquil atmosphere in your bathroom.</p>
                        </div>
                        <div>
                            <h3>Effortless maintenance</h3>
                            <p>The Egger lacquered countertop is easy to clean and keeps its pristine look with minimal effort.</p>
                        </div>
                        <div>
                            <h3>Unmatched durability</h3>
                            <p>Thanks to its lacquered surface the sink basin cabinet resists anything from scratches or moisture to fingerprints and traditional stains.</p>
                        </div>
                        <div>
                            <h3>Velvety smoothness</h3>
                            <p>Experience luxury anytime you glide your hand along the surface of the silky-smooth countertop.</p>
                        </div>
                    </div>
                </>
            );
            case "AIP120": return (
                <>
                    <div className={styles.AIP120_desc}>
                        <p>Designed to save space, the Aqua Ideal wall-mounted tall cabinet utilizes the vertical space in your bathroom. This elegant and minimalistic cabinet offers increased storage while ensuring easy access to your essentials, keeping them close to eye level.</p>
                        <p>Flexible installation allows you to mount it on either the left-hand side or the right-hand side, adapting to your bathroom layout seamlessly. Crafted with top components from Blum and Egger, the Aqua Ideal cabinet boasts robust durability and an elegant design.</p>
                    </div>
                    <div className={styles.AIP120_cards} >
                        <div>
                            <h3>Convenient set-up</h3>
                            <p>Aqua Ideal furniture is already pre-built and ready to install straight from the box. Wave goodbye to overcomplicated manuals.</p>
                        </div>
                        <div>
                            <h3>Delicate Silence</h3>
                            <p>Thanks to the soft-close mechanism, the cabinet makes no rattling or clunking sounds, creating a tranquil atmosphere in your bathroom.</p>
                        </div>
                        <div>
                            <h3>Unmatched durability</h3>
                            <p>Thanks to its lacquered surface, the wall-mounted cabinet resists anything from scratches or moisture to fingerprints and traditional stains.</p>
                        </div>
                        <div>
                            <h3>Effortless maintenance</h3>
                            <p>Its stain-resistant finish and easy-to-clean surfaces ensure it remains pristine with minimal effort.</p>
                        </div>
                        <div>
                            <h3>Unparalleled Practicality</h3>
                            <p>Thanks to the cabinet's tall build, you make the most out of your bathroom space.</p>
                        </div>
                        <div>
                            <h3>Velvety smoothness</h3>
                            <p>Experience luxury anytime you glide your hand along the silky surface of the cabinet.</p>
                        </div>
                    </div>
                </>
            );
            case "AIM35": return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '700px' }}>
                    <p>The Aqua Ideal cabinet side extension meets the needs of anyone for whom the standard length of the Aqua Ideal sink basin cabinet is not enough. The cabinet Side Extension adds an additional 35 centimeters to the standard length, totaling 115 centimeters of counterspace.</p>
                    <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '20px' }}><p>The length mentioned in the description above is the total length of the additional countertop that you need to purchase with the cabinet Side Extension.</p></li>
                        <li><p>The countertop needs to be purchased as a separate part and manually put onto the cabinet and the extension. You will find the assembly instructions in the box.</p></li>
                    </ul>
                </div>
            );
            default: return <></>;
        }
    })();

    useEffect(() => {
        stopLoading();
        document.querySelector("header").style.mixBlendMode = "difference";
        document.querySelector(".hamburgerMenu").style.mixBlendMode = "difference";
        return () => {
            if (document.querySelector("header")) document.querySelector("header").style.mixBlendMode = "unset";
            if (document.querySelector(".hamburgerMenu")) document.querySelector(".hamburgerMenu").style.mixBlendMode = "unset";
        }
    }, [])

    useEffect(() => {
        setImages(productData.images.filter((elem) => elem.color == chosenColor || elem.color == "any").map((elem) => elem.image));
    }, [chosenColor])


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
                    <ImageGallery images={images} onUpdateGoTo={0} />
                </div>
                <div className={styles.titleContainer}>
                    <h2>{productData.title}</h2>
                </div>
                <div className={styles.priceContainer}>
                    <h2><span>{productData.price.split('.')[0]}</span> <sup>{productData.price.split('.')[1]} zł</sup></h2>
                </div>
                {productData.colors &&
                    <div className={styles.colorContainer}>
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
                    </div>
                }
                <div className={styles.amazonContainer}>
                    <div className={styles.amazonBg}>
                        <CustomButton href={productData.amazon}>
                            <h2 className={styles.amazonBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                </svg>
                                Shop now
                            </h2>
                        </CustomButton>
                    </div>
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                {description}
            </div>
        </section>
    )
}
export default ProductSection