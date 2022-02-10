import ScoreRow from './ScoreRow';

const ScoreRows = () => {
    const scorerows = [
        {
            teamId: 1,
            score: 127
        },
        {
            teamId: 2,
            score: 420
        },
        {
            teamId: 3,
            score: 69
        },
        {
            teamId: 4,
            score: 20
        },
        {
            teamId: 5,
            score: 7
        }
    ]
    return(
        <>
            {scorerows.map((scorerowdata) => (
                <ScoreRow key={scorerowdata.teamId} scorerowdata={scorerowdata}/>
            ))}
        </>
    );
}

export default ScoreRows;