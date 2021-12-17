import React from 'react'
import { useHistory } from 'react-router-dom'

function Items({ item, deleteUser }) {
    const history = useHistory()
    return (
        <>
            {Object.keys(item).map((key) =>
                <>
                    {key !== 'id' && <td > {item[key]} </td >}
                </>
            )}
            <td>
                <button
                    className='btn btn-blue'
                    onClick={() => history.push('/', { userId: item.id, targetPage: 'view' })}
                >
                    View
                </button>
                <button
                    className='btn btn-green'
                    onClick={() => history.push('/', { userId: item.id, targetPage: 'edit' })}
                >
                    Edit
                </button>
                <button
                    className='btn btn-red'
                    onClick={() => deleteUser(item.id)}
                >
                    Delete
                </button>
            </td>
        </>
    )
}

export default React.memo(Items)
