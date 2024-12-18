
import { Link } from 'react-router-dom';

const CarQuestionnaireButton = () => {
    return (
        <Link
            to="/questionnaire"
            className="text-2xl font-[Brandon] px-3 py-2 bg-black text-white rounded-md
                hover:bg-gray-800 transition-all duration-200 shadow-lg border-2 border-white
                hover:scale-105 mt-10"
        >
            Find Your Perfect Ride!
        </Link>
    );
};

export default CarQuestionnaireButton;