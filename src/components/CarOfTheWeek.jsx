/*
 9/20 Note: The feature is fully functional and seems to be working well.
  Remaining task: Format the header correctly for better alignment or styling.
 */
import React, { useState, useEffect } from 'react';
import {generateCars} from "./CarGenerator.jsx";
import CarOfTheWeekHeader from "./CarOfTheWeekHeader.jsx";

function CarOfTheWeek() {
    const [car, setCar] = useState(null)
    const[carInfo, setCarInfo] = useState(null)

    useEffect(() => {
        async function fetchCar() {
            try {
                const data = await generateCars();
                console.log('Car Info:', data);
                setCar(data.image);  // Keep this the same for image
                setCarInfo({  // Add car details separately
                    year: data.year,
                    manufacturer: data.manufacturer,
                    model: data.model
                });
            } catch (e) {
                console.error('There is an issue', e);
            }
        }

        fetchCar();
    }, []);

    return (
        <div className="
        absolute w-full min-h-[150px] flex justify-start items-center pt-[56vh] pb-34 bg-cover bg-neutral-300">
            <CarOfTheWeekHeader carInfo={carInfo} />
            {car && (
                <img
                    src={car}
                    alt="Car Of The Week"
                    className=
                        "w-11/12 max-w-[900px] h-auto mt-[-400px]"
                />
            )}
        </div>
    )

}
export default CarOfTheWeek