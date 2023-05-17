import React from "react";

const CandidateCard = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
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
              <h4>Bharamgouda Alagouda Kage</h4>
            </div>
            <div className="row">
              <div className="col-6">
                <p>Party | Const | State </p>
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
