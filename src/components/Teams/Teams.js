import TeamsTable from './TeamsTable';
import { getTeams } from '../../util/api';
import React, { useEffect, useState } from 'react';

const Teams = () => {    
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const getTeamsFromServer = async () => {
            const teamsFromServer = await getTeams()
            setTeams(teamsFromServer)
        }

        getTeamsFromServer()
    }, [])
    
    const columns = [
        {
            Header: "Team ID",
            accessor: "team_id"
        },
        {
            Header: "Abbreviation",
            accessor: "abbrev"
        }
    ]
    
    return (
        <div className="teams">
            <TeamsTable 
            data={teams}
            columns={columns}
            />
        </div>
    );
}

export default Teams;