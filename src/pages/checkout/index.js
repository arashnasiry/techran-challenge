import React, { useMemo, useCallback, useState,useEffect } from 'react'
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
    const [userId,setUserId]=useState('')
    const [targetPage,setTargetPage]=useState('')
    const [isFillForm,setIsFillForm]=useState(false)
    const [initialState,setinitialState]=useState(formInitialValues)

    useEffect(() => {
        if (location.state) {
            setUserId(location.state.userId)
            setTargetPage(location.state.targetPage)
            setIsFillForm(true)
            const passedInitialValue=state.userData.filter((item) => item.id === location.state.userId)[0]
            setinitialState({...passedInitialValue })
        } 
    }, [location]);

   const page = isFillForm && targetPage

     function handleSubmit(values) {
        page === 'edit'
        ? editUser(values)
        : useradd(values)
        
        history.push('\show')
    }
    
    return (
        <div>
         
            <Formik
                enableReinitialize
                initialValues={initialState}
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
