"use client";
import React, { useState, MouseEvent } from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleImageChange = (event: any) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setBackgroundImage("https://images.pexels.com/photos/7449040/pexels-photo-7449040.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");
    }
  };

  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="https://www.instagram.com/insightsmedia.in">
    <a href="https://www.instagram.com/insightsmedia.in" target="_blank" rel="noopener noreferrer">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Insights Media
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-yellow">
                    #1 Digital Marketing Agency in Goa
                </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4" style={{ backgroundImage: "url('/logo/okok.png')" }} />
        </div>
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 flex justify-center items-center">
            HOVER & CLICK TO VIEW MORE
        </h3>
    </a>
</PinContainer>

      
    </div>
  );
}
