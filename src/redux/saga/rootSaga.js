import { all } from 'redux-saga/effects';
import fetchVideoSaga from '../saga/videoSaga';

function* rootSaga() {
    yield all([fetchVideoSaga()]);
}

export default rootSaga;