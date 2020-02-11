import { createAction } from '@reduxjs/toolkit'
import { message } from 'antd'
import { SIGNUP } from './auth.constants'
import { auth, firestore } from '../../firebase'

// todo: convert to slice
export const signup = ({
  firstName,
  lastName,
  email,
  password
}) => {
  return async dispatch => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      const user = auth.currentUser
      const firestorePayload = {
        firstName: firstName.toUpperCase(),
        lastName: lastName.toUpperCase()
      }
      await firestore
        .collection('users')
        .doc(user.uid)
        .set(firestorePayload)
      const storePayload = {
        firstName,
        lastName,
        email
      }
      message.success(`Created account for ${firstName} ${lastName}.`)
      dispatch(createAction(SIGNUP)(storePayload))
    } catch (error) {
      message.error(error.message, 5)
    }
  }
}
