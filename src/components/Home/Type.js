import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return ( <
        Typewriter options = {
            {
                strings: [
                  "Effortless access to Notes, Books and more.",   
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 25,
                
            }
        }
        />
    );
}

export default Type;