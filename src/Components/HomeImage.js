import React from "react";
import { NavLink } from "react-router-dom";
import Homeimage from "../Images/Homeimage.png";
export const HomeImage = () => {
  return (
    <div className="px-12 border-t border-gray-500 py-12 font-sans bg-white flex-col md:flex-row inline-flex justify-around">
      <div className=" p-4 ">
        <img className="rounded-md" src={Homeimage} alt="Image" />
      </div>
      <div className=" relative  p-3 rounded-3xl">
        <div className="w-full h-12 mb-5 relative items-center text-center">
          <div className="absolute text-gray-600 text-opacity-10 -z-1 font-bold text-8xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
            LAXNAR
          </div>
          <h2 className="right-0 z-10 absolute  text-4xl font-bold">
            About Us
          </h2>
        </div>
        <p className="mb-5 text-justify">
          We are Lucknow based elevator control panel manufacture and whole
          electrical kit supplier. Successfully delivering elevator control
          panels in north India since 2017. Our USP is our product quality with
          solution support. We tend to keep our products easy to install and
          provide higher safety measures in our products. Providing important
          technical feature like password protection, easy handling, compact
          size panels, pre-installed parameters, safety measures, on call
          service, at site service (if required).
        </p>
        <NavLink to="/about">
          <button className="mb-5 float-right text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-red-600 hover:bg-red-700 focus:ring-red-800">
            Read More
          </button>
        </NavLink>
      </div>
    </div>
  );
};
