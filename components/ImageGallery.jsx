"use client"
import Image from "next/image";
import { EmblaCarousel } from ".";
import "@/styles/imageGallery.css";
import { useEffect, useState } from "react";

const ImageGallery = ({ images, onUpdateGoTo }) => {
    const OPTIONS = { loop: true };
    const [elements, setElements] = useState({ slides: [], thumbnails: [] });

    useEffect(() => {
        const slides = images.map((image, index) => <img src={image} alt={`image_${index}`} />);
        const thumbnails = images.map((image, index) => <Image src={image} alt={`thumbnail_${index}`} width={512} height={512} />);
        setElements({ slides, thumbnails })
    }, [images])

    return (
        <EmblaCarousel slides={elements.slides} thumbnails={elements.thumbnails} onUpdateGoTo={onUpdateGoTo} options={OPTIONS} />
    );
}

export default ImageGallery;