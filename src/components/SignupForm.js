import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, Form, Button, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { signup } from '../actions/auth/signup'
import FormInput from './FormInput'
import { SignupSchema } from './schemas/auth'

const FormCard = styled(Card)`
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
  @media only screen and (min-width: 600px) {
    width: 60%;
  }
  @media only screen and (min-width: 768px) {
    width: 50%
  }
  @media only screen and (min-width: 992px) {
    width: 40%
  }
  @media only screen and (min-width: 1200px) {
    width: 30%
  }
  height: 40%;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  margin: 0 auto;
`
const SignupButton = styled(Button)`
  margin: 0 auto;
  display: block;
`
const SignupTitle = styled(Typography.Title)`
  text-align: center;
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
    <FormCard>
      <Form onSubmit={formik.handleSubmit}>
        <SignupTitle level={4}>Signup</SignupTitle>
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
          name='emailName'
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
            disabled={formik.isSubmitting}>
            Signup
          </SignupButton>
        </Item>
      </Form>
    </FormCard>
  )
}

SignupForm.propTypes = {
  form: PropTypes.object.isRequired
}

export default Form.create({ name: 'signup' })(SignupForm)
