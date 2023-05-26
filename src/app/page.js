"use client";
// import styles from "./style.module.css"
import "./globals.css";
import Trivia from "./components/election/Trivia/Trivia";
import Graphics from "./components/election/Graphics/Graphics";
import Link from "next/link";
// import Serversidecomp from "npm_component1/component/serversidecomp";
// import Featureconstituency from "npm_component1/component/featureconstituency";
import Aboutelection from "./components/election/aboutelection/aboutelection";
import ElectionHighlights from "./components/electionhighlight/page";
import ElectionHighlight from "npm_component1/component/electionhightlight";
export default async function Home() {
  return (
    <>
      {/* <Clientsidecomp/> */}

      <h1>Home page</h1>
      <Link href="/schedule">Click for serverside </Link>
      <br></br>
      <Link href="/candidatedetails">Click for candidatedetails </Link>
      <br></br>
      <Link href={`/elections/123`}>Click for dynamic routes check </Link>
      <br></br>
      <>
        ......................................................................
      </>
      {/* <h1>Below table is comming from npm module</h1> */}
      <h5>Route tetsing</h5>
      {/* <Serversidecomp /> */}
      {/* <Aboutelection /> */}
      {/* <Aboutelection apiurl={"https://jsonplaceholder.typicode.com/users"} /> */}
      {/* <Featureconstituency /> */}
      <ElectionHighlights />
      <ElectionHighlight />
    </>
  );
}
