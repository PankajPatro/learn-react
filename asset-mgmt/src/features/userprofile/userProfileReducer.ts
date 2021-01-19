import { SIGNED_IN, SIGNED_OUT } from './actionTypes'
import { UserProfileActionTypes } from './types'

const initialState = {
  displayName: '',
  isSignedIn: false
}

export default (state = initialState, action: UserProfileActionTypes) => {
  switch (action.type) {
    case SIGNED_IN:
      return { ...state, isSignedIn: true, displayName: 'Pankaj' }
    case SIGNED_OUT:
      return { ...state, isSignedIn: false, displayName: '' }
    default:
      return state
  }
}
