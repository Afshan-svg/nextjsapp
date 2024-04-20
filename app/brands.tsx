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
        image: "/logo/logoipsum-248.svg",
    },
    {
        image: "/logo/logoipsum-245.svg",
    },
    {
        image: "/logo/logoipsum-225.svg",
    },
    {
        image: "/logo/logoipsum-248.svg",
    },
    {
        image: "/logo/logoipsum-249.svg",
    },
    {
        image: "/logo/stripelogo.png",
    },
];

const Brands = () => {
    return (
        <div>
            <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
                <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
             bg-gradient-to-b from-black
              to bg-black bg-opacity-50">
                    <span className="text-yellow-custom">The best brands</span>
                    <br />
                    Choose Us
                </div>
                <p className="mt-4 text-lg font-normal  text-black max-w-lg text-center mx-auto px-4">
                From small businesses to large corporations, we have helped many
          brands elevate their business.
                </p>

                <div className="grid grid-cols-4  items-center justify-center  mx-auto md:w-3/5 cursor-pointer">
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

                <div
                    className={cn(
                        "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-black  ",
                        font.className
                    )}
                >
                    &quot;We got rid of nearly a dozen different tools because of what
                    Insights Media does for us.&quot;
                </div>

                <div className="items-center flex justify-center flex-col text-black">
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
                </div>
            </div>
        </div>
    );
};

export default Brands;