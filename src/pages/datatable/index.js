import React from 'react'
import { useHistory } from 'react-router-dom'
import DataTable from './table'

function Tableshow() {
    const history = useHistory()
    return (
        <>
            <DataTable />
            <button onClick={() => history.push('/')}>Add</button>
        </>
    )
}

export default React.memo(Tableshow)
