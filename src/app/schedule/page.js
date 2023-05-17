import Link from 'next/link';
import ConstituencyTable from '../components/election/ConstituencyTable/ConstituencyTable';
import ConstituencyTableCilent from '../components/election/ConstituencyTable/ConstituencyTableCsr';

export default async function Schedule(req,res1,context,...etc){
    console.log({req,res1,context,etc})
    return (
        <>
        <h1>KARNATAKA ASSEMBLY ELECTION SCHEDULE</h1>
        <Link href="/">Click for Home Page </Link>
        {
            req?.searchParams?.ssr==1 ? (<ConstituencyTable />):( <ConstituencyTableCilent/>)
        }
        </>
    );
}

