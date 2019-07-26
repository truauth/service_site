import { Register as ActionType } from '../constants/action_types';

export const updateField = (dispatch, target) => {
    dispatch({ type: ActionType.UPDATE_FIELD, payload: target })
}

export const submitStep = (dispatch, state) => {
    switch (state.step) {
        case 0: {
            // valid fields
            dispatch({ type: ActionType.UPDATE_STEP })
            break;
        }
        case 1: {
            // valid fields
            dispatch({ type: ActionType.UPDATE_STEP })
            break;
        }
        default: {
            // done?
            break;
        }
    }
}