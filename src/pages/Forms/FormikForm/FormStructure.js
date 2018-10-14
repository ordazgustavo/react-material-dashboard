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
  },
  {
    type: 'checkbox',
    name: 'isCompany',
    label: 'Company',
    margin: 'normal',
    required: true,
    size: 6
  },
  {
    type: 'checkbox-group',
    name: 'songs',
    label: 'Favorite Songs',
    required: true,
    size: 12,
    options: [
      {
        value: 'Stressed Out',
        label: 'Stressed Out'
      },
      {
        value: 'Addict With A Pen',
        label: 'Addict With A Pen'
      },
      {
        value: 'Car Radio',
        label: 'Car Radio'
      }
    ]
  }
]

export const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  type: '',
  isCompany: false,
  songs: ['Stressed Out']
}

export const validation = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string()
    .email()
    .required('Required'),
  type: Yup.string().required('Required'),
  isCompany: Yup.bool().required(),
  songs: Yup.array().required('Required')
})
