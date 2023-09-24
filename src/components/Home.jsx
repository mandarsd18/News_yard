import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const topHeadline =
    " https://newsapi.org/v2/top-headlines?country=in&apiKey=10563b0d64834fc395f01cffae040b09";

  const news = data[Math.floor(Math.random() * data?.length)];

  const fetchData = async () => {
    await axios.get(topHeadline).then((res) => {
      setData(res?.data?.articles);
    
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-[500px] sm:h-[600px] sm:my-10 mb-3">
        <div className="relative w-full h-full mx-auto sm:w-[80%]">
          <img
            className="w-full h-full object-cover"
            src={news?.urlToImage || "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE="}
            alt="news"
          />
          <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-gray-800 opacity-70 w-full h-fit text-white">
            <h1 className="text-md font-semibold my-1.5 text-white sm:text-xl md:text-2xl sm:my-2">
              {news?.title}
            </h1>
            <span className=" mr-5 text-xs my-1 sm:text-sm sm:my-2">
              {news?.author || "Unknown"}
            </span>
            <span className=" mr-5 text-xs my-1 sm:text-sm sm:my-2">
              {news?.publishedAt || "DD/MM/YYYY"}
            </span>
            <p className="text-xs my-1 sm:text-lg sm:my-2">
              {news?.description?.slice(0, 150)}...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
