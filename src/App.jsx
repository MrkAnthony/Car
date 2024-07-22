import './output.css';
import FrontPageHeader from "./components/FrontPageHeader.jsx";

function App() {
    return (
        <div className='flex flex-col min-h-screen w-screen bg-white'>
            <header className="mix-blend-multiply bg-blue-400 bg-blend-hard-light shadow-2xl p-4 z-10 flex justify-between items-center">
                <h1 className="text-white text-1xl font-sans font-medium subpixel-antialiased">AutoInsight - Visualize Your Ride. Discover the Perfect Car!</h1>
            </header>
            <FrontPageHeader />
        </div>
    );
}

export default App;