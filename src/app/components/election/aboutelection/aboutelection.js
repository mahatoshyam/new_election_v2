"use client";
import Link from "next/link";
import React, { useState } from "react";

function Aboutelection(props) {
  const [data, setData] = useState("");
  const apiurl = props.apiurl;
  React.useEffect(async () => {
    let res1 = await fetch(apiurl, { next: { revalidate: 10 } });
    let data1 = await res1.json();
    setData(data1);
    console.log(data1);
  }, []);
  console.log("dataaa", data);
  return (
    <div>
      <div className="conatyiner">
        <Link href="/elections/gujarat/lok-sabha-election-s06lssy/">
          {data &&
            data?.map((item) => {
              return (
                <>
                  <h2>{item.name}</h2>
                </>
              );
            })}
        </Link>
      </div>
    </div>
  );
}

export default Aboutelection;
