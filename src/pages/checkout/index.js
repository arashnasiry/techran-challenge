import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import formInitialValues from '../../constant/formmodel/formInitialValues'
import validationSchema from '../../constant/formmodel/validationSchema'
import { useradd } from '../../redux/user/actions/userActions'
import CheckoutForm from './form'


function CheckoutPage({ state, useradd, editUser }) {
    const history = useHistory()

    function handleSubmit(values) {
        useradd(values)
        history.push('\show')
    }

    return (
        <div>
            <Formik
                initialValues={formInitialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className='form'>
                    <CheckoutForm />
                    <div >
                        <button type='submit' >
                            Submit
                        </button>
                        <button >Cancel</button>
                    </div>
                </Form>
            </Formik>
        </div >
    )
}

export default connect((state) => ({ state: state.user }), { useradd })(CheckoutPage)
