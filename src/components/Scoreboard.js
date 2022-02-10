import React from 'react';
import AboutScoreboard from './components/AboutScoreboard';
import ScoreRows from './components/ScoreRows';
import { useTable } from 'react-table';

const Scoreboard = () => {
    return (
        <div className="scoreboard">
            <AboutScoreboard />
            <ScoreRows />
        </div>
    );
}

export default function Scoreboard({ columns, data }) {
    
}