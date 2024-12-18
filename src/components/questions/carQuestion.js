
export const CarQuestions = [
    {
        id: 1,
        question: "What do you need a car for?",
        options : ['Communting', 'Family Use', 'Long Distance Travel', 'Speedster', 'City Cruising'],
        type: 'select'
    },
    {
        id: 2,
        question: "What is your budget range",
        type: 'range',
        min: '20000',
        max: '100000'
    },
    {
        id: 3,
        question: "How important is fuel efficiency to you",
        options: ['Very Important', 'Somewhat Important', 'Not Important'],
        type: 'select'
    },
    {
        id: 4,
        question: "What size of vehicle do you prefer?",
        options: ['Small (like compact cars or small sedans)', 'Medium (like mid-sized sedans or crossovers)',
            'Large (like SUVs or trucks)'],
        type: 'select'

    },
    {
        id: 5,
        question: "Which factor matters to you the most?",
        options: ['Technology features (Bluetooth, touchscreen, speakers, etc.)', 'Safety features', 'Comfort and space',
            'Style and looks'],
        type: 'select'
    }

]