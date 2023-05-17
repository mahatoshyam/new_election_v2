import Link from 'next/link';
import ConstituencyTable from '../components/election/ConstituencyTable/ConstituencyTableCsr';

export default async function Schedule(){
    return (
        <>
        <h1>KARNATAKA ASSEMBLY ELECTION SCHEDULE CSR</h1>
        <Link href="/">Click for Home Page </Link>
        {/* <ConstituenncyTable /> */}
        </>
    );
}