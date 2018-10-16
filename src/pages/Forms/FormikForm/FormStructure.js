import * as Yup from 'yup'

export const initialValues = {
  firstName: 'Gustavo',
  lastName: 'Ordaz',
  phoneNumber: '',
  email: 'ordazgustavo@gmail.com',
  type: '',
  isCompany: false,
  gender: 'female',
  songs: ['Stressed Out']
}

export const validation = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  type: Yup.string().required(),
  isCompany: Yup.bool().notRequired(),
  gender: Yup.string().required(),
  songs: Yup.array().required()
})
