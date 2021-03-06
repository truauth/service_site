import { Register as ActionType } from '../constants/action_types';

export const updateField = (dispatch, target) => {
    dispatch({ type: ActionType.UPDATE_FIELD, payload: target })
}

export const submitStep = async (dispatch, validate, secondaryOperation = () => {}) => {
    dispatch({ type: ActionType.SET_LOADING, payload: true })

    const resp = await validate()
    if(!resp.valid) {
        dispatch({ type: ActionType.SET_ERROR, payload: resp.error })
    } else {
        await secondaryOperation()
        dispatch({ type: ActionType.UPDATE_STEP })
    }

    dispatch({ type: ActionType.SET_LOADING, payload: false })

    return resp.valid
}