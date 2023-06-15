import React from "react";

const Map = () => {
  return (
    <>
      <div className="">
        <div className="pb-0.5 pt-4">
          <div className="">
            <h1 className=" text-2xl font-bold text-gray-600 py-2 text-center">
              Our Lucknow Address
            </h1>
          </div>
          <iframe
            className="w-screen h-80"
            id="gmap_canvas"
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.13517552307!2d80.95103731441569!3d26.89920476714839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957cf680ef3af%3A0xa8e4739209f6f093!2sC-62%2C%20Sector%20M%2C%20Aliganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021!5e0!3m2!1sen!2sin!4v1675506770069!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            loading="lazy"
          ></iframe>
        </div>

        <div className="pb-0.5 pt-4">
          <div className="">
            <h1 className=" text-2xl font-bold text-gray-600 py-2 text-center">
              Our Ghaziabad Address
            </h1>
          </div>
          <iframe
            className="w-screen h-80"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7972160969766!2d77.34686077452727!3d28.665789882571342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2b932cde47%3A0xbc906b4d493ca05d!2sPOWER%20PULSE!5e0!3m2!1sen!2sin!4v1686807612383!5m2!1sen!2sin"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
