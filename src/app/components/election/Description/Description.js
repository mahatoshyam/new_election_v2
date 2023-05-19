import React from "react";
import Skeleton from "react-loading-skeleton";

const Description = async () => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(10000);
  const api1 =
    "http://192.168.2.123/api/candidate-details/candidate-details/description.json";
  let res1 = await fetch(api1);
  let data1 = await res1.json();
  console.log("data12", data1);

  return (
    <div className="container">
      <p>{data1?.desc || <Skeleton count={5} />}</p>
    </div>
  );
};

export default Description;
