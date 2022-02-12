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
    //const allTeamsData = getAllTeamsReport('NASTIOnesTeRoAdG').json()

    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchScores = async () => {
            const res = await fetch('https://dev-api.flexo.wtf/report/teams', {
                'method': 'GET',
                'headers': {
                    'Authorization': 'Bearer NASTIOnesTeRoAdG'
                }
            })
            const data = await res.json()

            console.log('fetchScores' + data)
        }

        fetchScores()
    }, [])

    /*useEffect(() => {
        const getScores = async () => {
            const scoresFromFlexo = await fetchScores()
            setScores(scoresFromFlexo)
        }
        getScores()
    }, []);

    // Fetch Scores
    const fetchScores = async () => {
        const res = await fetch('https://dev-api.flexo.wtf/report/teams', {
            'method': 'GET',
            'headers': {
                'Authorization': 'Bearer NASTIOnesTeRoAdG'
            }
        })
        const data = await res.json()

        console.log(data)
        return data
    } */
    //console.log(scores)

    return(
        /*<>
                <ScoreRow key={scores.Team.ID} team={scores}/>
        </>*/
        <></>
    );
}

export default ScoreRows;