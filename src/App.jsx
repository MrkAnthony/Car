import Card from './components/Card'
import './output.css'


function App() {
    return (
        <div className='flex flex-col min-h-screen w-screen bg-white'>
            <header className="bg-blue-400 bg-blend-hard-light shadow-2xl p-4 z-10 flex justify-between items-center">
                <h1 className="text-white text-1xl font-sans font-medium subpixel-antialiased">AutoInsight - Visualize Your Ride. Discover the Perfect Car!</h1>
            </header>
            <div className="flex flex-col items-center justify-center relative">
                {/* Black Box */}
                <div className="bg-black w-full h-[430px]"></div>
                {/* Blue Box Positioned on Top */}
                <div className="absolute top-0 right-1/8 bg-blue-600 w-3/4 h-[430px] z-10 flex items-center">
                    {/* Small Blue Box inside Blue Box */}
                    <div className="relative rounded-lg bg-blue-900 w-5/12 h-96 ml-5 flex items-start justify-start p-4">
                        {/* Text Inside Small Blue Box */}
                        <h1 className="text-white text-4xl font-sans font-medium subpixel-antialiased">
                            Insight Knows Autos: Guiding You to the Perfect Car
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App
