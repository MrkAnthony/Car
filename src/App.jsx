import './output.css';
import FrontPageHeader from "./components/FrontPageHeader.jsx";
import CarOfTheWeek from "./components/CarOfTheWeek.jsx";
import Patterns from "./components/Patterns.jsx";

function App() {
    return (
        <div className="relative flex flex-col min-h-screen w-screen">
            {/* Patterns background behind all content */}
            <Patterns />

            {/* Header */}
            <header className="bg-red-600 h-14 shadow-2xl p-3 z-20 flex justify-between items-center">
                <h1 className="text-white ml-3 text-3xl leading-[56px] font-[Brandon] subpixel-antialiased">
                    AutoInsight{" "}
                    <span className="font-[Brandon-Italic] text-2xl">
                        - Visualize Your Ride. Discover the Perfect Car!
                    </span>
                </h1>
            </header>

            {/* Main Content */}
            <div className="relative flex flex-col gap-10 z-20 px-4 py-8 h-screen">
                <FrontPageHeader />

                {/* Car of the Week */}
                <div className="
                w-full flex flex-col md:flex-row items-center justify-center gap-10 min-h-[130vh]">
                    <CarOfTheWeek />
                </div>
            </div>
        </div>
    );
}

export default App;
