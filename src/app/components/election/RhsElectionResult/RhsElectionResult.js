import React from "react";

const RhsElectionResult = async () => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(10000);
  const api = "http://localhost:3000/api/candidate-details/cons-result.json";
  let res = await fetch(api);
  let data = await res.json();
  // console.log("data1211", data1);

  return (
    <div className="container">
      <div className="row">Result</div>
      <div className="row">input search</div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">CONST NAME</th>
              <th scope="col">2018</th>
              <th scope="col">2013</th>
              <th scope="col">2008</th>
            </tr>
          </thead>
          <tbody>
            {/* {data1?.map((conname) => {
              console.log("resss", conname);
              return <>Hello</>;
            })} */}
            {data?.cons_results?.map( (row, index) => (
              <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{row.cons_name}</td>
              <td>{row['2006']}</td>
              <td>{row['2011']}</td>
              <td>{row['2016']}</td>
            </tr>
            ))}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RhsElectionResult;
