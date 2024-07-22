import React, { useState, useEffect } from "react";

const images = [
    '/Car JPEG/Stock F-150.jpg',
    '/Car JPEG/Jeep Wrangler.jpg',
    '/Car JPEG/C7 Corvette.jpg',
    '/Car JPEG/Lamborghini Urus.jpg',
    '/Car JPEG/Mercedes G-Wagon.jpg',
    '/Car JPEG/Pink G-Wagon.jpg',
    '/Car JPEG/Mcclaren.jpg',
    '/Car JPEG/TRX.jpg',
    '/Car JPEG/GT3 RS.jpeg',
    '/Car JPEG/Old Corvette.jpg'
];

function MovingImage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // changes every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-96 w-full border-2 overflow-hidden">
            <img className="object-cover w-full h-full" src={images[currentImageIndex]} alt="car" />
        </div>
    );
}

export default MovingImage;