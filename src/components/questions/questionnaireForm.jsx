
import {CarQuestions} from "./carQuestion.js";
import {useState} from "react";
import {fetchGPTResponse} from "../gpt/gptUtils.js";
import { zoomies } from 'ldrs'
zoomies.register()

const QuestionnaireForm = () => {
    const [answers, setAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [recommendation, setRecommendation] = useState("");
    const [currentValue, setCurrentValue] = useState(20000);

    const handleOptionSelection = (questionID, value) => {
        setAnswers((prev) => ({
            ...prev,
            [questionID]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Form answers:", answers);

            const gptResponse = await fetchGPTResponse(answers);
            if(!gptResponse) throw new Error("No response received")

            console.log("GPT Response:", gptResponse); // Add this to see the response in console
            const parsedResponse = gptResponse.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                (_, label, url) => {
                    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-red-600 underline">${label}</a>`
                }
            );

            setRecommendation(parsedResponse)
        } catch (error) {
            console.error("Error Loading GPT API CALL:", error);
            alert("Error getting recommendations. Please try again."); // Add basic error alert
        } finally {
            setIsLoading(false);
        }
    };

    const sliderCount = (e) => {
        const value = Number(e.target.value)
        setCurrentValue(value);
        return value
    }

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <div className="mt-6">
                    {CarQuestions.map((question) => (
                        <div key={question.id} className="mb-4 text-black font-[B">
                            <h3 className="font-[Brandon] text-black text-xl mb-2">{question.question}</h3>
                            {/* Handle different question types */}
                            {question.type === "select" && (
                                <div>
                                    {question.options.map((option, index) => (
                                        <div key={index} className="flex items-center mb-2">
                                            <input
                                                type="radio"
                                                name={`question-${question.id}`}
                                                value={option}
                                                onChange={() => handleOptionSelection(question.id, option)}
                                                className="mr-2"
                                            />
                                            <label>{option}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {question.type === "range" && (
                                <div>
                                    <p className="font-[Brandon-Italic] text-black"> ${currentValue}</p>
                                    <input
                                        type="range"
                                        min={question.min}
                                        max={question.max}
                                        value={currentValue}
                                        onChange={(e) => {
                                            sliderCount(e);  // Update display value
                                            handleOptionSelection(question.id, e.target.value);  // Store in answers
                                        }}
                                        className="w-full"
                                    />
                                    <p className="font-[Brandon-Italic] text-gray-500">Range: ${question.min} - ${question.max}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Submit
                </button>
            </form>

            {isLoading && (
                <div className="flex flex-col justify-center items-center">
                    <l-zoomies
                        size="80"
                        stroke="5"
                        bg-opacity="0.1"
                        speed="1.4"
                        color="black"
                        duration= "3000"
                    ></l-zoomies>
                    <p className="font-[Brandon-Italic] text-black mt-2"> Loading The Perfect List... </p>
                </div>
            )}

            {recommendation && (
                <div className="mt-4 p-4 bg-white rounded shadow">
                    <pre className="whitespace-pre-wrap text-black font-[Brandon-Italic] antialiased"
                         dangerouslySetInnerHTML={{
                             __html: recommendation.replace(/\*\*/g, "")
                         }}>
                    </pre>
                </div>
            )}
        </div>
    );
};


export default QuestionnaireForm;