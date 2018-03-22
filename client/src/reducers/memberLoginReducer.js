import { memberLoginConstants as mLConstants } from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case mLConstants.SUCCESS:
            return {
                type: 'success',
                msg: action.message
            }
        case mLConstants.ERROR:
            return {
                type: 'error',
                msg: action.message
            }
        case mLConstants.CLEAR:
            return {}
        default:
            return state
    }
}