// import styles from "./style.module.css"
import './globals.css';
import Trivia from './components/election/Trivia/Trivia';
import Graphics from './components/election/Graphics/Graphics';
import Link from 'next/link';
import Serversidecomp from 'npm_component1/component/serversidecomp';
// import Clientsidecomp from 'npm_component1/component/clientsidecomp';

export default async function Home() {
    return (
        <>
        {/* <Clientsidecomp/> */}
<Serversidecomp/>
        <h1>Home page</h1>
        <Link href="/schedule">Click for serverside </Link><br></br>
        <Link href="/scheduleclient">Click for clientside </Link>
    
            {/* <header className="w3-display-container w3-content w3-wide" style={{ 'max-width': '1600px', 'min-width': '500px' }} id="home">
                <img className="w3-image" src="/images/hamburger.jpg" alt="Hamburger Catering" width="1600" height="800" />
                <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                    <h1 className="w3-xxlarge">Le Catering</h1>
                </div>
            </header> */}
            {/* <Trivia /> */}
            {/* <Graphics /> */}
        </>
    );
}