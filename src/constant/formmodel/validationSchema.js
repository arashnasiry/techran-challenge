/* eslint-disable no-unused-vars */
import * as Yup from 'yup'
import checkoutFormModel from './checkoutFormModel'
const {
  formField: {
    firstName,
    lastName,
    age,
    gender,
    Birthdate,
    country,
    city,
    jobTitle,
    phoneNumber,
    workType,
    description
  }
} = checkoutFormModel


// eslint-disable-next-line import/no-anonymous-default-export
export default
  Yup.object({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [age.name]: Yup.number().positive().integer().min(18).max(80).required(`${age.requiredErrorMsg}`),
    [gender.name]: Yup.string().required(`${gender.requiredErrorMsg}`),
    [Birthdate.name]: Yup.date().max(new Date(), 'Enter Before Today').required(`${Birthdate.requiredErrorMsg}`),
    [country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
    [city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
    [jobTitle.name]: Yup.string().required(`${jobTitle.requiredErrorMsg}`),
    [phoneNumber.name]: Yup.number().required(`${phoneNumber.requiredErrorMsg}`),
    // [workType.name]: Yup.string(),
    [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),

  })

