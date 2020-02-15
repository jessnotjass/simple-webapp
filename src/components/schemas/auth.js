import * as Yup from 'yup'

const firstName = Yup.string()
  .required('Required!')
const lastName = Yup.string()
  .required('Required!')
const email = Yup.string()
  .email('Invalid email!')
  .required('Required!')
const password = Yup.string()
  .min(6, 'Must be atleast 6 characters!')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    'Must contain a lowercase letter, uppercase letter, number & a one of the following symbols !@#$&*'
  )
  .required('Required!')

export const SignupSchema = Yup.object().shape({
  firstName,
  lastName,
  email,
  password
})

export const LoginSchema = Yup.object().shape({
  email,
  password
})
