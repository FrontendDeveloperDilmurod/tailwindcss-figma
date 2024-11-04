import React from "react";
import { ReactTyped as Typed } from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center gap-4">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-5">
            Fat,flexible financing for
          </p>
          <Typed
            className="md:text-2xl sm:text-1xl text-xl font-bold py-5 text-[#00df9a]"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl sm:text-1xl text-xl font-bold py-5 text-gray-500">
          Monitor your data analytics to increase revenue for BTB,BTC,& SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md cursor-pointer font-medium mx-auto py-3 text-black hover:bg-[#00b785] transition duration-300 hover:underline hover:translate-y-1 hover:shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
