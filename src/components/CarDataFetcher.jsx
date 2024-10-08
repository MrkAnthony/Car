/** Today 8/12/2024 must redo the fetchCars function so can generate the images of the cars - Completed
 * This function sends a GET request to the Cars API on RapidAPI to retrieve information
 * about cars that match the given manufacturer, year, and model. The API key and host
 * are included in the headers for authentication.
 * Today 8/27/2024 fixed issues
 * @param manufacturer
 * @param year
 * @param model
 * @returns {Promise<any>}
 *
 * @throws {Error} if the network response is not ok
 */

export async function fetchCars(manufacturer, year, model) {
    const api_key = import.meta.env.VITE_RAPIDAPI_KEY;
    const api_host = import.meta.env.VITE_RAPIDAPI_HOST;

    try {
        const response = await fetch(
            `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}`
            , {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': api_key,
                    'x-rapidapi-host': api_host
                }
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error)
        return null;
    }
}