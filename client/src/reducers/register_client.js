import { Register as ActionType } from '../constants/action_types';

const reducer = (state, { type, payload }) => {
    switch(type) {
        case ActionType.UPDATE_FIELD: {
            return {
                ...state,
                [payload.id]: payload.value,
            }
        }
        case ActionType.UPDATE_STEP: {
            return {
                ...state,
                step: state.step + 1,
            }
        }
        default : {
            return state;
        }
    }
}
reducer.INITIAL_STATE = {
    fields: {
        username: '',
        email: '',
        password: '',
    },
    step: 0,
    loading: false,
}

export default reducer;