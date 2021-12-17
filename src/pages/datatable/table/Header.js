import React, { useMemo } from 'react'
import checkoutFormModel from '../../../constant/formmodel/checkoutFormModel'

function Header() {
    const { formField } = checkoutFormModel

    const getHeaders = useMemo(() => {
        const headers = []
        for (let item in formField) {
            headers.push([formField[item].name])
        }
        headers.push('Actions')
        return headers
    }, [formField])

    return (
        <thead>
            <tr>
                {getHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
    )
}

export default React.memo(Header)
