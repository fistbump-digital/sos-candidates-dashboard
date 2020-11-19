import { userTypes } from '../ActionTypes/ActionTypes'

const initialState = {
	isLoggedIn: false,
	userDataFirebase: null,
	userDataMongoDB: null,
}

const UserReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userTypes.LOGGED_IN:
			console.log(payload)
			return {
				...state,
				isLoggedIn: true,
				userDataMongoDB: payload,
			}

		case userTypes.LOGGED_OUT:
			return {
				...state,
				isLoggedIn: payload,
				userDataMongoDB: null,
			}

		default:
			return state
	}
}

export default UserReducer
