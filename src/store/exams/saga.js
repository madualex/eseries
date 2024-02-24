import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Crypto Redux States
import {
    GET_EXAM_DATA,
} from "./actionType";

import {
    examApiResponseSuccess,
    examApiResponseError,
} from "./action";

//Include Both Helper File with needed methods
import {
    getExamData as getExamDataApi,
}
    from "../../helpers/fakebackend_helper";

function* getExams() {
    try {
        const response = yield call(getExamDataApi);
        if (response.status === 'success') {
            yield put(examApiResponseSuccess(GET_EXAM_DATA, response.data));
        } else {
            yield put(examApiResponseError(GET_EXAM_DATA, response.msg));
        }
    } catch (error) {
        yield put(examApiResponseError(GET_EXAM_DATA, error));
    }
}



export function* watchGetExams() {
    yield takeEvery(GET_EXAM_DATA, getExams); // actionType and function
}



function* examSaga() {
    yield all([
        fork(watchGetExams),
    ]);
}

export default examSaga;
