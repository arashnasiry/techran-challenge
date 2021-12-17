import React from 'react'
import { useField } from 'formik'
import TextError from './TextError'

function Input({ label, ...props }) {
    const [field, meta] = useField(props)
    return (
        <div className={field.name}>
            <label htmlFor={field.name}>{label}</label>
            <input {...field}{...props} type='text' />
            {
                meta.error && meta.touched && <TextError>{meta.error}</TextError>
            }
        </div>

    )
}
export default React.memo(Input)