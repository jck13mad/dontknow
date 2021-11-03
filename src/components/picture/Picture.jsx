import React from 'react';
import './Picture.scss';

function Picture() {
    return (
        <div className="group full-pic">
            <div className="w-96 h-96 top-64 right-60 absolute z-20 group-hover:opacity-50 duration-1000 overflow-hidden">
                <img src="./dontknow.jpg" alt="album cover" />
            </div>
            <div className="
                relative 
                w-10 
                h-10 
                right-60 
                top-64 
                z-30 
                group-hover:opacity-0 
                duration-1000 
                overflow-hidden 
                bg-gray-400
                rounded-md">
                <h3 className="text-gray-50">Hover Here</h3>
            </div>
            <div className="">
                <img src="./bottle.png" alt="bottle" id="bottle"
                    className="
                        w-10 
                        h-20 
                        absolute 
                        top-80 
                        right-96 
                        z-10 
                        group-hover:z-30 
                        group-hover:scale-300 ease-in-out duration-1000" />
                <img src="./body.png" alt="sam" id="sam"
                    className="
                        w-30 
                        h-44 
                        absolute 
                        top-96 
                        right-96 
                        z-10 
                        group-hover:scale-300 ease-in-out duration-1000 
                        group-hover:z-30" />
                <img src="./smoke.png" alt="smoke" id="smoke"
                    className="
                        w-30 
                        h-40 
                        absolute 
                        top-96 
                        right-80 
                        z-10 
                        group-hover:scale-300 ease-in-out duration-1000 
                        group-hover:z-30 " />
                <img src="./sword-left.png" alt="sword-left" id="sword-left"
                    className="
                        w-30 
                        h-8 
                        absolute 
                        top-96 
                        right-96 
                        z-10 
                        group-hover:scale-300 ease-in-out duration-1000 
                        group-hover:z-30 " />
                <img src="./sword-right.png" alt="sword-right" id="sword-right"
                    className="
                        w-30 
                        h-8 
                        absolute 
                        top-96 
                        right-96 
                        z-10 
                        group-hover:scale-300 ease-in-out duration-1000 
                        group-hover:z-30 " />
            </div>
        </div>
    )
}

export default Picture;