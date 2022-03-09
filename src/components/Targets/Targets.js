import TargetsTable from './TargetsTable';
import { getTargets } from '../../util/api';
import React, { useEffect, useState } from 'react';

const Targets = () => {
    const [targets, setTargets] = useState([]);

    useEffect(() => {
        const getTargetsFromServer = async () => {
            const targetsFromServer = await getTargets()
            setTargets(targetsFromServer)
        }

        getTargetsFromServer()
    }, [])
    
    const columns = [
        {
            Header: "ID",
            accessor: "ID"
        },
        {
            Header: "Name",
            accessor: "Name"
        },
        {
            Header: "OS",
            accessor: "OS"
        },
        {
            Header: "Created",
            accessor: "CreatedAt"
        },
        {
            Header: "Last Updated",
            accessor: "UpdatedAt"
        }
    ]
    
    return (
        <div className="targets">
            <TargetsTable 
            data={targets}
            columns={columns}
            />
        </div>
    );
}

export default Targets;