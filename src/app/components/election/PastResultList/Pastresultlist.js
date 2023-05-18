import React, { Suspense } from "react";
import ResultCard from "../ResultCard/ResultCard";

function Pastresultlist() {
  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              2023 Assembly Election
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <Suspense fallback={<p>Loading Past Result 2023...</p>}>
                <ResultCard
                  key={"2023"}
                  delay={20000}
                  apiurl={
                    "http://localhost/api/candidate-details/candidate-details/%7bstg%7dae_en_2023_s10_past_result.json"
                  }
                />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              2018 Assembly Election
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <Suspense fallback={<p>Loading Past Result 2023...</p>}>
                <ResultCard
                  key={"2018"}
                  delay={15000}
                  apiurl={
                    "http://localhost/api/candidate-details/candidate-details/%7bstg%7dae_en_2018_s10_past_result.json"
                  }
                />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              2013 Assembly Election
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <Suspense fallback={<p>Loading Past Result 2023...</p>}>
                <ResultCard
                  key={"2013"}
                  delay={10000}
                  apiurl={
                    "http://localhost/api/candidate-details/candidate-details/%7bstg%7dae_en_2013_s10_past_result.json"
                  }
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pastresultlist;
