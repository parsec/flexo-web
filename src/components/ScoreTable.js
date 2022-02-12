//import ScoreRow from './ScoreRow';
import { useTable } from 'react-table';
import BTable from 'react-bootstrap/Table';

function ScoreTable({columns, data}) {

    //Create props for Scoreboard Table
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})
  
    // Render Data Table UI
    return (
      <BTable bordered hover size="sm"{...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup
                .headers
                .map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row
                  .cells
                  .map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
              </tr>
            )
          })}
        </tbody>
      </BTable>
    )
}

export default ScoreTable;