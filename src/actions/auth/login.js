import { createAction } from '@reduxjs/toolkit'
import { message } from 'antd'
import { LOGIN } from './auth.constants'
import { auth, firestore } from '../../firebase'

// todo: convert to slice
export const login = ({
  email,
  password
}) => {
  return async dispatch => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      const user = auth.currentUser
      const userRef = await firestore
        .collection('users')
        .doc(user.uid)
        .get()
      const userData = userRef.data()
      const storePayload = {
        ...userData,
        email: user.email
      }
      message.success(`Logged in as ${userData.firstName} ${userData.lastName}`)
      dispatch(createAction(LOGIN)(storePayload))
    } catch (error) {
      message.error(error.message, 5)
    }
  }
}
