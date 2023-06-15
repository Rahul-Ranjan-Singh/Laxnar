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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.06922796917746!2d77.34887094203378!3d28.665700621460584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbf5f50569db%3A0x7854c2eaecb1f830!2sLAXNAR-LAXMI%20NARYAN%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1686816914357!5m2!1sen!2sin"
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
