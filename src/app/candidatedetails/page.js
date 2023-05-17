import React from 'react'
import Description from '../components/election/Description/Description'
import RhsElectionResult from '../components/election/RhsElectionResult/RhsElectionResult'
import NewsRanking from '../components/election/NewsRanking/NewsRanking'
import ResultCard from '../components/election/ResultCard/ResultCard'
import PageDesc from '../components/election/PageDesc/PageDesc'
import CandidateCard from '../components/election/CandidateCard/CandidateCard'
import CandidateNavigation from '../components/election/CandidateNavigation/CandidateNavigation'
import PhotoVideoSlider from '../components/election/PhotoVideoSlider/PhotoVideoSlider'
import RelatedNews from '../components/election/RelatedNews/RelatedNews'
import CandidateDetailsCard from '../components/election/CandidateDetailsCard/CandidateDetailsCard'

const CandidateDetail = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-3">
                <h3>heading</h3>
              
              
               <PageDesc/>
             
              
            </div>
            <div className="col-6">
                <h3>center</h3>
                <CandidateCard/>
                <Description/>
                <NewsRanking/>
                <Description/>
                <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      2023 Assembly Election
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <ResultCard/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      2018 Assembly Election
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      <ResultCard/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      2013 Assembly Election
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      <ResultCard/>
      </div>
    </div>
  </div>
</div>
                {/* <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/> */}
                <Description/>
                <PhotoVideoSlider/>
                <CandidateNavigation/>
                <RelatedNews/>
            </div>
            <div className="col-3">
                <h3>rhs</h3>
                <CandidateNavigation/>
                <CandidateDetailsCard/>
                <RhsElectionResult/>
                
            </div>
        </div>
    </div>
  )
}

export default CandidateDetail