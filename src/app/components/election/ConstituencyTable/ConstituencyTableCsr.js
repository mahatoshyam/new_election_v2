'use client';

import useSWR from 'swr'
import style from './schedule.module.css';

export default async function ConstituencyTableCilent() {
    // const api = 'https://election.nw18.com/electiondata/electionjson/assembly_election_may_2023/karnataka/karnataka_poll_schedule.json';
    // let res = await fetch(api);
    // let data = await res.json();
    
    let res1 = useGetData('https://election.nw18.com/electiondata/electionjson/assembly_election_may_2023/karnataka/karnataka_poll_schedule.json');

    let res2 = useGetData('https://election.nw18.com/electiondata/electionjson/framework/assembly-elections-may-2023/site_switcher/schedule_stg_eng.json');

    if (res1.error) return <div>failed to load</div>
    if (res1.isLoading || res2.isLoading) return <div>loading...</div>

    let array = res1['data']['phase_1'];
    let desc = res2['data']['data']['schedule']['intro']['karnataka']['election_intro'];

    return (
        <>
        <h1>Client side called</h1>
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

                            {array?.map((row, i) => (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{row?.cons_name}</td>
                                    <td>{row?.ac_type}</td>
                                    <td>{row?.region}</td>
                                    <td>{row?.district}</td>
                                    <td>{row?.poll_date}</td>
                                    <td>{row?.poll_phase}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            
        </>
    );
}

// async function getData(url){
//     const fetcher = () => fetch(url).then(res => res.json())
//     let { data, error, isLoading } = await useSWR(fetcher);
//     return {
//         user: data,
//         isLoading,
//         isError: error
//     }
// }

function useGetData (url) {
    const fetcher = () => fetch(url).then(res => res.json())
    const result = useSWR(url, fetcher)
    
    return result;
  }






