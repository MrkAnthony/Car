import React, { useState, useEffect } from "react";

const images = [
    '/Car JPEG/Stock F-150.jpg',
    '/Car JPEG/Jeep Wrangler.jpg',
    '/Car JPEG/People_Sunset_Car.jpg',
    '/Car JPEG/BlackCorvettes.jpg',
    '/Car JPEG/BMW_M4.jpg',
    '/Car JPEG/Lamborghini Urus.jpg',
    '/Car JPEG/Race_Car_Image.jpg',
    '/Car JPEG/Mercedes G-Wagon.jpg',
    '/Car JPEG/RACE_CAR_PT2.jpg',
    '/Car JPEG/Pink G-Wagon.jpg',
    '/Car JPEG/Mcclaren.jpg',
    '/Car JPEG/Old Corvette.jpg',
    '/Car JPEG/White GTR2.jpg',
    '/Car JPEG/Mustang.jpg'
];

function MovingImage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000); // changes every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-96 w-full border-2 overflow-hidden">
            <img className="object-cover w-full h-full" src={images[currentImageIndex]} alt="car" />
        </div>
    );
}

export default MovingImage;