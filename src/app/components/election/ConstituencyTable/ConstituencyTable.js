import style from './schedule.module.css';
// import { useRouter } from 'next/router';
// import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
export default async function ConstituencyTable(req,res1,...etc) {

    // const pathname = usePathname();
    // const router = useRouter();
    // console.log("routt",router)
    console.log({req,res1,...etc})
    const api = 'https://election.nw18.com/electiondata/electionjson/assembly_election_may_2023/karnataka/karnataka_poll_schedule.json';
    let res = await fetch(api);
    let data = await res.json();

    const mainApi = await fetch('https://election.nw18.com/electiondata/electionjson/framework/assembly-elections-may-2023/site_switcher/schedule_stg_eng.json');

    let mainApiRes = await mainApi.json();
    let desc = mainApiRes['data']['schedule']['intro']['karnataka']['election_intro']

    return (
        <>
        <h1>Serverside Called</h1>
            <p>{desc}</p>
                <div className={style.election_result}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>CONSTITUENCY NAME</th>
                                <th>CONSTITUENCY TYPE</th>
                                <th>REGION</th>
                                <th>DISTRICT</th>
                                <th>POLLING DAY/DATE</th>
                                <th>POLLING PHASE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data['phase_1']?.map((row, i) => (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{row.cons_name}</td>
                                    <td>{row.ac_type}</td>
                                    <td>{row.region}</td>
                                    <td>{row.district}</td>
                                    <td>{row.poll_date}</td>
                                    <td>{row.poll_phase}</td>
                                </tr>
                            ))}
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            
        </>
    );
}







