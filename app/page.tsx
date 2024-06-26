'use client'

import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import SliderTwo from "@/components/ui/slider1";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ChooseUs from "./choose-us";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import FooterWeb from "./web-footer";
import { color } from "framer-motion";
// import { InfiniteMovingCards } from "./testimonial";


export default function Home() {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  
  const AboutUsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  // const ourworkRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);


  const scrollToAboutUs= () => {
    AboutUsRef.current?.scrollIntoView({ behavior: "smooth",
    block: "start",
    inline: "nearest",
    
     });
  };

  const scrollToservices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTobrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollTogallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="w-full md:items-center md:justify-center bg-gray-100/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

      <Navbar 
      // scrollToAboutUs={scrollToAboutUs}
      // scrollTobrands={scrollTobrands}
      // scrollTogallery={scrollTogallery}
      // scrollToservices={scrollToservices}
      // scrollToourwork={scrolltoourwork}
      />
      <Spotlight
        className=" md:left-80 md:-top-80"
        fill="yellow"
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
             bg-gray-100">
          <span className="text-yellow-custom">Your roadmap </span>
          <br />
          to digital domination.
        </div>
        <p className="mt-4 text-lg font-normal  text-black max-w-lg text-center mx-auto px-4">
        

We are <span className="text-blue">Insights Media</span> , recognized as the top digital marketing agency in India. 

<span>Specializing</span>  in delivering impactful results tailored to your business.


        </p>
        <Link
          href={"https://wa.link/iagy10"}
          className="cursor-pointer flex items-center justify-center border border-yellow-custom rounded-full w-48 p-2 mx-auto my-6 text-black"
        >
          CHAT NOW
        </Link>
        <div className="w-full pt-20">
          <SliderOne/>
          </div>
          <div>

          <Services/>
          </div>
          
          
          <div ref={brandsRef}>

          <Brands/>
          </div>

          <div ref={servicesRef}>
          <ChooseUs/>
          </div>
<div ref={galleryRef}>
          <GraphicDesign/>
          <div ref={AboutUsRef}>
          <WebsiteDesign/>

          </div>
          </div>
          <SliderTwo/>
          <FAQS/>
          <FooterWeb/>
          {/* <InfiniteMovingCards/> */}
          
        </div>
      </div>
    
  );
}
