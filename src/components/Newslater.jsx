import React from "react";

function Newslater() {
  return (
    <div className="w-full  text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
        <div>
          <h1 className="text-2xl md:text-4xl sm:text-3xl font-bold py-3">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <input
            className="p-3 w-full rounded-md text-black font-semibold"
            type="text"
            placeholder="Enter Email"
          />{" "}
          <br /> <br />
          <button className="bg-[#00df9a] md:w-36 text-black rounded-md font-medium w-[120px]  h-[40px] hover:border-white hover:underline hover:font-semibold">
            Notify Me
          </button> 
          <p className="mt-2">
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newslater;
