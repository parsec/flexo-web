import ScoreRow from './ScoreRow';
import { getAllTeamsReport } from '../util/api';
//import { useEffect, useState } from 'react';

const ScoreRows = () => {
    /*const  { allTeamsData, setAllTeamsData } = useState([]);
    useEffect( () => {
        let mounted = true;
        getAllTeamsReport('NASTIOnesTeRoAdG').then(
            items => {
                if(mounted) {
                    setAllTeamsData(items)
                }
            }
        )
        return () => mounted = false;
    }, [])*/
    const allTeamsData = getAllTeamsReport('NASTIOnesTeRoAdG').json()

    console.log(allTeamsData)
    return(
        <>
            {allTeamsData.map((team) => (
                <ScoreRow key={team.Team.ID} team={team}/>
            ))}
        </>
    );
}

export default ScoreRows;