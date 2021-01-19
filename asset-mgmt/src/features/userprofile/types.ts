import { SIGNED_IN, SIGNED_OUT } from './actionTypes'

interface SignedInAction {
  type: typeof SIGNED_IN
}
interface SignedOutAction {
  type: typeof SIGNED_OUT
}
export type UserProfileActionTypes = SignedInAction | SignedOutAction

export interface UserProfileState {
  userProfile: {
    displayName: string,
    isSignedIn: boolean
  }
}
