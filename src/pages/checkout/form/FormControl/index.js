import React from 'react'
import Input from '../../../../components/Input'
import Date from '../../../../components/Date'
import Textarea from '../../../../components/Textarea'
import Select from '../../../../components/Select'
import RadioButton from '../../../../components/RadioButton'
import CheckBoxGroup from '../../../../components/CheckBoxGroup'

function FormControl({ control, ...rest }) {
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButton {...rest} />
        case 'checkbox':
            return <CheckBoxGroup {...rest} />
        case 'date':
            return <Date {...rest} />
        default: return null
    }
}

export default React.memo(FormControl)
