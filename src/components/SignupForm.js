import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { signup } from '../actions/auth/signup'
import FormInput from './FormInput'
import { SignupSchema } from './schemas/auth'

const SignupButton = styled(Button)`
  margin: 0 auto;
  display: block;
`
const Item = styled(Form.Item)`
  margin: 5px;
`
const SignupForm = props => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    onSubmit: values => dispatch(signup(values)),
    validationSchema: SignupSchema
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormInput
        name='firstName'
        placeholder='First Name'
        icon='user'
        errors={formik.errors.firstName}
        value={formik.values.firstName}
        isSubmitting={formik.isSubmitting}
        type='text'
        {...formik.getFieldProps('firstName')}
      />
      <FormInput
        name='lastName'
        placeholder='Lase Name'
        icon='user'
        errors={formik.errors.lastName}
        value={formik.values.lastName}
        isSubmitting={formik.isSubmitting}
        type='text'
        {...formik.getFieldProps('lastName')}
      />
      <FormInput
        name='email'
        placeholder='Email'
        icon='mail'
        errors={formik.errors.email}
        value={formik.values.email}
        isSubmitting={formik.isSubmitting}
        type='email'
        {...formik.getFieldProps('email')}
      />
      <FormInput
        name='password'
        placeholder='Password'
        icon='lock'
        errors={formik.errors.password}
        value={formik.values.password}
        isSubmitting={formik.isSubmitting}
        type='password'
        {...formik.getFieldProps('password')}
      />
      <Item>
        <SignupButton
          type='primary'
          htmlType='submit'
          loading={formik.isSubmitting}
          disabled={formik.isSubmitting || !formik.dirty}>
          Signup
        </SignupButton>
      </Item>
    </Form>
  )
}

SignupForm.propTypes = {
  form: PropTypes.object.isRequired
}

export default Form.create({ name: 'signup' })(SignupForm)
