import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required!'),
  lastName: Yup.string()
    .required('Required!'),
  email: Yup.string()
    .email('Invalid email!')
    .required('Required!'),
  password: Yup.string()
    .min(6, 'Must be atleast 6 characters!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*])$/,
      'Must contain a lowercase letter, uppercase letter, number & a one of the following symbols !@#$&*'
    )
    .required('Required!')
})
