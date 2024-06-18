"use client"
import { CustomButton, LoadingContext, ProductCard } from "@/components";
import styles from "@/styles/products.module.css";
import { useContext, useEffect } from "react";

const Products = () => {
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
        document.querySelector("header").style.mixBlendMode = "difference";
        document.querySelector(".hamburgerMenu").style.mixBlendMode = "difference";
        return () => {
            if (document.querySelector("header")) document.querySelector("header").style.mixBlendMode = "unset";
            if (document.querySelector(".hamburgerMenu")) document.querySelector(".hamburgerMenu").style.mixBlendMode = "unset";
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
                    <ProductCard href={"/products/AIP120"} thumbnail={"/images/AIP120_oak.png"} name={"Wall-mounted Tall Cabinet"} />
                </div>
                <div>
                    <ProductCard href={"/products/AIWC80"} thumbnail={"/images/AIWC80_oak.png"} name={"Sink Basin Cabinet"} />
                </div>
                <div>
                    <ProductCard href={"/products/AIM35"} thumbnail={"/images/AIM35.png"} name={"Cabinet Extension"} />
                </div>
                <div>
                    <ProductCard href={"/products/CT115"} thumbnail={"/images/CT115.png"} name={"Countertop"} />
                </div>
            </div>
            <div id="howitworks" className={styles.howitworks}>
                <h2>How it works?</h2>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        </svg>
                        <h3>Purchase</h3>
                        <p>Go to our Amazon webstore through a link that you will find on any product page.</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                            <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                            <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                        </svg>
                        <h3>Shipment</h3>
                        <p>We ship the furniture to your desired location all over Europe.</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                            <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                            <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                        <h3>Installation</h3>
                        <p>The furniture is already pre-assembled and ready to be installed in your bathroom.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Products