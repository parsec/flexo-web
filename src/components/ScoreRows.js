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

    return(
        <>
        {scores.map((tscore) => (
            <ScoreRow key={tscore.Team.ID} team={tscore}/>
        ))}
        </>
    );
}

export default ScoreRows;