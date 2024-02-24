import {
    GET_SUBJECTS,
    API_RESPONSE_SUCCESS,
    API_RESPONSE_ERROR,
} from "./actionType";

const INIT_STATE = {
    subjectData: [],
    error: {},
};

const Subject = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case GET_SUBJECTS:
                    return {
                        ...state,
                        subjectData: action.payload.data,
                    };
                default:
                    return { ...state };
            }
        case API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case GET_SUBJECTS:
                    return {
                        ...state,
                        error: action.payload.error,
                    };
                default:
                    return { ...state };
            }

        default:
            return { ...state };

    }
};

export default Subject;