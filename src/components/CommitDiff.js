import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDiffRequest } from '../store/actions';

const CommitDiff = () => {
  const { owner, repository, commitSHA } = useParams();
  const dispatch = useDispatch();
  const diff = useSelector(state => 
    {
      console.log(state)
      return state.commitDiff.diff});
  const error = useSelector(state => state.commitDiff.error);

  useEffect(() => {
    dispatch(fetchDiffRequest(owner, repository, commitSHA));
  }, [dispatch, owner, repository, commitSHA]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Commit Diff</h2>
      {diff.map((file, index) => (
        <div key={index}>
          <h3>{file.headFile.path}</h3>
          {file.hunks.map((hunk, i) => (
            <pre key={i}>
              {hunk.lines.map((line, j) => (
                <div key={j}>{line.content}</div>
              ))}
            </pre>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommitDiff;
