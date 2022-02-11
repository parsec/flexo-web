const ScoreRow = ({ teamScoreData }) => {
  return (
    <div className="scorerow">
        <div className="teamId">Team: { teamScoreData.Team.ID } </div>
        <div className="teamScore">{ teamScoreData.Score }</div>
    </div>
  );
}

export default ScoreRow
