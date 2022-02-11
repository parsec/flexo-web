import React from 'react';
import AboutScoreboard from './AboutScoreboard';
import ScoreRows from './ScoreRows';

const Scoreboard = () => {
    return (
        <div className="scoreboard">
            <AboutScoreboard />
            <ScoreRows />
        </div>
    );
}

export default Scoreboard;