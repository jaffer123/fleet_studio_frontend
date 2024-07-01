export const FETCH_COMMITS_REQUEST = 'FETCH_COMMITS_REQUEST';
export const FETCH_COMMITS_SUCCESS = 'FETCH_COMMITS_SUCCESS';
export const FETCH_COMMITS_FAILURE = 'FETCH_COMMITS_FAILURE';

export const FETCH_DIFF_REQUEST = 'FETCH_DIFF_REQUEST';
export const FETCH_DIFF_SUCCESS = 'FETCH_DIFF_SUCCESS';
export const FETCH_DIFF_FAILURE = 'FETCH_DIFF_FAILURE';

export const fetchCommitsRequest = (owner, repository) => ({
  type: FETCH_COMMITS_REQUEST,
  payload: { owner, repository },
});

export const fetchCommitsSuccess = (commits) => ({
  type: FETCH_COMMITS_SUCCESS,
  payload: commits,
});

export const fetchCommitsFailure = (error) => ({
  type: FETCH_COMMITS_FAILURE,
  payload: error,
});

export const fetchDiffSuccess = (diff) => ({
  type: FETCH_DIFF_SUCCESS,
  payload: diff,
});

export const fetchDiffFailure = (error) => ({
  type: FETCH_DIFF_FAILURE,
  payload: error,
});


// Action to fetch commit diff
export const fetchDiffRequest = (owner, repository, commitSHA) => ({
  type: FETCH_DIFF_REQUEST,
  payload: { owner, repository, commitSHA }
});