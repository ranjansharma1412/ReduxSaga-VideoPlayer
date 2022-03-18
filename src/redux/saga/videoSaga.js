import { put, takeLatest } from 'redux-saga/effects';
import { APIClient, APIURLs } from '../../common';
import { formateData } from '../../utils/func';
import * as Types from '../ActionType';

export function* videoSaga() {
    try {
        const apiConfig = {
            method: 'GET',
            url: APIURLs.FETCH_VIDEOS_URL,
        }
        yield put({ type: Types.FETCH_VIDEOS_LOADER, payload: true });

        const response = yield APIClient(apiConfig);
        let result = formateData(response?.videos);
        yield put({ type: Types.FETCH_VIDEOS_LOADER, payload: false });
        yield put({ type: Types.FETCH_VIDEOS, payload: result });
    } catch (error) {
        yield put({ type: Types.FETCH_VIDEOS_LOADER, payload: false });
        yield put({ type: Types.FETCH_VIDEOS_ERROR, payload: error.message });
        yield put({ type: Types.FETCH_VIDEOS, payload: [] });
    }
}

export default function* fetchVideoSaga() {
    yield takeLatest(Types.SAGA_FETCH_VIDEOS, videoSaga);
}