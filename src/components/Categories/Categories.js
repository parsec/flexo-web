import CategoriesTable from './CategoriesTable';
import { getCategories } from '../../util/api';
import React, { useEffect, useState } from 'react';

const Scoreboard = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategoriesFromServer = async () => {
            const categoriesFromServer = await getCategories()
            setCategories(categoriesFromServer)
        }

        getCategoriesFromServer()
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
            Header: "Description",
            accessor: "Description"
        },
        {
            Header: "Multiplier",
            accessor: "Multiplier"
        }
    ]
    
    return (
        <div className="categories">
            <CategoriesTable 
            data={categories}
            columns={columns}
            />
        </div>
    );
}

export default Scoreboard;