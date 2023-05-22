"use client";
import jsonp from "jsonp";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const ResultCard = async (props) => {
  const apiurl = props.apiurl
  // const delay1 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // console.log("aappp", apiurl, "dee", delay);
  // await delay1(delay);
  // const apiurl1 =
  //   "http://localhost/api/candidate-details/candidate-details/%7bstg%7dae_en_2023_s10_past_result.json";
  // let res1 = await fetch(apiurl);
  // let data = await res1.json();
  // console.log("resutdata1new", data);

  const [data, setData] = useState({});

  // const delaytime = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  React.useEffect(async () => {
    let res1 = await fetch(apiurl, { next: { revalidate: 10 } });
    let data1 = await res1.json();
    setData(data1);
    console.log(data1);
    // delaytime(delay).then(async () => {
    // jsonp(apiurl, { name: "data" }, (error, data) => {
    //   if (error) {
    //     console.log("eerrr", error);
    //     setData({});
    //   } else {
    //     console.log("resultcard", data);
    //     setData(data);
    //   }
    //   console.log(data);
    // });
    // });
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">PARTY</th>
            <th scope="col">Vote Polled</th>
            <th scope="col">Vote %</th>
            <th scope="col">Candidate Name</th>
            <th scope="col">Margin</th>
          </tr>
        </thead>
        <tbody>
          {data?.past_results?.data?.map((item, id) => {
            {
              console.log("aass1122", item);
            }
            return (
              <>
                <tr key={id}>
                  <th scope="row">{item.party_abbr || <Skeleton />}</th>
                  <td>{item.votes_polled || <Skeleton />}</td>
                  <td>{item.votes_percentage || <Skeleton />}</td>
                  <td>{item.cand_name || <Skeleton />}</td>
                  <td>{item.margin || <Skeleton />}</td>
                </tr>
              </>
            );
          })}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default ResultCard;
