/*
  9/20 Note: This isn't complete yet
  Remaining task: I have to format the header correctly for some reason the header is not spaced out so I need to
  figure that out also just making it look nice to the user
 */
import React from "react";

const CarOfTheWeekHeader = ({ carInfo }) => {
    return (
        <>
            <header className="w-full text-center mt-[-400px]">
                <h2 className="md:text-8xl font-[Brandon] text-black subpixel-antialiased mb-4">
                    Car Of The Week!
                </h2>
                {carInfo && (
                <h3 className="text-3xl md:text-5xl font-[Brandon-Text-Black-Italic] text-black subpixel-antialiased">
                    {carInfo.year} {carInfo.manufacturer} {carInfo.model}
                </h3>
                )}
            </header>
        </>
    );
};

export default CarOfTheWeekHeader;
