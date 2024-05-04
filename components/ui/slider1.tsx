"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderTwo = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };
  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }
    return ( 
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
             bg-gray-100">
                    <span className="text-yellow-custom">Our Clients</span>
                    <br />
                    Feedback on working with us
                </div>
                <p className="mt-4 text-lg font-normal  text-black max-w-lg text-center mx-auto px-4">
                    See what our clients say about us
                </p>
            </div>
 <Slider {...settings}>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/testimonial.png"
              alt="Testimonial Image"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/testimonial3.png"
              alt="Testimonial Image"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/testimonial2.png"
              alt="Testimonial Image"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/testimonial3.png"
              alt="Testimonial Image"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/testimonial.png"
              alt="Testimonial Image"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
        </>
        </Slider>
    </div> 
    );
}
 
export default SliderTwo;