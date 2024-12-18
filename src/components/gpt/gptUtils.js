/**
 * Fetches car recommendations from OpenAI's GPT-4-turbo model based on user preferences.
 *
 * @function fetchGPTResponse
 * @async
 * @param {Object} answers - An object containing user preferences from a car survey or form.
 * The `answers` object should include fields such as:
 *   - `budget`: The user's budget for the vehicle.
 *   - `purpose`: Why the user needs the vehicle (e.g., commuting, family, off-road).
 *   - `carType`: Desired type of vehicle (e.g., SUV, Sedan, Truck).
 *   - `fuelEfficiency`: Importance of fuel efficiency.
 *   - `performanceNeeds`: Specific performance requirements (e.g., horsepower, acceleration).
 *   - `otherFactors`: Additional factors the user considers important when choosing a car.
 *
 * @returns {Promise<string>} - A user-friendly recommendation list as a string, formatted based on
 * user preferences. The recommendations include:
 *   1. Car make and model names.
 *   2. An explanation of why each car fits the user's preferences.
 *   3. A ranked order based on relevance to the user's criteria.
 *
 * @throws {Error} - Throws an error if the API call fails or returns a non-OK response.
 *
 * @example
 * const userAnswers = {
 *   budget: "20000-30000",
 *   purpose: "Family use",
 *   carType: "SUV",
 *   fuelEfficiency: "High",
 *   performanceNeeds: "Moderate",
 * };
 *
 * try {
 *   const recommendations = await fetchGPTResponse(userAnswers);
 *   console.log(recommendations);
 * } catch (error) {
 *   console.error("Failed to fetch car recommendations:", error);
 * }
 */
export const fetchGPTResponse =  async (answers) => {
    const apikey = import.meta.env.VITE_OPENAI_API_KEY;

    const payload = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a car recommendation assistant. Your goal is to provide users with personalized car suggestions based on their survey responses. The user will input preferences such as:\n" +
                    "- Budget\n" +
                    "- Why do they need the vehicle for\n" +
                    "- Car type (e.g., SUV, Sedan, Truck)\n" +
                    "- Fuel efficiency\n" +
                    "- Performance needs\n" +
                    "- What particular factors matter the user when choosing a vehicle\n\n" +
                    "Using the user's preferences, generate a database query to filter cars from the following database schema:\n" +
                    "- Table: vehicles_model\n" +
                    "- Columns: make, model, year\n" +
                    "- Vehicle details: Includes a list of attributes pertaining to the vehicle, such as gas mileage, horsepower, and seating capacity.\n\n" +
                    "Once you have filtered the results, format a user-friendly recommendation list. Each recommendation should include:\n" +
                    "1. The car make and model name.\n" +
                    "2. An explanation of why each car is a good fit for the user's preferences.\n" +
                    "3. A ranked order based on relevance to the user's criteria.\n\n" +
                    "If no cars match the user's criteria, suggest alternatives that closely align with their preferences."
            },
            {
                role: "user",
                content: `User preferences: ${JSON.stringify(answers)}. Recommend suitable cars.`
            },
        ],
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
        },
            body: JSON.stringify(payload),
        });
        console.log("Response status:", response.status);
        const data = await response.json();
        console.log("API response data", data);
        // checks if the API returned a successful response
        if(response.ok){
            return data.choices[0].message.content;
        }
        // Response didn't go well
        throw new Error(`GPT API ERROR: ${JSON.stringify(data)}`);
    } catch (error) {
        console.error("Error during GPT API: ", error)
        throw error;
    }
}