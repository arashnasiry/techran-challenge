import React from 'react'
import TextError from './TextError'
import { ErrorMessage, Field } from 'formik'

function CheckBoxGroup({ label, name, options, disabled, ...rest }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest}>
                {({ field }) => {
                    return options.map(option => (
                        <div key={option.key}>
                            <input
                                disabled={disabled}
                                type='checkbox'
                                id={option.value}
                                {...field}
                                value={option.value}
                                checked={!!field.value && field.value.includes(option.value)}
                            />
                            <label htmlFor={option.value}>{option.key}</label>
                        </div>
                    ))
                }}
            </Field >
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default React.memo(CheckBoxGroup)