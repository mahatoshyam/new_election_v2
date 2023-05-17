import React, { Suspense } from "react";
import Description from "../components/election/Description/Description";
import RhsElectionResult from "../components/election/RhsElectionResult/RhsElectionResult";
import NewsRanking from "../components/election/NewsRanking/NewsRanking";
import ResultCard from "../components/election/ResultCard/ResultCard";
import PageDesc from "../components/election/PageDesc/PageDesc";
import CandidateCard from "../components/election/CandidateCard/CandidateCard";
import CandidateNavigation from "../components/election/CandidateNavigation/CandidateNavigation";
import PhotoVideoSlider from "../components/election/PhotoVideoSlider/PhotoVideoSlider";
import RelatedNews from "../components/election/RelatedNews/RelatedNews";
import CandidateDetailsCard from "../components/election/CandidateDetailsCard/CandidateDetailsCard";

const CandidateDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h3>heading</h3>
        </div>
        <div className="col-6">
          <h3>center</h3>
          <Suspense fallback={<p>Loading feed...</p>}>
            <CandidateCard />
          </Suspense>
          <Suspense fallback={<p>Loading Description...</p>}>
            <Description />
          </Suspense>
          <NewsRanking />
          <Suspense fallback={<p>Loading Description1122...</p>}>
            <Description />
          </Suspense>
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
                  <ResultCard />
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
                  <ResultCard />
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
                  <ResultCard />
                </div>
              </div>
            </div>
          </div>
          {/* <Description/> */}
          <PhotoVideoSlider />
          <CandidateNavigation />
          <Suspense fallback={<p>Loading Description1122...</p>}>
            <RelatedNews/>
          </Suspense>
        </div>
        <div className="col-3">
          <h3>rhs</h3>
          {/* <CandidateNavigation/> */}
          <CandidateDetailsCard />
          <RhsElectionResult />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
