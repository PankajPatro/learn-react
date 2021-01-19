import { UserProfileState } from './types'

export const getDisplayName = (state: UserProfileState) => state.userProfile.displayName
export const getIsSignedIn = (state: UserProfileState) => state.userProfile.isSignedIn