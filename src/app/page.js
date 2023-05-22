// import styles from "./style.module.css"
import "./globals.css";
import Trivia from "./components/election/Trivia/Trivia";
import Graphics from "./components/election/Graphics/Graphics";
import Link from "next/link";
// import Serversidecomp from 'npm_component1/component/serversidecomp';
// import Clientsidecomp from 'npm_component1/component/clientsidecomp';
import { Tweet } from "react-tweet";
export default async function Home() {
  return (
    <>
      {/* <Clientsidecomp/> */}
      {/* <Serversidecomp/> */}
      <h1>Home page</h1>
      <Link href="/schedule">Click for serverside </Link>
      <br></br>
      <Link href="/candidatedetails">Click for candidatedetails </Link>
      {/* <Tweet id="1660507911880327174" />; */}
    </>
  );
}
