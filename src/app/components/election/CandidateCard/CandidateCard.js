import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CandidateCard = async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(5000);
  // const api = "http://localhost:9100/dataprovider/redis/key?key=heading";
  const api =
    "http://localhost/api/candidate-details/candidate-details/heading.json";
  let res = await fetch(api);
  let data = await res.json();
  console.log("data1111", data);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2 ">
            <img
              height="50px"
              width="50px"
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              alt="Photo"
            />
          </div>
          <div className="col-10">
            <div className="row">
              <h4>{data?.cand_name || <Skeleton />}</h4>
            </div>
            <div className="row">
              <div className="col-6">
                <p>
                  {data?.party_abbr} | {data?.state}{" "}
                </p>
              </div>
              <div className="col-6">
                <p>Follow Party here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
