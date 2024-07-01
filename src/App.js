// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import store from './store';
import CommitList from './components/CommitList';
import CommitDiff from './components/CommitDiff';

const App = () => (
  
  <Provider store={store}>
    <CommitList/>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/repositories/jaffer123/review-system/commit">Commit List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/repositories/:owner/:repository/commit" element={<CommitList/>} />
          <Route path="/repositories/:owner/:repository/commit/:commitSHA" element={<CommitDiff/>} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
