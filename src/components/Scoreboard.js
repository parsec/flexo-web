import React from 'react';
import AboutScoreboard from './components/AboutScoreboard';
import { useTable } from 'react-table';

const Scoreboard = () => {
    return (
        <div className="scoreboard">
            <AboutScoreboard/>
        </div>
    );
}

export default function Scoreboard({ columns, data }) {
    
}