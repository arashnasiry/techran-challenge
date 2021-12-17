import React from 'react'
import FormControl from './FormControl'
import checkoutFormModel from '../../../constant/formmodel/checkoutFormModel'
import formFiledOptions from '../../../constant/formmodel/formFiledOptions'
import './_style.scss'

const { fieldoptions } = formFiledOptions
function CheckoutForm({ disabled }) {
    const { formField } = checkoutFormModel
    return (
        <>
            {Object.keys(formField).map((key, index) =>
                <>
                    <FormControl key={index.toString()}
                        control={formField[key].control}
                        name={formField[key].name}
                        label={formField[key].label}
                        disabled={disabled}
                        options={formField[key].options !== '' ? fieldoptions[formField[key].options] : ''}

                    ></FormControl >
                </>

            )
            }

        </>
    )
}

export default React.memo(CheckoutForm)
