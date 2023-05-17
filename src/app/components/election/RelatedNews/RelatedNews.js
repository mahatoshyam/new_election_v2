'use client'
import React from "react";

const RelatedNews = async () => {

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(15000);
  const api1 = "http://localhost:9100/dataprovider/redis/key?key=related-news";
  let res1 = await fetch(api1);
  let data1 = await res1.json();
  console.log("data123", data1);

  return (
    <div>
      <h1>Related News</h1>
      <div className="row">
        <div className="col-4">
          <div className="card" >
            <img
              height="100px"
              width="150px"
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img
              height="100px"
              width="150px"
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" >
            <img
              height="100px"
              width="150px"
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
