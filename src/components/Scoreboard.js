import AboutScoreboard from './AboutScoreboard';
import ScoreTable from './ScoreTable';
import { getAllTeamsReport } from '../util/api';
import React, { useEffect, useState } from 'react';

const Scoreboard = () => {
    const data = require('../testData.json')
    console.log(data)
    
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const getScores = async () => {
            const scoresFromServer = await getAllTeamsReport()
            setScores(scoresFromServer)
        }

        getScores()

        const interval=setInterval (() => {
            getScores()
        }, 10000)
    }, [])
    
    const columns = [
        {
            Header: "Abbrev",
            accessor: "Team.abbrev"
        },
        {
            Header: "Team ID",
            accessor: "Team.team_id"
        },
        {
            Header: "Score",
            accessor: "Score"
        }
    ]
    
    return (
        <div className="scoreboard">
            <div className="scoreboardHeader">
                <AboutScoreboard />
            </div>
            <ScoreTable 
            data={scores}
            columns={columns}
            />
        </div>
    );
}

export default Scoreboard;