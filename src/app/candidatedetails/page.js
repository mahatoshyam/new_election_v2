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
import Pastresultlist from "../components/election/PastResultList/Pastresultlist";
import Skeleton from "react-loading-skeleton";

const CandidateDetail = async () => {
  const api = "http://localhost:3000/api/candidate-details/order.json";
  const res = await fetch(api);
  const data = await res.json();

  let components = {
    past_results: <CandidateDetailsCard />,
    candidate_details: <RhsElectionResult />
  }

  let rhsComponents = data.components.lhs;
  rhsComponents = rhsComponents.sort( (a,b) => b.order - a.order );
  // return JSON.stringify(rhsComponents);

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
          {rhsComponents.map( (rhsComponent) => (
            components[rhsComponent.component]
          ))}
          {/* <CandidateNavigation/> */}
          {/* <CandidateDetailsCard />
          <Suspense
            fallback={
              <>
                <Skeleton />
              </>
            }
          >
            <RhsElectionResult />
          </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
