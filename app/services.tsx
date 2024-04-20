'use client'

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
    return ( <div className="max-w-5xl mx-auto py-20">
   
       <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
             bg-gradient-to-b from-black
              to bg-black bg-opacity-50">
                    <span className="text-yellow-custom">Our Services</span>
                    <br />
                    
                </div>
                <p className="mt-4 text-lg font-normal  text-black max-w-lg text-center mx-auto px-4">
                    Dedicated to pushing the boundaries of innovation,
                    our passion lies in crafting digital experiences that not only meet but exceed expectations.
                </p>

        <CardHoverEffectDemo />

    </div> 
    
    );
}
 
export default Services;