'use client'

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { AnimatedPinDemo } from "./snippets/3d-pin-snippet";
const GraphicDesign = () => {
    return (
        
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
             bg-gradient-to-b from-black
              to bg-black bg-opacity-50">
                    <span className="text-yellow-custom">Streamline your </span>
                    <br />
                    business with our services
                </div>
                <p className="mt-4 text-lg font-normal  text-black max-w-lg text-center mx-auto px-4">
                From website design to social media management, We offer a wide range of services to help you grow your business. 
                </p>
            
       <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
       <motion.div
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="px-10 md:px-0"
           >
            <ThreeDCardExample />
             </motion.div>
       <motion.div
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="px-10 md:px-0"
           >
            <AnimatedPinDemo/>
             </motion.div>
        </div>
        </div>
        
    );
}
 
export default GraphicDesign;