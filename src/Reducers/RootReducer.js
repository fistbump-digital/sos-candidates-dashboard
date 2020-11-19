import UserReducer from './UserReducer'
import JobsReducer from './JobsReducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
	jobsData: JobsReducer,
	usersData: UserReducer,
})

export default RootReducer
