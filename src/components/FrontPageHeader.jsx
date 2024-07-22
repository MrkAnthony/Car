import MovingImage from "./MovingImage.jsx";

const FrontPageHeader = () => {
    return(
    <div className="flex items-center justify-center bg-black px-auto">
        {/* Blue Box Positioned on Top */}
        <div className="bg-blue-600 w-3/4 h-[430px] flex flex-row-reverse gap-5 justify-center items-center px-5">
            <MovingImage />
            {/* Small Blue Box inside Blue Box */}
            <div className="rounded-lg bg-blue-900 w-5/12 h-96 ml-5 flex items-start justify-start p-4">
                {/* Text Inside Small Blue Box */}
                <h1 className="text-white text-4xl font-sans font-medium subpixel-antialiased">
                    Insight Knows Autos: Guiding You to the Perfect Car
                </h1>
            </div>
        </div>
    </div>
    );
}

export default FrontPageHeader;
