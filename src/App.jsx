import './output.css';
import FrontPageHeader from "./components/FrontPageHeader.jsx";

function App() {
    return (
        <div className='flex flex-col min-h-screen w-screen'>
            <header className="bg-red-600 h-14 bg-blend-hard-light shadow-2xl p-3 z-10 flex justify-between items-center">
                <h1 className="text-white ml-3 text-3xl leading-[56px] font-[Brandon] subpixel-antialiased "
                >AutoInsight <span className="font-[Brandon-Italic] text-2xl">- Visualize Your Ride. Discover the Perfect Car!</span> </h1>
            </header>
            <FrontPageHeader />
        </div>
    );
}

export default App;