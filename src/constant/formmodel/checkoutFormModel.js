// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      control: 'input',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      control: 'input',
      requiredErrorMsg: 'Last name is required'
    },
    age: {
      name: 'age',
      label: 'Age*',
      control: 'input',
      requiredErrorMsg: 'Age  is required'
    },
    Birthdate: {
      name: 'birthdate',
      label: 'Birthdate*',
      control: 'date',
      requiredErrorMsg: 'birthdate is not valid',
      invalidErrorMsg: 'birthdate is not valid'

    },
    country: {
      name: 'country',
      label: 'Country*',
      control: 'select',
      options: 'countrySelect',
      requiredErrorMsg: 'Country is required'
    },
    city: {
      name: 'city',
      label: 'City*',
      control: 'select',
      options: 'citySelect',
      requiredErrorMsg: 'City is required'
    },
    jobTitle: {
      name: 'jobTitle',
      label: 'Job title*',
      control: 'select',
      options: 'jobSelect',
      requiredErrorMsg: 'Job title is required',
    },
    phoneNumber: {
      name: 'phoneNumber',
      label: 'Phone number*',
      control: 'input',
      requiredErrorMsg: 'Phone number is required',
      invalidErrorMsg: 'Phone number is not valid (e.g. 09123681165)'
    },
    gender: {
      name: 'gender',
      label: 'Gender*',
      control: 'radio',
      options: 'genderSelect',
      requiredErrorMsg: 'Gender  is required'
    },
    workType: {
      name: 'workType',
      label: 'Work Type',
      control: 'checkbox',
      options: 'workTypeCheckBox'
    },
    description: {
      name: 'description',
      label: 'Description*',
      control: 'textarea',
      requiredErrorMsg: 'Description is required'
    },
  }
}
