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
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Must contain a lowercase letter, uppercase letter, number & a one of the following symbols !@#$&*'
    )
    .required('Required!')
})

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .required('Required!'),
  password: Yup.string()
    .min(6, 'Must be atleast 6 characters!')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Must contain a lowercase letter, uppercase letter, number & a one of the following symbols !@#$&*'
    )
    .required('Required!')
})
