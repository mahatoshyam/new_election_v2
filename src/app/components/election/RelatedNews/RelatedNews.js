"use client";
import jsonp from "jsonp";
// import fetchAPI from "@/util/fetchAPI";
import React, { useState } from "react";

const RelatedNews = async () => {
  const [data, setData] = useState({});

  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  React.useEffect( async () => {
    let res = await fetch("http://localhost:3000/api/candidate-details/related-news.json");
    res = await res.json();
    setData(res);
    
    // delay(1000).then(async () => {
    // jsonp(
    //   "http://localhost:3000/api/candidate-details/related-news.json",
    //   { name: "data" },
    //   (error, data) => {
    //     if (error) {
    //       console.log("eerrr", error);
    //       setData(false);
    //     } else {
    //       console.log("dtaaa", data);
    //       setData(data);
    //     }
    //   }
    // );
  }, []);

  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(10000);
  // const api1 =
  //   "http://localhost/api/candidate-details/candidate-details/related-news.json";
  // let res1 = await fetch(api1);
  // let data1 = await res1.json();
  // console.log("data12", data1);

  // const res = await fetch(
  //   "http://localhost/api/candidate-details/candidate-details/related-news.json"
  // );
  // const data1 = await res.json();
  console.log("dataaaatest", data);
  return (
    <div>
      <h1>Related News</h1>
      <div className="row">
        {data &&
          data?.related_news?.map((item, id) => {
            console.log("reee", item);
            return (
              <>
                <div className="col-4" key={id}>
                  <div className="card">
                    {/* <img
                      height="100px"
                      width="150px"
                      src={item.img}
                      className="d-block w-100"
                      alt="..."
                    /> */}
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.date}</p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default RelatedNews;
