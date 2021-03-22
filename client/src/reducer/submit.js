import { MODIFY } from './types';

const initialState = {
    isSubmitted: false
}

const submit = (state = initialState, action) => {
    switch (action.type) {
        case MODIFY:
            return {
                ...state,
                isSubmitted: action.payload
            }
        default:
            return state;
    }
}

export default submit;