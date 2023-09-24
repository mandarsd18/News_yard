import React from "react";

const Pagination = ({ totalpost, postPerPage, setCurrentPage,currentPage }) => {
  let pages = [];
  for (let i=0; i <= Math?.ceil(totalpost / postPerPage); i++) {
    pages?.push(i);
  }
  return (
    <div className="w-[90%] sm:w-[80%]
    mx-auto flex items-center justify-center mb-2">
      {pages?.map((index, page) => {
       return <button key={index} onClick={() => setCurrentPage(page)} className="py-0.5 px-1.5 font-semibold border border-gray-300 shadow-md rounded-sm bg-white m-[1px] sm:m-0.5 hover:bg-gray-400 active:bg-gray-400 hover:text-white">
          {page}
        </button>
      })}
    </div>
  );
};

export default Pagination;
