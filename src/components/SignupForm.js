import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, Form, Input, Button, Icon, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { signup } from '../actions/auth/signup'

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
  padding: 0px;
`

const SignupForm = props => {
  const [isSubmittingForm, setSubmittingForm] = useState(false)
  const { getFieldDecorator, validateFields } = props.form
  console.log(props.form)
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    validateFields(async (error, values) => {
      if (!error) {
        await dispatch(signup(values))
      }
      setSubmittingForm(false)
    })
  }
  return (
    <FormCard>
      <Form onSubmit={handleSubmit}>
        <SignupTitle level={4}>Signup</SignupTitle>
        <Item>
          {getFieldDecorator('firstName', {
            rules: [
              {
                type: 'string',
                message: 'Not a valid name!'
              },
              {
                required: true,
                message: 'First Name Required! (e.g. "John")'
              }
            ]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='First Name'
            />
          )}
        </Item>
        <Item>
          {getFieldDecorator('lastName', {
            rules: [
              {
                type: 'string',
                message: 'Not a valid name!'
              },
              {
                required: true,
                message: 'Last Name Required! (e.g. "Doe")'
              }
            ]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Last Name'
            />
          )}
        </Item>
        <Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Not a valid Email! (e.g. name@email.com)'
              },
              {
                required: true,
                message: 'Email Required!'
              }
            ]
          })(
            <Input
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Email'
            />
          )}
        </Item>
        <Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Password Required!'
              }
            ]
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Password'
            />
          )}
        </Item>
        <Item>
          <SignupButton
            type='primary'
            htmlType='submit'
            loading={isSubmittingForm}
            onClick={() => setSubmittingForm(true)}>
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

export default Form.create({ name: 'login' })(SignupForm)
