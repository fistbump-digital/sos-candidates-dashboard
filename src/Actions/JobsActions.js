import { jobTypes } from '../ActionTypes/ActionTypes'

export const saveCurrentJob = (payload) => {
    return {
        type: jobTypes.SAVE_CURRENT_JOB,
        payload
    }
}


export const saveAllJobs = (payload) => {
    return {
        type: jobTypes.SAVE_ALL_JOBS,
        payload
    }
}