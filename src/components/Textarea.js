import { useField } from 'formik'
import React from 'react'
import TextError from './TextError'

function Textarea({ label, ...props }) {
    const [field, meta] = useField(props)
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <textarea {...field}{...props} />
            {
                meta.error && meta.touched && <TextError>{meta.error}</TextError>
            }
        </div>
    )
}

export default React.memo(Textarea)