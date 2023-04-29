import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import CardImage from "../Images/home-image-01.jpg";
import ScrollDown from "./scrollDown/ScrollDown";

function HomeCarousal() {
  const slides = [
    {
      title: "MT71 (CLOSE LOOP / GEARLESS) INTEGRATED PANEL",
      desc: "	Short Floor / High Speed Lift Application.",
      url: "https://firebasestorage.googleapis.com/v0/b/laxnar-8b7aa.appspot.com/o/files%2FMT71_CLOSE_LOOP_GEARLESS_INTEGRATED_PANEL-png2023-4-15%205%3A24%3A19?alt=media&token=b65a6afd-e1fa-47b1-b764-9861cb3f9fdd",
    },
    {
      title: " (OPEN LOOP / GEARED) INTEGRATED PANEL",
      desc: "MT73",
      url: "https://firebasestorage.googleapis.com/v0/b/laxnar-8b7aa.appspot.com/o/files%2F2ND_LX%2040%20AUTO-webp2023-4-21%208%3A27%3A54?alt=media&token=11232651-b1ec-4805-b60d-666f3ebcc683",
    },
    {
      title: "LX-32 HYDRO (HYDRAULIC-CONTROL PANEL)",
      desc: "LX-32",
      url: "https://firebasestorage.googleapis.com/v0/b/laxnar-8b7aa.appspot.com/o/files%2F5TH_LX-32%20HYDRO-webp2023-4-21%208%3A39%3A15?alt=media&token=29935129-ce5c-4d46-8d36-ae0f72b6cea9",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" mt-24 max-sm:mt-30 md:mt-14 max-w-[1400px] h-screen w-full m-auto relative group">
      {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500' 
      >
        
      </div> */}
      {/* Left Arrow */}

      {/* {currentIndex ===0} */}

      <div className="w-full h-full bg-center bg-gray-800 flex md:flex-row flex-col-reverse max-lg:align-middle max-lg:items-center max-sm:align-middle max-sm:items-center">
        <div className="w-2/5 h-full relative justify-center items-center">
          <div className="mt-12 absolute text-white text-opacity-10 -z-1 font-bold text-4xl top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
            {slides[currentIndex].title}
          </div>
          <div className="md:mt-24 md:ml-20 p-20 flex-col items-center justify-evenly">
            <div className="text-white font-bold text-3xl mb-9 z-10">
              {slides[currentIndex].title}
            </div>
            <div className="font-semibold text-white text-lg mb-9">
              {slides[currentIndex].desc}
            </div>

            {/* Button of carousel */}
            <div className="mb-24 bg-red-600 hover:bg-red-800 rounded-lg max-sm:flex w-max max-sm:justify-center px-3 py-3 font-bold flex justify-center items-center text-sm  text-white hover:cursor-pointer">
              Place Order Call
            </div>
          </div>
        </div>

        <div className="w-3/5 p-30 h-full">
          <div className="p-30 h-full relative">
            {/* <div className="absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="object-contain"
                src={CardImage}
                alt="card decor png image"
              ></img>
            </div> */}

            <div className="max-sm:mt-20 max-sm:mb-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="object-contain"
                src={slides[currentIndex].url}
                alt="card decor png image"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <ScrollDown />
    </div>
  );
}

export default HomeCarousal;
