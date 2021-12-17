
import React from 'react'
import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

function Select(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as='select' name={name} id={name} {...rest}>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    ))
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default React.memo(Select)