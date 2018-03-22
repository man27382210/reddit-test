import {
    SUCCESS,
    ERROR,
    CLEAR
} from '../constants/memberLoginConstants'

export const memberLoginActions = {
    success,
    error,
    clear
}

const success = () => {
    return { type: SUCCESS }
}

const error = () => {
    return { type: ERROR }
}

const clear = () => {
    return { type: CLEAR }
}