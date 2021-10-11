import React from 'react';
import Marquee from "react-fast-marquee";
import './Scroll.scss'

function Scroll() {
    return (
        <div className="overflow-hidden">
            <Marquee speed='100' className="scroll-1 font-mono" gradientWidth="0">
                OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW...
                OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW...  
                OUT NOW... OUT NOW... OUT NOW... OUT NOW...
            </Marquee>
            <Marquee speed='100' className="scroll-2 font-mono" gradientWidth="0" direction="right">
                OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW...
                OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW... OUT NOW...  
                OUT NOW... OUT NOW... OUT NOW... OUT NOW...
            </Marquee>
        </div>
    )
}

export default Scroll