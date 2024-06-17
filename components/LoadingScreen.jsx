"use client"
import styles from "@/styles/loading.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { LenisContext, LoadingContext } from "."

const LoadingScreen = ({ children }) => {
    let { lenis } = useContext(LenisContext);
    const [loading, setLoading] = useState(true);
    const loadingScreen = useRef(null)

    useEffect(() => {
        if (loadingScreen.current) {
            if (loading) {
                loadingScreen.current.style.display = "unset";
            } else {
                if (!window.location.hash) {
                    lenis?.scrollTo(0);
                }
                setTimeout(() => {
                    loadingScreen.current.style.display = "none";
                }, parseInt(getComputedStyle(document.querySelector(':root')).getPropertyValue('--transition')));
            }
        }
    }, [loading]);

    const startLoading = (_callback) => {
        console.log("startLoading");
        setLoading(true);
        setTimeout(() => {
            _callback();
        }, 300);
    }

    const stopLoading = () => {
        console.log("stopLoading");
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }

    return (
        <LoadingContext.Provider value={{ startLoading, stopLoading }}>
            {/* {loading && */}
            <div className={styles.loading} style={{ display: 'unset' }} ref={loadingScreen}>
                <p>LOADING</p>
            </div>
            {/* }*/}
            {children}
        </LoadingContext.Provider>
    )
}
export default LoadingScreen