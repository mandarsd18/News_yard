import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Search = () => {
  const [query, setQuery] = useState();
  const [data, setData] = useState();
  const [postPerPage,setPostPerPage]=useState(12)
  const [currentPage ,setCurrentPage]=useState(1)

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };
  const handleOnClick = () => {
    getData(query);
  };
  const getData = async (searchTerm) => {
    await axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=10563b0d64834fc395f01cffae040b09`).then((res) =>setData(res?.data?.articles));
  };
  const lastPostIndex=currentPage*postPerPage;
  const firstPostIndex=lastPostIndex-postPerPage;
  const currentData=data?.slice(firstPostIndex,lastPostIndex)


  return (
    <>
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-slate-800 flex items-center justify-center mb-2 sm:mb-4">
        <div className="w-[90%] sm:w-[80%] mx-auto flex items-center justify-center  ">
          <div class="relative w-full sm:w-3/4">
            <input
              type="search"
              id="search"
              class="block w-full p-2 sm:p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
              required
              onChange={handleOnChange}
            />
            <button
              type="submit"
              class="text-white absolute right-1.5 sm:right-2.5 bottom-1.5 sm:bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs sm:text-sm px-2 sm:px-3 sm:py-2 py-1"
              onClick={handleOnClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
<div className="w-full">
      <div className="w-[90%] sm:w-[80%] mx-auto flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3">

      {currentData?.map((item)=>(

        <div className="flex-none w-[260px] md:w-[280px] md:pb-4 border rounded-sm shadow-lg border border-gray-300 mb-5">
          <div>
            <img
              className=" object-cover shadow-md hover:shadow-xl rounded-sm h-[170px]"
              src= {item.urlToImage ||"https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q="}
              alt={item.title}
            />
          </div>
          <div className="px-2 py-2 sm:px-3 ">
            <div className="text-lg ">
              <h3 className="font-bold text-gray-800 text-lg mb-1 sm:text-xl md:text-2xl">
              {item?.title?.slice(0,50)}..
              </h3>
            </div>
            <div className="text-sm">
              <p className="mb-1 text-xs font-semibold">{item?.author || item?.publishedAt}</p>
              <p className="font-semibold mb-2">
              {item.description?.slice(0,100)}..
              </p>
              <a
                className="font-medium text-sm text-indigo-600 mt-2"
                href={item.url}
                target="blank"
              >
                Read more<span className="text-indigo-600">&hellip;</span>
              </a>
            </div>
          </div>
        </div>

      ))}
       
      </div>
      </div>
      <div className="w-full">
      <Pagination totalpost={data?.length} postPerPage={postPerPage}
      setCurrentPage={setCurrentPage}  />
      </div>
    </>
  );
};

export default Search;
