"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/image2.png",
    quote: "Data-Driven:",
    name: "No more guessing just data-fueled growth.",
  },
  {
    image: "/images/shop-2.jpeg",
    quote:
      "Unmatched Expertise",
    name: "We know digital, inside and out.",
  },

  {
    image: "/images/s-2.webp",
    quote:
      "Results you can measure",
    name: "Transparency matters. See your success in numbers.",
  },
];

const ChooseUs = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#000000] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
      <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
             bg-gradient-to-b from-black
              to bg-black bg-opacity-50">
                    <span className="text-yellow-custom">Why Us</span>
                    
                </div>

        <p className="mt-4 text-lg font-normal  text-white max-w-lg text-center mx-auto">
          We create stunning businesses that are designed to convert.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-white font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-white font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;