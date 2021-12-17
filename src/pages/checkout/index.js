import React, { useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import formInitialValues from '../../constant/formmodel/formInitialValues'
import validationSchema from '../../constant/formmodel/validationSchema'
import { useradd, editUser } from '../../redux/user/actions/userActions'
import CheckoutForm from './form'


function CheckoutPage({ state, useradd, editUser }) {
    const history = useHistory()
    const location = useLocation()
    const getLocationData = useCallback(() => {
        if (location.state) {
            const { userId, targetPage } = location.state
            return { userId, targetPage }
        } else {

            return { isFillForm: false }
        }
    }, [location])

    const { userId = -1, targetPage = '', isFillForm = true } = getLocationData()
    const page = isFillForm && targetPage

    const initialState = useMemo(() => {
        if (isFillForm) {
            return (state.userData.filter((item) => item.id === userId)[0])
        }
    }, [])

    function handleSubmit(values) {
        page === 'edit'
            ? editUser(values)
            : useradd(values)

        history.push('\show')
    }

    return (
        <div>
            <Formik
                initialValues={isFillForm ? initialState : formInitialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className='form'>
                    <CheckoutForm disabled={page === 'view' ? true : false} />
                    <div className='btn-form'>
                        <button type='submit' className={`btn ${targetPage !== 'view' ? "btn-blue" : ''}`} disabled={page === 'view'}>
                            {page === 'edit'
                                ? 'Edit'
                                : 'Submite'
                            }
                        </button>
                        <button onClick={() => history.push('/show')} className='btn btn-yellow'>Cancel</button>
                    </div>
                </Form>
            </Formik>
        </div >
    )
}

export default connect((state) => ({ state: state.user }), { useradd, editUser })(CheckoutPage)
