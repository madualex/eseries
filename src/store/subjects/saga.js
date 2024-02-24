import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Crypto Redux States
import {
    GET_SUBJECTS,
} from "./actionType";

import {
    subjectApiResponseSuccess,
    subjectApiResponseError,
} from "./action";

//Include Both Helper File with needed methods
import {
    getSubjectData as getSubjectDataApi,
}
    from "../../helpers/fakebackend_helper";

function* getSubjects() {
    try {
        const response = yield call(getSubjectDataApi);
        console.log('subjectApi', response);
        if (response.status === 'success') {
            yield put(subjectApiResponseSuccess(GET_SUBJECTS, response.data));
        } else {
            yield put(subjectApiResponseError(GET_SUBJECTS, response.msg));
        }
    } catch (error) {
        yield put(subjectApiResponseError(GET_SUBJECTS, error));
    }
}



export function* watchGetSubject() {
    yield takeEvery(GET_SUBJECTS, getSubjects); // actionType and function
}



function* subjectSaga() {
    yield all([
        fork(watchGetSubject),
    ]);
}

export default subjectSaga;
