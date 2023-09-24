const NewsCard = ({ name, data }) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl" id={name}>{name}</h2>
      </div>

      <div
       
        className="flex flex-no-wrap overflow-x-scroll scrollbar-hide items-start mb-8"
      >
      {
        data?.map((item)=>(

          <div className="flex-none w-[260px] md:w-[300px] mr-5 md:pb-4 border rounded-sm shadow-lg border border-gray-300">
          <div>
            <img
              className=" object-cover shadow-md hover:shadow-xl rounded-sm h-[170px]"
              src={item.urlToImage || "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q="}
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
              <a className="font-medium text-sm text-indigo-600 mt-2" href={item.url} target="blank" >

                Read more<span className="text-indigo-600">&hellip;</span>
              </a>
            </div>
          </div>
        </div>
          
        ))
      }
        
      </div>
    </>
  );
};

export default NewsCard;
