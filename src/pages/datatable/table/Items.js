import React from 'react'

function Items({ item }) {
    return (
        <>
            {Object.keys(item).map((key) =>
                <>
                    {key !== 'id' && <td > {item[key]} </td >}
                </>
            )}

        </>
    )
}

export default React.memo(Items)
