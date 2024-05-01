import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
    subsets: ["latin"],
    weight: ["400"],
});

const logos = [
    {
        image: "/logo/boat.png",
    },
    {
        image: "/logo/budweiser.png",
    },
    {
        image: "/logo/plated.png",
    },
    {
        image: "/logo/loreal.png",
    },
    {
        image: "/logo/galaxy.png",
    },
    {
        image: "/logo/copitas.png",
    },
    {
        image: "/logo/yaki.png",
    },
    {
        image: "/logo/cadillac.png",
    },
    {
        image: "/logo/acacia.png",
    },
    {
        image: "/logo/national.png",
    },
];

const Brands = () => {
    return (
        <div>
            <div className=" p-4 mx-auto relative z-10  w-full pt-20 md:pt-32">
                <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
             bg-gray-100">
                    <span className="text-yellow-custom">The best brands</span>
                    <br />
                    Choose Us
                </div>
                <p className="mt-4 text-lg font-normal text-black max-w-lg text-center mx-auto px-4">
                    60+ Success Stories. Yours Could Be Next.
                    <br /><br />
                    As the top digital marketing agency in India, we&apos;ve ignited remarkable growth for businesses of all sizes, from startups to established corporations.
                </p>


                <div className="grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-8 items-center justify-center mx-auto cursor-pointer">
                    {logos.map((logo, i) => (
                        <div key={i} className="p-4 md:p-20">
                            <Image
                                priority
                                src={logo.image}
                                width={500}
                                height={500}
                                alt="logo"
                                className="w-full h-auto max-w-full rounded-lg"
                            />
                        </div>
                    ))}
                </div>



                {/* <div
                    className={cn(
                        "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-black  ",
                        font.className
                    )}
                >
                    &quot;We got rid of nearly a dozen different tools because of what
                    Insights Media does for us.&quot;
                </div> */}

                {/* <div className="items-center flex justify-center flex-col text-black">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={1000}
                        height={1000}
                        className="pt-2 xl:pt-0  w-10 xl:w-14 "
                    />

                    <div className=" text-center">
                        <div className="text-sm  font-medium pt-4">Ismail Khan, Gaurij Gauthankar</div>
                        <div className="text-sm">Founders, Insights Media</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Brands;