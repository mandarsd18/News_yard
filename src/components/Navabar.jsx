import React from "react";
import { Link } from "react-router-dom"

const Navabar = () => {
  return (
    <>
      <div className="header w-full h-12 sm:h-16  shadow-lg sticky top-0 right-0 z-10 bg-white ">
        <div className="w-[80%] h-full mx-auto flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"><a href="/">NewsYard</a></h1>
          
            <Link className="px-1.5 py-1 font-semibold bg-blue-600 text-white border rounded-md text-xs sm:px-4 sm:py-2 sm-text-md "  to='/search'>
              Search
            </Link>
        
        </div>
      </div>
    </>
  );
};

export default Navabar;
