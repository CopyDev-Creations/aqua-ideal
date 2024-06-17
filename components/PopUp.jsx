"use client"
import styles from "@/styles/popUp.module.css"
import { useRef } from "react";
import { CustomButton } from ".";

const PopUp = ({ handler, message, comment, yes, no, img }) => {
    const root = useRef(null);
    const popUp = useRef(null);

    let hovering = false;
    const yesButtonStyle = {
        color: '#000',
        fontSize: '2em'
    }
    const noButtonStyle = {
        color: '#000',
        fontSize: '2em'
    }

    setTimeout(() => { popUp.current.style.transform = 'scale(1)' }, 1);

    const handle = (result) => {
        popUp.current.style.transform = 'scale(0)';
        setTimeout(() => { handler(result) }, parseInt(getComputedStyle(document.querySelector(':root')).getPropertyValue('--animation-timing')));
    }

    return (
        <div className={styles.popUpRoot} ref={root} onClick={() => { if (!hovering) handle(undefined) }}>
            <div className={styles.popUp} onMouseEnter={() => { hovering = true }} onMouseLeave={() => { hovering = false }} ref={popUp}>
                <CustomButton className={styles.popUpX} onClick={() => handle(undefined)}><img src="/icons/close.svg" alt="close" style={{ width: '50px' }} /></CustomButton>
                {img
                    ? <>
                        <img src={img} alt="preview" className={styles.preview} />
                    </>
                    : <>
                        <div className={styles.message}>
                            <h4>{message}</h4>
                            {comment && <p>{comment}</p>}
                        </div>
                        <div className={styles.buttonContainer}>
                            <CustomButton style={yesButtonStyle} onClick={() => handle(true)}>yes</CustomButton>
                            <CustomButton style={noButtonStyle} onClick={() => handle(false)}>no</CustomButton>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
export default PopUp