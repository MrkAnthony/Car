/**
 * 8/27/2024 - I fixed the issue with UseEffect and UseState hooks also I fixed the parameters issue with fetchCars
 * What I have to do next is create the new component to tie this together.
 */
import {carImageUrl} from "./CarImageFetcher.jsx";
import {fetchCars} from "./CarDataFetcher.jsx";

    const carData = {
        Dodge: ['Challenger', 'Charger', 'Durango', 'Journey', 'Grand Caravan', 'Ram 1500', 'Hornet'],
        Ford: ['F-150', 'Fusion', 'Escape', 'Explorer', 'Edge', 'Mustang'],
        Chevy: ['Silverado 1500', 'Equinox', 'Traverse', 'Malibu', 'Cruze', 'Tahoe'],
        Toyota: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Sienna', 'Tacoma'],
        Honda: ['Accord', 'Civic', 'CR-V', 'Pilot', 'Odyssey', 'Ridgeline'],
        Nissan: ['Altima', 'Sentra', 'Rogue', 'Pathfinder', 'Frontier', 'Titan'],
        Jeep: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Renegade', 'Compass', 'Gladiator'],
        Subaru: ['Outback', 'Forester', 'Crosstrek', 'Impreza', 'Legacy', 'Ascent'],
        Hyundai: ['Elantra', 'Sonata', 'Santa Fe', 'Tucson', 'Kona', 'Palisade'],
        Kia: ['Optima', 'Soul', 'Sorento', 'Sportage', 'Telluride', 'Forte'],
        Corvette: ['Stingray', 'Grand Sport', 'Z06', 'ZR1'],
        Acura: ['ILX', 'TLX', 'RLX', 'RDX', 'MDX', 'NSX'],
        Audi: ['A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
        BMW: ['2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series'],
        Cadillac: ['ATS', 'CT4', 'CT5', 'XT4', 'XT5', 'XT6'],
    }
export async function generateCars () {
    // get a random manufacturer
    const manufacturer = Object.keys(carData);
    const selectedManufacturer = manufacturer[Math.floor(Math.random() * manufacturer.length)];
    // get a random model from the manufacturer
    const model = carData[selectedManufacturer];
    const selectedModel = model[Math.floor(Math.random() * model.length)];
    // get a random year between 2000 and 2022
    const year = Math.floor(Math.random() * (2022 - 2000 + 1) + 2000);

    try {
        const fetchData = await fetchCars(selectedManufacturer, year, selectedModel);
        const carImage = await carImageUrl(selectedManufacturer, year, selectedModel);
        return {
            manufacturer: selectedManufacturer,
            model: selectedModel,
            year: year,
            data: fetchData,
            image: carImage
        }
    } catch(error) {
        console.error('There was a problem generating the car data', error);

    }

}