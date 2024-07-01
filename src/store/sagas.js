import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_COMMITS_REQUEST,
  FETCH_COMMITS_SUCCESS,
  FETCH_COMMITS_FAILURE,
  FETCH_DIFF_REQUEST,
  FETCH_DIFF_SUCCESS,
  FETCH_DIFF_FAILURE,
} from './actions';

function* fetchCommits(action) {
  const { owner, repository } = action.payload;
  try {
    const response = yield call(axios.get, `http://localhost:5001/repositories/${owner}/${repository}/commits`);
    yield put({ type: FETCH_COMMITS_SUCCESS, payload: response.data.data });
  } catch (error) {
    yield put({ type: FETCH_COMMITS_FAILURE, payload: error.message });
  }
}

function* fetchDiff(action) {
  const { owner, repository, commitSHA } = action.payload;
  try {
    const response = yield call(axios.get, `http://localhost:5001/repositories/${owner}/${repository}/commits/${commitSHA}/diff`);
    yield put({ type: FETCH_DIFF_SUCCESS, payload: response.data.data });
  } catch (error) {
    yield put({ type: FETCH_DIFF_FAILURE, payload: error.message });
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_COMMITS_REQUEST, fetchCommits);
  yield takeEvery(FETCH_DIFF_REQUEST, fetchDiff);
}

export default rootSaga;
