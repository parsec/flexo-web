const ScoreRow = ({ team }) => {
  return (
    <div className="scorerow">
        <div className="teamId">Team: { team.Team.ID }, Score: { team.Score }</div>
    </div>
  );
}

export default ScoreRow
