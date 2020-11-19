import { jobTypes } from '../ActionTypes/ActionTypes'

const initialState = {
    jobs: [],
    job: null
}

const JobsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case jobTypes.SAVE_ALL_JOBS:
            console.log(payload)
            return {
                ...state,
                jobs: payload
            }

        case jobTypes.SAVE_CURRENT_JOB:
            console.log(payload)
            return {
                ...state,
                job: payload
            }

        default:
            return state
    }
}

export default JobsReducer