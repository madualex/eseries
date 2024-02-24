import {
    GET_SUBJECTS,
    API_RESPONSE_SUCCESS,
    API_RESPONSE_ERROR,
} from "./actionType";

// common success
export const subjectApiResponseSuccess = (actionType, data) => ({
    type: API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const subjectApiResponseError = (actionType, error) => ({
    type: API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const getSubjectData = () => ({
    type: GET_SUBJECTS,
});
