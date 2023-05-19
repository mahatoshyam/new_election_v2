import React from "react";

const RhsElectionResult = async () => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(10000);
  // const api1 =
  //   "http://localhost/api/candidate-details/candidate-details/%7Bstg%7Dae_en_2023_s10_rhs_result.json";
  // let res1 = await fetch(api1);
  // let data1 = await res1.json();
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
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RhsElectionResult;
