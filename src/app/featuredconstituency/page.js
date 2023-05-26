"use client";
import { useState, useEffect, useContext } from "react";

const FeaturedConstituency = (props) => {
  // let isFlag = props?.mainData[props.apiKey].rhs?.featured_constituency;
  // let isData =
  //   Object.keys(props?.mainData?.rhs_widgets?.featured_constituency).length > 0;
  // if (!(isFlag && isData)) {
  //   return null;
  // }
  // const { randomConstituency = {} } = props.pageData || {};
  // let { apiLangJson, subcat, switch_key, mainData, lang_type } =
  //   useContext(GlobalContext);
  // const [FeaturedConstituencyData, setFeaturedConstituencyData] = useState(
  //   mainData[props.apiKey]?.featured_constituency
  // );
  // const [randomConst, setRandomConst] = useState(randomConstituency?.rC || "");
  // const [randState, setRandState] = useState(randomConstituency?.rState || "");
  // const [randomId, setRandomId] = useState(randomConstituency?.rId || "");
  // const [randomUrl, setRandomUrl] = useState(randomConstituency?.rUrl || "");
  // const { apiKey, pageKey } = props;
  // useEffect(async () => {
  //   let url = mainData;
  //   //let getSwitch = await fetchUtility(url.switch_url_normal, []);
  //   if (randomConst === "" && randState === "" && randomId === "") {
  //     setFeaturedConstituencyData(url[pageKey].featured_constituency);

  //     //let radom = await randomFeat(switch_url,apiLangJson)
  //     let radom = await randomFeat(mainData);
  //     setRandomId(radom.rId);
  //     setRandomConst(radom.rC);
  //     setRandState(radom.rState);
  //     setRandomUrl(radom.rUrl);
  //   }
  // }, []);
  // if (randomConst == []|| randomConst == undefined||randomConst == ""){
  //   return null
  // }
  // {`/${switch_key}/${randState.slug}/${randomConst.toLowerCase().replace(" ","-")}-election-result-${randomId}/${publicRuntimeConfig.mainUrlParam}`}
  try {
    return (
      <>
        <div
          className="featureConstWrap"
          style={{
            width: "100%",
            height: "146px",
          }}
        >
          <div className="featureConst">
            <a
            //href={`/${checkSwitchKey(switch_key, mainData?.domain)}/${randomUrl}/${publicRuntimeConfig.mainUrlParam}`}
            //  href={mainData?.domain?.includes("bengali") && router?.asPath?.includes("exit-poll-result") ? ["nagaland", "meghalaya"]?.includes(randState?.slug) ? null : `/${checkSwitchKey(switch_key, mainData?.domain)}/${randomUrl}/${publicRuntimeConfig.mainUrlParam}` : `/${checkSwitchKey(switch_key, mainData?.domain)}/${randomUrl}/${publicRuntimeConfig.mainUrlParam}`}
            //  target="_blank"
            >
              <h4 className="heading">Featured Constituency</h4>
              <div className="mapMarker"></div>
              <div className="constName">Chickpet</div>
              <div className="stateName">Karnataka</div>
              <span className="icon1"></span>
              <span className="icon2"></span>
              <span className="icon3"></span>
              <span className="icon4"></span>
            </a>
          </div>
        </div>
        <style jsx>{`
          // .elec-glblhd {
          //   display: flex;
          //   margin-bottom: 10px;
          //   font-size: 18px;
          //   color: #e1261c;
          //   font-weight: 500;
          // }
          // .elec-glblhd a {
          //   display: flex;
          //   color: #e1261c;
          //   text-transform: uppercase;
          //   align-items: center;
          // }
          // .elec-glblhd a span {
          //   margin-left: 5px;
          //   color: #001d42;
          //   position: relative;
          // }
          // .elec-glblhd a span:after {
          //   content: "";
          //   position: absolute;
          //   width: 100%;
          //   height: 3px;
          //   background: #e1261c;
          //   bottom: -3px;
          //   left: 0;
          // }
          .featureConstWrap {
            padding: 9px;
            border: 1px solid #dfdfdf;
            margin-bottom: 20px;
          }
          .featureConst a {
            display: block;
            position: relative;
            background: #f1f1f1;
          }
          .featureConst .heading {
            color: #001d42;
            font-size: 20px;
            text-align: center;
            padding-top: 10px;
            font-weight: 400;
            margin-bottom: 8px;
          }
          .featureConst .mapMarker {
            display: flex;
            justify-content: center;
            position: relative;
          }
          .featureConst .mapMarker:after,
          .featureConst .mapMarker:before {
            content: "";
            position: absolute;
          }
          .featureConst .mapMarker:after {
            width: 92%;
            height: 1px;
            background: #dcdcdc;
            top: 15px;
            left: 0;
            right: 0;
            margin: auto;
          }
          .featureConst .mapMarker:before {
            width: 34px;
            height: 35px;
            border-radius: 100%;
            background: #fff
              url(https://images.hindi.news18.com/ibnkhabar/uploads/assets/event/common/others/hdrsprite_1632473468.svg) -172px
              0px no-repeat;
            display: block;
            z-index: 1;
            position: relative;
          }
          .featureConst .constName {
            font-weight: 500;
            width: 100%;
            color: #e1261c;
            font-size: 20px;
            margin-bottom: 5px;
            text-align: center;
          }
          .featureConst .stateName {
            color: #001d42;
            font-size: 13px;
            text-align: center;
            padding-bottom: 5px;
          }
          .featureConst a .icon1,
          .featureConst a .icon2,
          .featureConst a .icon3,
          .featureConst a .icon4 {
            width: 10px;
            height: 10px;
            display: block;
            border: 1px solid #000;
            position: absolute;
          }
          .featureConst a .icon1 {
            left: 0;
            top: 0;
            border-right: 0;
            border-bottom: 0;
          }
          .featureConst a .icon2 {
            right: 0;
            top: 0;
            border-left: 0;
            border-bottom: 0;
          }
          .featureConst a .icon3 {
            left: 0;
            bottom: 0;
            border-top: 0;
            border-right: 0;
          }
          .featureConst a .icon4 {
            right: 0;
            bottom: 0;
            border-top: 0;
            border-left: 0;
          }
          .highlight-date {
            display: block;
            color: #949494;
            font-weight: 300;
            font-size: 12px;
            font-style: normal;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 5px;
          }
        `}</style>
      </>
    );
  } catch (e) {
    console.log("checkk FeaturedConstituency error ", e);
    return null;
  }
};
export default FeaturedConstituency;
