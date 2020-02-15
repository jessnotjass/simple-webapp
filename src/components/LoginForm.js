import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { login } from '../actions/auth/login'
import FormInput from './FormInput'
import { LoginSchema } from './schemas/auth'

const LoginButton = styled(Button)`
  margin: 0 auto;
  display: block;
`
const Item = styled(Form.Item)`
  margin: 5px;
`
const LoginForm = props => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => dispatch(login(values)),
    validationSchema: LoginSchema
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
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
        <LoginButton
          type='primary'
          htmlType='submit'
          loading={formik.isSubmitting}
          disabled={formik.isSubmitting || !formik.dirty}>
          Login
        </LoginButton>
      </Item>
    </Form>
  )
}

LoginForm.propTypes = {
  form: PropTypes.object.isRequired
}

export default Form.create({ name: 'login' })(LoginForm)
