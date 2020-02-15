import { SIGNUP, LOGIN } from '../actions/auth/auth.constants'

const initialState = {
  currentUser: {}
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        currentUser: action.payload
      }
    case LOGIN:
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
