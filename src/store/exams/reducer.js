import {
    GET_EXAM_DATA,
    API_RESPONSE_SUCCESS,
    API_RESPONSE_ERROR,
} from "./actionType";

const INIT_STATE = {
    examData: [],
    error: {},
};

const Exam = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case GET_EXAM_DATA:
                    return {
                        ...state,
                        examData: action.payload.data,
                    };
                default:
                    return { ...state };
            }
        case API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case GET_EXAM_DATA:
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

export default Exam;