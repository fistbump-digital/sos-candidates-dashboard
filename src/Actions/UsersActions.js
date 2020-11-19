import { userTypes } from '../ActionTypes/ActionTypes'

export const userLoggedIn = (payload) => {
	return {
		type: userTypes.LOGGED_IN,
		payload,
	}
}

export const userUpdate = (payload) => {
	return {
		type: userTypes.UPDATE_PROFILE,
		payload,
	}
}

export const userLoggedOut = (payload) => {
	return {
		type: userTypes.LOGGED_OUT,
		payload,
	}
}
