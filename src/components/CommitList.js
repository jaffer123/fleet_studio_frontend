import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCommitsRequest } from '../store/actions';

const CommitList = () => {

  const { owner, repository } = useParams();
  const dispatch = useDispatch();
  
  const commits = useSelector(state => {return state.commits.commits});
  const error = useSelector(state => state.commits.error);

  useEffect(() => {
    dispatch(fetchCommitsRequest(owner, repository));
  }, [dispatch, owner, repository]);

  if (error && !commits.length) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Commit List</h2>
      <ul>
        {commits.map(commit => (
          
          <li key={commit.oid}>
            <Link to={`/repositories/${owner}/${repository}/commit/${commit.oid}`}>
              <strong>{commit.message}</strong> by {commit.author.name} on {commit.author.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommitList;
