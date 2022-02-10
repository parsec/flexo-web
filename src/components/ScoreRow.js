const ScoreRow = ({ scorerowdata }) => {
  return (
    <div className="scorerow">
        <div className="teamId">Team: { scorerowdata.teamId } </div>
        <div className="teamScore">{ scorerowdata.score }</div>
    </div>
  );
}

export default ScoreRow
