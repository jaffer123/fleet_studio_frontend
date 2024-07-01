import { combineReducers } from 'redux';
import {
  FETCH_COMMITS_SUCCESS,
  FETCH_COMMITS_FAILURE,
  FETCH_DIFF_SUCCESS,
  FETCH_DIFF_FAILURE,
} from './actions';

const initialState = {
  commits: [],
  diff: {},
  error: null,
};

const commitsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_COMMITS_SUCCESS:
      return { ...state, commits: action.payload  ,error: {}};
    case FETCH_COMMITS_FAILURE:
      return { ...state, commits:{} ,error: action.payload };
    default:
      return state;
  }
};

const diffReducer = (state = initialState, action) => {
  console.log("actiondiff",action.payload)
  switch (action.type) {
    case FETCH_DIFF_SUCCESS:
      return { ...state, diff: action.payload ,error: {}};
    case FETCH_DIFF_FAILURE:
      return { ...state, commits:{},error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  commits: commitsReducer,
  diff: diffReducer,
});
