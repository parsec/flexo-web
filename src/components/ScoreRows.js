//import ScoreRow from './ScoreRow';
import { getAllTeamsReport } from '../util/api';
import React, { useEffect, useState, useMemo } from 'react';
import {Table, TableHead, TableRow,TableHeader, TableBody, TableData} from 'react-table';
import { useTable } from 'react-table';

const ScoreRows = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const getScores = async () => {
            const scoresFromServer = await getAllTeamsReport('NASTIOnesTeRoAdG')
            setScores(scoresFromServer)
        }

        getScores()
    }, [])

    //Memoize scores
    //const scoresData = useMemo(() => scores, [scores])

    //Prepare Scoreboard Column Headers
    /*const scoreColumns = useMemo(() => 
    [
        {
            Header: "Team ID",
            accessor: "Team.team_id"
        },
        {
            Header: "Score",
            accessor: "Score"
        }
    ], [])*/
    
    //Memoize score columns
    //const columns = useMemo(() => scoreColumns, [scoreColumns])

    const scoreColumns = [
        {
            Header: "Team ID",
            accessor: "Team.team_id"
        },
        {
            Header: "Score",
            accessor: "Score"
        }
    ]

    //Create Scoreboard Table
    const scoreTable = useTable({ scoreColumns, scores})

    //Create props for Scoreboard Table
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = scoreTable;

    return(
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map( row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map( cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        /*<Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <TableHeader {...column.getHeaderProps()}>{ column.render("Header") }</TableHeader>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);

                    return row.cells.map((cell, idx) => (
                        <TableData {...cell.getCellProps()}>{ cell.render("Cell") }</TableData>
                    ))
                })}
            </TableBody>
        </Table>*/
        /*<>
        {scores.map((tscore) => (
            <ScoreRow key={tscore.Team.team_id} team={tscore}/>
        ))}
        </>*/
    );
}

export default ScoreRows;