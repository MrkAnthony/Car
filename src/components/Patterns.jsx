const Patterns = () => {
    return (
        <>
            {/* Pattern background */}
            <div className="
            absolute w-full min-h-full z-10 bg-pattern bg-fixed bg-auto bg-top">
            </div>

            {/* Gradient overlay to blend the pattern into gray */}
            <div className="
            absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-neutral-300 to-80%">
            </div>
        </>
    );
};

export default Patterns;
