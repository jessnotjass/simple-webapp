import { createAction } from '@reduxjs/toolkit'
import { message } from 'antd'
import { SIGNUP } from './auth.constants'

// todo: convert to slice
export const signup = ({
  firstName,
  lastName,
  email
}) => {
  return async dispatch => {
    try {
      const payload = {
        firstName,
        lastName,
        email
      }
      // todo: insert user to db
      message.success(`Created account for ${firstName} ${lastName}.`)
      dispatch(createAction(SIGNUP)(payload))
    } catch (error) {
      message.error(error.message, 5)
    }
  }
}
