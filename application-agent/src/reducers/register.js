import { Register as ActionType } from '../constants/action_types';

const reducer = (state, { type, payload }) => {
    switch(type) {
        case ActionType.UPDATE_FIELD: {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [payload.id]: payload.value,
                }
            }
        }
        case ActionType.UPDATE_STEP: {
            return {
                ...state,
                step: state.step + 1,
                error: {},
            }
        }
        case ActionType.SET_LOADING: {
            return {
                ...state,
                loading: payload
            }
        }
        case ActionType.SET_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        default : {
            return state;
        }
    }
}
reducer.INITIAL_STATE = {
    fields: {},
    step: 0,
    loading: false,
    error: {}
}

export default reducer;