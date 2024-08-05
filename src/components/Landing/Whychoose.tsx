import React from "react";

const Whychoose = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mb-10">
      <h2 className="mb-5 text-3xl font-[700] leading-tight text-[#939393]">
        Why Choose Us!
      </h2>
      
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                  Expertise and Experience
                  </h3>
                </div>
                <p className=" mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                With decades of industry experience, we bring unmatched expertise in engineering, ensuring reliable and high-quality solutions tailored to meet diverse parking needs.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                  Innovative Solutions
                  </h3>
                </div>
                <p className=" mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                Our cutting-edge technologies and creative approaches provide state-of-the-art parking systems, constantly pushing the boundaries of innovation for enhanced efficiency and functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                  Commitment to Quality
                  </h3>
                </div>
                <p className=" mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                We adhere to stringent quality standards, ensuring every project meets rigorous benchmarks for performance, durability, and safety, delivering superior value to our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                  Customer-Centric Approach
                  </h3>
                </div>
                <p className=" mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                We prioritize our clients' needs, offering personalized services and support to ensure complete satisfaction, from initial consultation to post-installation maintenance.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                  Sustainability and Efficiency
                  </h3>
                </div>
                <p className=" mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                Our environmentally friendly designs maximize space utilization and energy efficiency, reducing the carbon footprint and operational costs for a sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
