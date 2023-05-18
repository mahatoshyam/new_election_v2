import React, { Suspense } from "react";
import Description from "../app/components/election/Description/Description";
import RhsElectionResult from "../app/components/election/RhsElectionResult/RhsElectionResult";
import NewsRanking from "../app/components/election/NewsRanking/NewsRanking";
import ResultCard from "../app/components/election/ResultCard/ResultCard";
import PageDesc from "../app/components/election/PageDesc/PageDesc";
import CandidateCard from "../app/components/election/CandidateCard/CandidateCard";
import CandidateNavigation from "../app/components/election/CandidateNavigation/CandidateNavigation";
import PhotoVideoSlider from "../app/components/election/PhotoVideoSlider/PhotoVideoSlider";
import RelatedNews from "../app/components/election/RelatedNews/RelatedNews";
import CandidateDetailsCard from "../app/components/election/CandidateDetailsCard/CandidateDetailsCard";
import Pastresultlist from "../app/components/election/PastResultList/Pastresultlist";
import Skeleton from "react-loading-skeleton";

const CandidateDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h3>heading</h3>
        </div>
        <div className="col-6">
          <h3>center</h3>
          <Suspense
            fallback={
              <>
                <Skeleton />{" "}
              </>
            }
          >
            <CandidateCard />
          </Suspense>
          <Suspense
            fallback={
              <>
                <Skeleton count={5} />{" "}
              </>
            }
          >
            <Description />
          </Suspense>
          <Suspense fallback={<p>Loading Ranking...</p>}>
            <NewsRanking />
            {/* <Description /> */}
          </Suspense>
          <Suspense fallback={<p>Loading Description1122...</p>}>
            <Description />
          </Suspense>
          <Suspense fallback={<p>Loading PastResultList...</p>}>
            <Pastresultlist />
          </Suspense>

          {/* <Description/> */}
          {/* <PhotoVideoSlider /> */}
          <CandidateNavigation />
          <Suspense fallback={<p>Loading Description1122...</p>}>
            <RelatedNews />
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
