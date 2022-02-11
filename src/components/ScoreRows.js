import ScoreRow from './ScoreRow';
import { getAllTeamsReport } from '../util/api';
import { useEffect, useState } from 'react';

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
    const allTeamsData = getAllTeamsReport('NASTIOnesTeRoAdG')

    console.log(allTeamsData)
    return(
        <>
            {allTeamsData.map((item) => (
                <ScoreRow key={item.Team.ID} item={item}/>
            ))}
        </>
    );
}

export default ScoreRows;