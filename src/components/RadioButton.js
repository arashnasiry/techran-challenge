import React from 'react'
import TextError from './TextError'
import { useField } from 'formik'

function RadioButton({ label, options, disabled, ...rest }) {
    const [field, meta, helpers] = useField(rest)
    const { value } = meta
    const { setValue } = helpers

    return (
        <div className={field.name}>
            <label htmlFor={field.name}>{label}</label>
            <div>
                {options.map(option => (
                    <div>
                        <input
                            type='radio'
                            id={option.value}
                            onClick={() => setValue(option.value)}
                            value={option.value}
                            checked={option.value === value}
                            disabled={disabled}
                            key={option.key}
                        />
                        <label htmlFor={option.value}>{option.key}</label>
                    </div>
                ))}
            </div>

            {
                meta.error && meta.touched && <TextError>{meta.error}</TextError>
            }
        </div>
    )
}

export default React.memo(RadioButton)
