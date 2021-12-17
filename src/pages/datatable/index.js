import React from 'react'
import { useHistory } from 'react-router-dom'
import DataTable from './table'
import SearchBar from './searchBar/SearchBar'

function Tableshow() {
    const history = useHistory()
    return (
        <>
            <SearchBar />
            <DataTable />
            <button className='btn btn-yellow' onClick={() => history.push('/')}>Add</button>
        </>
    )
}

export default React.memo(Tableshow)
