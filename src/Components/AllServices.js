import React from "react";
import { BsHeadset, BsWrench } from "react-icons/bs";

const AllServices = () => {
  return (
    <div className="flex p-5 text-white flex-col sm:flex-row   bg-gray-700">
      <div className="basis-1/3 space-y-2 mb-5">
        <h1 className="text-3xl  font-bold">Our Services</h1>
        <p className="text-justify text-sm">
          Lifts are an essential part of many buildings, providing a safe and
          convenient way for people to move between floors. However, like any
          mechanical system, lifts can sometimes break down or require
          maintenance. This is where our company comes in. We provide a range of
          services that deal with lifts and their parts, ensuring that our
          customers' lifts are always in top condition and operating smoothly.
          <br />
          One of the main services we offer is lift maintenance. Regular
          maintenance is crucial to ensure that lifts operate safely and
          efficiently. Our team of expert technicians will carry out regular
          inspections and maintenance work, checking for any signs of wear and
          tear or potential issues that could cause problems in the future. This
          proactive approach can help to prevent breakdowns and minimize
          downtime, keeping our customers' lifts running smoothly.
          <br />
          In addition to maintenance, we also offer lift repair services. If a
          lift does break down or experience a problem, our team of skilled
          engineers will quickly diagnose the issue and carry out any necessary
          repairs. We understand that any downtime for a lift can cause
          significant inconvenience, so we strive to provide fast and efficient
          repair services to get our customers' lifts back up and running as
          soon as possible.
        </p>
      </div>

      <div className="basis-2/3 flex px-5 pt-12 space-x-5">
        <div className="rounded-lg  shadow-black shadow-sm text-whitetext-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 h-1/2 p-3">
          <div className="flex justify-center mb-5">
            <BsHeadset size={40} />
          </div>
          <div className="text-center mb-3">
            <h1>24/7 Customer Support</h1>
            <p className="mb-10">
              We are always available to help you out. Feel free to contact us.
            </p>
            <a href="tel:+918840007880">
              <button
                type="button"
                class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </a>
          </div>
        </div>

        <div className="rounded-lg  shadow-black shadow-sm text-whitetext-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 h-1/2 p-3">
          <div className="flex justify-center mb-5">
            <BsWrench size={40} />
          </div>
          <div className="text-center mb-3">
            <h1>Products Service</h1>
            <p className="mb-10">
              We are always available to help you out. Feel free to contact us.
            </p>
            <a href="tel:+918840007880">
              <button
                type="button"
                class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
