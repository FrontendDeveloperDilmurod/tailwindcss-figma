import React from "react";
import laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="bg-white  py-16 px-4">
      <div className="  w-full  ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={laptop} alt="/" className="w-[500px] mx-auto my-4" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>

            <button
              className="bg-black   rounded-md my-6  md:mx-0 py-3  w-[200px] cursor-pointer mx-auto  text-[#00df9a] 
           hover:bg-[#00b785] transition duration-300 hover:underline hover:translate-y-1 hover:text-black hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
