"use client"

import React from "react";

const CandidateDetailsCard = async () => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(5000);
  const api = "http://localhost:3000/api/candidate-details/cand-details.json";
  let res = await fetch(api);
  let data = await res.json();
  // console.log("da", data1);

  return (
    <div className="container">
      <div className="row">Candidate Name</div>
      <div className="row">Candidate for State name</div>
      <div className="row">Candidate Details</div>
      <div className="row">
        <div className="col-6">Age</div>
        <div className="col-6">{data.age}</div>
      </div>
      <div className="row">
        <div className="col-6">Gender</div>
        <div className="col-6">{data.gender}</div>
      </div>
      <div className="row">
        <div className="col-6">Criminal Case</div>
        <div className="col-6">{data.criminal_case}</div>
      </div>
      <div className="row">
        <div className="col-6">Education</div>
        <div className="col-6">{data.education}</div>
      </div>
      <div className="row">
        <div className="col-6">Assets</div>
        <div className="col-6">{data.total_assets}</div>
      </div>
      <div className="row">
        <div className="col-6">Libliatr</div>
        <div className="col-6">{data.total_liability}</div>
      </div>
      <div className="row">
        <div className="col-6">Party</div>
        <div className="col-6">{data.party_abbt}</div>
      </div>
      <div className="row">
        <div className="col-6">State</div>
        <div className="col-6">{data.state}</div>
      </div>

      <div className="row">
        <div className="col-6">District</div>
        <div className="col-6">{data.district}</div>
      </div>
      <div className="row">
        <div className="col-6">LS Const</div>
        <div className="col-6">{data.ls_cons}</div>
      </div>
      <div className="row">
        <div className="col-6">Cont Type</div>
        <div className="col-6">{data.cons_type}</div>
      </div>
    </div>
  );
};

export default CandidateDetailsCard;
