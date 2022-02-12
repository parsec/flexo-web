import ScoreRow from './ScoreRow';
import { getAllTeamsReport } from '../util/api';
import { useEffect, useState } from 'react';

const ScoreRows = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const getScores = async () => {
            const scoresFromServer = await getAllTeamsReport('NASTIOnesTeRoAdG')
            setScores(scoresFromServer)
        }

        getScores()
    }, [])

    /*const fetchScores = async () => {
        const res = await fetch('https://dev-api.flexo.wtf/report/teams', {
            'method': 'GET',
            'headers': {
                'Authorization': 'Bearer NASTIOnesTeRoAdG'
            }
        })
        const data = await res.json()

        console.log('fetchScores' + data)
        return data
    }*/

    console.log('scores' + scores)

    return(
        <>
        {scores.map((tscore) => (
            <ScoreRow key={tscore.Team.ID} team={tscore}/>
        ))}
        </>
    );
}

export default ScoreRows;