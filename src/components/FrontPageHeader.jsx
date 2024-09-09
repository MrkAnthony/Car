import MovingImage from "./MovingImage.jsx";

const FrontPageHeader = () => {
    return(
        <>
    <div className="flex items-center justify-center px-auto z-10">
        {/* Blue Box Positioned on Top */}
        <div className=" bg-black w-3/4 h-[430px] flex flex-row-reverse gap-5 justify-center items-center px-5 rounded-lg
        m-3"
        >
            <MovingImage />
            {/* Small Blue Box inside Blue Box */}
            <div className="rounded-lg bg-red-600 w-7/12 h-96 ml-1 flex items-start justify-start p-4">
                {/* Text Inside Small Blue Box */}
                <h1 className="text-white text-4xl font-[Brandon] subpixel-antialiased">
                    Insight Knows Autos: Guiding You to the Perfect Car
                    <h1 className="text-left gap-4 text-white text-2xl font-[Brandon-Italic] subpixel-antialiased tracking-wide
                    leading-relaxed align-bottom whitespace-normal mt-10">
                        You’re in control! You have a vision and we make it come a reality.
                    </h1>
                </h1>
            </div>
        </div>

    </div>
            <div/>

        </>

    );
}

export default FrontPageHeader;
