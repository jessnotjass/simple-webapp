import { SIGNUP } from '../actions/auth/auth.constants'

const initialState = {
  currentUser: {}
}

export default function reducer (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
