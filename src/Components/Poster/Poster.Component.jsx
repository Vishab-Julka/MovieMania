import React from "react";

const Poster = (props) => {

    return( 
        <>
            <div className="flex flex-col items-start gap-2 px-1 md:px-3">
                <div className="h-40 md:h-80">
                    <img src={props.src} alt='poster' className="w-full h-full rounded-md"></img>
                </div>
                <h3 className="text-lg font-bold text-gray-700">
                    Liger
                </h3>
                <p className="text-sm text-gray-700">
                    Action/Drama/Romantic
                </p>
            </div>
        </>
    );

}

export default Poster;