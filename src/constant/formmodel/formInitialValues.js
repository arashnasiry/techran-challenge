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
} = checkoutFormModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  id: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [age.name]: '',
  [gender.name]: '',
  [Birthdate.name]: '',
  [country.name]: '',
  [city.name]: '',
  [jobTitle.name]: '',
  [phoneNumber.name]: '',
  [workType.name]: '',
  [description.name]: ''
}
