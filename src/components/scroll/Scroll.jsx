import React from 'react';
import Marquee from "react-fast-marquee";
import './Scroll.scss'

function Scroll() {
    return (
        <div className="overflow-hidden">
            <div className="marquee-container">
                <Marquee speed='100' className="scroll-1 font-mono t-0 fixed" gradientWidth="0">
                    OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW...
                    OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW...  
                    OUT NOW... OUT NOW... OUT NOW... OUT NOW...
                </Marquee>
            </div>
            <div className="marquee-container">
                <Marquee speed='100' className="scroll-2 font-mono b-0 fixed" gradientWidth="0" direction="right">
                    OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW...
                    OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW...  
                    OUT NOW... OUT NOW... OUT NOW... OUT NOW...
                </Marquee>
            </div>
        </div>
    )
}

export default Scroll