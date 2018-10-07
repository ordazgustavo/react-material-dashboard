import * as Yup from 'yup'

export default [
  {
    type: 'text',
    name: 'firstName',
    label: 'Name',
    margin: 'normal',
    required: true,
    size: 6
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name',
    margin: 'normal',
    required: true,
    size: 6
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email',
    margin: 'normal',
    required: true,
    size: 12
  },
  {
    type: 'text',
    name: 'phoneNumber',
    label: 'Phone Number',
    margin: 'normal',
    required: true,
    size: 6
  },
  {
    type: 'select',
    name: 'type',
    label: 'User Type',
    margin: 'normal',
    required: true,
    size: 6,
    options: [
      {
        value: 'user',
        displayValue: 'User'
      },
      {
        value: 'comercial',
        displayValue: 'Comercial'
      },
      {
        value: 'e-commerce',
        displayValue: 'E-Commerce'
      }
    ]
  }
]

export const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  type: ''
}

export const validation = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string()
    .email()
    .required('Required'),
  type: Yup.string().required('Required')
})
