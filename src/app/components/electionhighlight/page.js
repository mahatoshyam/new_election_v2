"use client";
import axios from "axios";
// import { useState, useEffect, useContext, useRef } from "react";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ElectionHighlights = async (props) => {
  //   const [data, setData] = useState(null); //   const { publicRuntimeConfig } = getConfig();
  //   let isFlag = mainData.rhs?.election_highlights;

  //   let isData =
  //     Object.keys(props?.mainData?.rhs_widgets?.election_highlights).length > 0;
  //   if (!(isFlag && isData)) {
  //     return null;
  //   }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: "highlight__bar",
    arrows: false,
  };

  const sub_catName = "karnataka";

  const api1 =
    "https://api.news18.com/en/get_redis/NEWS18:assembly_election_2023_may_highlights";
  let res1 = await fetch(api1);
  let data = await res1.json();
  //   useEffect(() => {
  //     axios
  //       .get(
  //         "https://api.news18.com/en/get_redis/NEWS18:assembly_election_2023_may_highlights"
  //       )
  //       .then((response) => {
  //         setData(response.data);
  //       });
  //   }, []);

  console.log("serverData", data);
  // let getResult = await fetch_highlights(
  //   serverData,
  //   props?.apiKey,
  //   props?.pageData?.sub_category
  // );
  // setElectionHighlightsData(getResult);

  //   console.log("maindatacalled", mainData);

  //   let displayName = (data && data.display_name) || "";
  //   displayName = displayName.split(" ");
  //   if (
  //     electionHighlightsData == [] ||
  //     electionHighlightsData == undefined ||
  //     electionHighlightsData == ""
  //   ) {
  //     return null;
  //   }

  try {
    return (
      <>
        {/*  <!-- highlight start -->	 */}
        <div
          style={{ width: "100%", minHeight: "254px", marginBottom: "30px" }}
        >
          <div
            className={
              "elec-glblhd-highlight elec-glblhd-highlights under_border"
            }
          >
            <div>
              <i className="elecdots"></i>
              <h2>ELECTION 2023 HIGHLIGHTS</h2>
              {sub_catName == "karnataka" ? (
                <a
                // href="highlight"
                // target="_blank"
                // dangerouslySetInnerHTML={{ __html: title }}
                ></a>
              ) : (
                <a
                // href={`/${checkSwitchKeyHighlight(
                //   switch_key
                //   // mainData?.state?.[0]?.slug
                // )}/highlights/${publicRuntimeConfig.mainUrlParam}`}
                // target="_blank"
                // dangerouslySetInnerHTML={{ __html: title }}
                ></a>
              )}
            </div>
            {/* {sponsorDataForWidgetsHighlights != "" &&
              sponsorDataForWidgetsHighlights != undefined &&
              sponsorDataForWidgetsHighlights[0] != undefined &&
              sponsorDataForWidgetsHighlights[0][0].uploaded_img_on_off ==
                "1" && (
                <div className="add_rhs">
                  <span>
                    {sponsorDataForWidgetsHighlights[0][0].sponser_name}
                  </span>
                  <div className="add_rhs_row">
                    <a
                      href={
                        sponsorDataForWidgetsHighlights[0][0]
                          .click_tracker_sponser
                      }
                    >
                      <img
                        src={sponsorDataForWidgetsHighlights[0][0].desktop_img}
                        alt={sponsorDataForWidgetsHighlights[0][0].sponser_name}
                        title={
                          sponsorDataForWidgetsHighlights[0][0].sponser_name
                        }
                      />
                    </a>
                    {sponsorDataForWidgetsHighlights[0][0]
                      .impression_tracker_sponser !== "" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            sponsorDataForWidgetsHighlights[0][0]
                              .impression_tracker_sponser,
                        }}
                      ></div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )} */}
          </div>
          {/* <div className="stel-battlenews"> */}
          <div className="stel-hglgt">
            <div className="stel-hglgt-slider">
              <Slider {...settings}>
                {data.highlights?.map((dataitem, index) => {
                  return (
                    <div className="slider-st" key={index}>
                      {sub_catName == "karnataka" ? (
                        <a
                          // href={
                          //   data?.story_url ||
                          //   `/${checkSwitchKeyHighlight(
                          //     switch_key
                          //   )}/${sub_catName}/highlights/${
                          //     publicRuntimeConfig.mainUrlParam
                          //   }`
                          // }
                          target="_blank"
                        >
                          {dataitem.headline || ""}
                        </a>
                      ) : (
                        <a
                          // href={
                          //   data?.story_url ||
                          //   `/${checkSwitchKeyHighlight(
                          //     switch_key
                          //   )}/highlights/${publicRuntimeConfig.mainUrlParam}`
                          // }
                          target="_blank"
                        >
                          {dataitem.headline || ""}
                        </a>
                      )}
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="stel-hglgt-shr">
              <h3>
                {/* {
                  props?.mainData?.rhs_widgets?.election_highlights
                    ?.display_share_this
                } */}
                {data.highlights[0].headline}
              </h3>
              <hr></hr>
              {/* <ul>
                <li>
                  <a
                    href={props.mainData?.rhs_widgets?.election_highlights?.social_share_links?.facebook
                      ?.replace(":URL:", shareUrl)
                      .replace(":TEXT:", data.display_name)}
                    className="elecsprite fcbk"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href={props.mainData?.rhs_widgets?.election_highlights?.social_share_links?.twitter
                      ?.replace(":URL:", shareUrl)
                      .replace(":TEXT:", data.display_name)}
                    className="elecsprite twtr"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href={props.mainData?.rhs_widgets?.election_highlights?.social_share_links?.whatsapp?.replace(
                      ":TEXT:",
                      `${data.display_name}%20${shareUrl}`
                    )}
                    className="elecsprite wtsp"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href={props.mainData?.rhs_widgets?.election_highlights?.social_share_links?.telegram?.replace(
                      ":URL:",
                      shareUrl
                    )}
                    className="elecsprite snd"
                    target="_blank"
                  ></a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* <!-- highlight end --> */}
        <style jsx global>{`
          .slick-slider {
            position: relative;

            display: block;
            box-sizing: border-box;

            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }

          .slick-list {
            position: relative;

            display: block;
            overflow: hidden;

            margin: 0;
            padding: 0;
          }
          .slick-list:focus {
            outline: none;
          }
          .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
          }
          .slick-slider .slick-track,
          .slick-slider .slick-list {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
          .slick-track {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .slick-track:before,
          .slick-track:after {
            display: table;
            content: "";
          }
          .slick-track:after {
            clear: both;
          }
          .slick-loading .slick-track {
            visibility: hidden;
          }

          .slick-slide {
            display: none;
            float: left;

            height: 100%;
            min-height: 1px;
          }
          [dir="rtl"] .slick-slide {
            float: right;
          }
          .slick-slide img {
            display: block;
          }
          .slick-slide.slick-loading img {
            display: none;
          }
          .slick-slide.dragging img {
            pointer-events: none;
          }
          .slick-initialized .slick-slide {
            display: block;
          }
          .slick-loading .slick-slide {
            visibility: hidden;
          }
          .slick-vertical .slick-slide {
            display: block;

            height: auto;

            border: 1px solid transparent;
          }
          .slick-arrow.slick-hidden {
            display: none;
          }
          @charset 'UTF-8';
          /* Slider */
          .slick-loading .slick-list {
             {
              /* background: #fff url("./ajax-loader.gif") center center no-repeat; */
            }
          }
          /* Icons */
          @font-face {
            font-family: "slick";
            font-weight: normal;
            font-style: normal;
            src: url("./fonts/slick.eot");
            src: url("./fonts/slick.eot?#iefix") format("embedded-opentype"),
              // url("./fonts/slick.woff") format("woff"),
              // url("./fonts/slick.ttf") format("truetype"),
              url("./fonts/slick.svg#slick") format("svg");
          }
          /* Arrows */
          .slick-prev,
          .slick-next {
            font-size: 0;
            line-height: 0;

            position: absolute;
            top: 50%;

            display: block;

            width: 20px;
            height: 20px;
            padding: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);

            cursor: pointer;

            color: transparent;
            border: none;
            outline: none;
            background: transparent;
          }
          .slick-prev:hover,
          .slick-prev:focus,
          .slick-next:hover,
          .slick-next:focus {
            color: transparent;
            outline: none;
            background: transparent;
          }
          .slick-prev:hover:before,
          .slick-prev:focus:before,
          .slick-next:hover:before,
          .slick-next:focus:before {
            opacity: 1;
          }
          .slick-prev.slick-disabled:before,
          .slick-next.slick-disabled:before {
            opacity: 0.25;
          }
          .slick-prev:before,
          .slick-next:before {
            font-family: "slick";
            font-size: 20px;
            line-height: 1;

            opacity: 0.75;
            color: white;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .slick-prev {
            left: -25px;
          }
          [dir="rtl"] .slick-prev {
            right: -25px;
            left: auto;
          }
          .slick-prev:before {
            content: "←";
          }
          [dir="rtl"] .slick-prev:before {
            content: "→";
          }
          .slick-next {
            right: -25px;
          }
          [dir="rtl"] .slick-next {
            right: auto;
            left: -25px;
          }
          .slick-next:before {
            content: "→";
          }
          [dir="rtl"] .slick-next:before {
            content: "←";
          }
          /* Dots */
          .slick-dotted.slick-slider {
            margin-bottom: 30px;
          }

          .slick-dots {
            position: absolute;
            bottom: -25px;

            display: block;

            width: 100%;
            padding: 0;
            margin: 0;

            list-style: none;

            text-align: center;
          }
          .slick-dots li {
            position: relative;

            display: inline-block;

            width: 20px;
            height: 20px;
            margin: 0 5px;
            padding: 0;
            cursor: pointer;
          }
          .slick-dots li button {
            font-size: 0;
            line-height: 0;

            display: block;

            width: 20px;
            height: 20px;
            padding: 5px;

            cursor: pointer;

            color: transparent;
            border: 0;
            outline: none;
            background: transparent;
          }
          .slick-dots li button:hover,
          .slick-dots li button:focus {
            outline: none;
          }
          .slick-dots li button:hover:before,
          .slick-dots li button:focus:before {
            opacity: 1;
          }
          .slick-dots li button:before {
            font-family: "slick";
            font-size: 6px;
            line-height: 20px;

            position: absolute;
            top: 0;
            left: 0;

            width: 20px;
            height: 20px;

            content: "•";
            text-align: center;

            opacity: 0.25;
            color: black;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .slick-dots li.slick-active button:before {
            opacity: 0.75;
            color: black;
          }
          .highlight__bar {
            display: flex !important;
            justify-content: center;
          }
          .highlight__bar li {
            display: flex;
            padding: 0;
            border: none;
            background: #b0b0b0;
            width: 16px;
            height: 4px;
            border-radius: 20px;
            margin: 0 3px;
            cursor: pointer;
          }
          .highlight__bar li button {
            border: none;
            color: transparent;
            padding: 0px;
            display: block;
            background: #b0b0b0;
            width: 16px;
            height: 4px;
            border-radius: 20px;
            cursor: pointer;
          }

          .highlight__bar li.slick-active button {
            background-color: #e1261c;
          }

          .elec-glblhd-highlight {
            justify-content: start;
          }
        `}</style>
        <style jsx global>{`
          @keyframes lvdts {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
          .elecdots {
            content: "";
            background: #e1261c;
            width: 8px;
            height: 8px;
            border-radius: 100%;
            display: inline-block;
            margin-right: 5px;
            position: relative;
            top: 6px;
            animation: lvdts 0.5s infinite;
          }
          .slick-list {
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
          }
          .slider-st a {
            font-weight: 500;
            display: block;
            overflow: hidden;
            font-size: 16px;
            color: rgb(0, 29, 66);
            line-height: 24px;
            text-align: center;
          }
          .slider-st a:hover {
            color: #e1261c;
          }
          .stel-battlenews {
            padding: 10px 20px 20px 20px;
            border-top: 5px solid #001d42;
            text-align: center;
            margin-bottom: 20px;
            background: #f5f5f5;
            border-bottom: 1px solid #dddddd;
            box-sizing: border-box;
          }
          .stel-battlenews span {
            display: block;
            color: #e1261c;
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 500;
            margin-bottom: 10px;
          }
          .stel-battlenews span:after {
            content: "";
            width: 40px;
            height: 1px;
            background: #e1261c;
            display: block;
            margin: 5px auto auto auto;
          }
          .stel-battlenews-slider {
            position: relative;
            overflow: hidden;
          }
          .stel-battlenews-slider ul {
            display: flex;
            margin-bottom: 20px;
          }
          .stel-battlenews-slider ul li a {
            display: block;
            color: #001d42;
            font-size: 26px;
            line-height: 32px;
            font-style: italic;
            font-weight: 500;
            text-align: center;
          }
          .stel-battlenews-slider ul li a:hover {
            color: #e1261c;
          }
          .stel-battlenews-bullets {
            display: flex;
            justify-content: center;
          }
          .stel-battlenews-bullets button {
            border: none;
            padding: 0px;
            background: #b0b0b0;
            width: 16px;
            height: 4px;
            border-radius: 20px;
            margin: 0 3px;
            cursor: pointer;
          }
          .stel-battlenews-bullets button.glide__bullet--active {
            background: #e1261c;
          }
          .stel-hglgt {
            border: 1px solid #b6b4b4;
            position: relative;
          }
          .stel-hglgt-slider {
            position: relative;
            overflow: hidden;
            margin: 15px;
          }
          .stel-hglgt-slider ul {
            display: flex;
          }
          .stel-hglgt-slider ul li a {
            font-weight: 500;
            display: block;
            overflow: hidden;
            font-size: 14px;
            color: rgb(0, 29, 66);
            //font-style:italic;
            line-height: 22px;
            text-align: center;
          }
          .stel-hglgt-bullets {
            display: flex;
            justify-content: center;
          }
          .stel-hglgt-bullets button {
            border: none;
            padding: 0px;
            background: #b0b0b0;
            width: 16px;
            height: 4px;
            border-radius: 20px;
            margin: 0 3px;
            cursor: pointer;
          }
          .stel-hglgt-bullets button.glide__bullet--active {
            background: #e1261c;
          }
          .stel-hglgt-shr {
            padding: 10px;
            border-top: 1px solid #b6b4b4;
            background: #f6f6f6;
            margin: 0 -1px;
          }
          .stel-hglgt-shr h3 {
            font-size: 12px;
            color: #7e7e7e;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 5px;
          }
          .stel-hglgt-shr ul {
            justify-content: center;
            display: flex;
          }
          .stel-hglgt-shr ul li {
            margin: 0 15px;
            line-height: 22px;
          }
          .stel-hglgt-shr ul li a {
            height: 20px;
            filter: brightness(0);
            transform: scale(0.85);
          }
          .elec-glblhd-highlight {
            display: flex;
            margin-bottom: 10px;
            font-size: 18px;
            color: #e1261c;
            font-weight: 500;
          }
          .elec-glblhd-highlight a {
            display: flex;
            color: #e1261c;
            text-transform: uppercase;
            align-items: center;
          }
          .elec-glblhd-highlight a h2 {
            font-size: 18px;
            font-weight: 500;
          }
          .elec-glblhd-highlight a span {
            margin-left: 5px;
            color: #001d42;
            position: relative;
          }
          .elec-glblhd-highlight a span:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            background: #e1261c;
            bottom: -3px;
            left: 0;
          }

          .elec-glblhd-highlight.under_border {
            justify-content: space-between;
            padding: 10px;
            border: 1px solid #b6b4b4;
            margin: 0;
            align-items: end;
          }

          .add_rhs {
            text-align: center;
            margin-top: 8px;
          }

          .add_rhs span {
            color: #656565;
            text-transform: uppercase;
            font-size: 10px;
            text-align: center;
            display: block;
            font-weight: normal;
            line-height: 10px;
            padding-bottom: 2px;
          }

          .add_rhs_row {
            width: 98px;
            height: 42px;
            background: #282828 0% 0% no-repeat padding-box;
          }

          .stel-hglgt {
            border-top: 0;
          }

          .stel-hglgt-slider {
            margin-top: 0;
            padding-top: 10px;
          }

          .elec-glblhd-highlight.under_border > div:nth-child(1) {
            display: flex;
          }
        `}</style>
        <style jsx>{`
          .elec-glblhd-highlights.under_border {
            -webkit-box-pack: justify;
            justify-content: space-between;
            padding: 10px;
            border: 1px solid rgb(182, 180, 180);
            margin: 0px;
            -webkit-box-align: end;
            align-items: center;
          }

          .elec-glblhd a h2 {
            display: inline-block;
            color: #e1261c;
            text-transform: uppercase;
            font-size: 18px;
          }
          .add_rhs {
            text-align: center;
          }
        `}</style>
      </>
    );
  } catch (error) {
    console.log("ElectionHighlights ======= ", error);
    return null;
  }
};
export default ElectionHighlights;
