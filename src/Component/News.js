import React from "react";
import { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import loading from "../assets/loading.gif"
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({country,category,setProgress}) => {
  const [newsData, setNewsData] = useState([]);
  const [page,setPage]=useState(1)
  const [totalResults,setTotalresults]=useState(0)
  const [isloading , setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);
  



 
  const fetchmoredata = async ()=>{
    if (newsData.length < totalResults) {
      setPage(page=>page+1);
      console.log(page)
    } else {
      setHasMore(false);
    }
  }
    
  useEffect(() => {
    setNewsData([]);
    setPage(1);
    setHasMore(true);

    const fetchdata = async () => {
      setProgress(10)
      document.title=`${category.charAt(0).toUpperCase()+category.slice(1)}-NewsWave`
      let URL =
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=89803369917748fbbd16980477839fcb&page=${page}`;
      try { 
    
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        // setNewsData(data.articles);
        if (data.articles) {
          setNewsData(prevData => [...prevData, ...data.articles]);
          setTotalresults(data.totalResults);
          setLoading(false);
          setProgress(100);
        } else {
          console.error("API response does not contain articles:", data);
        }
      } catch (error) {
        console.error("error fetching data ", error);
      }
    };
  
    

    fetchdata();
    console.log(category)
   
 
   }, [page,category]);
 

 

  // const handlenextpage=   ()=>{
  //   const totalpages = Math.ceil(totalpage/pagesize)

  //   if(page<totalpages){
  //     setPage(page+1);
  //   }
  //  window.scrollTo(0, 0);

  // // }

  //  const handlePreviouspage= ()=>{
  //    if( page>0){
  //   setPage(page-1);
  //   window.scrollTo(0, 0);
  // }
  



  return (
    <>
    <div className=" flex  flex-col justify-center items-center py-8 px-20">
      <h3 className="text-4xl font-semibold py-4">NewsWave-Top Headlines from {category.charAt(0).toUpperCase()+category.slice(1)}</h3>
       { isloading && <img src={loading} alt="" className="w-24 py-3" />}


       <InfiniteScroll
          dataLength={newsData.length}
          next={fetchmoredata}
          hasMore={hasMore}
          loader={<img src={loading} alt="" className="w-24 py-3" />}
        >
      {  <div className=" p-10 grid grid-cols-3 gap-x-24 gap-y-9  ">
        {newsData.filter((articles) => articles.urlToImage)
          .map((articles, index) => (
            <div key={index}>
              {" "}
              <Newsitem
                title={articles.title}
                description={articles.description}
                urltoimg={articles.urlToImage}
                url={articles.url}
                author = {articles.author}
                publishedAt = {articles.publishedAt}
                source={articles.source.name}
              />
            </div>
          ))}
      </div>}
      </InfiniteScroll>
    </div>
    
     {/* <div className="flex gap-9 items-center justify-between content-center text-white font-semibold py-7 px-10">
     <button disabled={page<=1} className= " disabled:bg-red-200 bg-primary px-5 py-2 hover:bg-blue-500 rounded-lg" onClick={handlePreviouspage} >Previous</button>
     <button disabled={page+1>Math.ceil(totalpage/pagesize)} className=" disabled:bg-red-200 bg-primary px-9 py-2 hover:bg-blue-500 rounded-lg" onClick={handlenextpage} >Next</button>
   </div> */}
   </>
  );
};

export default News;
