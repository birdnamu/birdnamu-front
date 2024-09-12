import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BoardCreate from './pages/board-create';
import BoardUpdate from './pages/board-update';
import Board from './pages/board';
import CheckerDiagnosis from './pages/checker-diagnosis';
import CheckerInfo from './pages/checker-info';
import CheckerSolution from './pages/checker-solution';
import CheckerSymptom from './pages/checker-symptom';
import JournalCreate from './pages/journal-create';
import JournalUpdate from './pages/journal-update';
import Journal from './pages/journal';
import Login from './pages/login';
import MainBoard from './pages/main-board';
import MainTodo from './pages/main-todo';
import Main from './pages/main';
import MpBirdCreate from './pages/mp-bird-create';
import MpBirdUpdate from './pages/mp-bird-update';
import MpFirst from './pages/mp-first';
import MpUserUpdate from './pages/mp-user-update';
import Signup2 from './pages/signup2';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page using the 'element' prop */}
        <Route path="/" element={<Main />} />
        <Route path="/board-create" element={<BoardCreate />} />
        <Route path="/board-update" element={<BoardUpdate />} />
        <Route path="/board" element={<Board />} />
        <Route path="/checker-diagnosis" element={<CheckerDiagnosis />} />
        <Route path="/checker-info" element={<CheckerInfo />} />
        <Route path="/checker-solution" element={<CheckerSolution />} />
        <Route path="/checker-symptom" element={<CheckerSymptom />} />
        <Route path="/journal-create" element={<JournalCreate />} />
        <Route path="/journal-update" element={<JournalUpdate />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main-board" element={<MainBoard />} />
        <Route path="/main-todo" element={<MainTodo />} />
        <Route path="/mp-bird-create" element={<MpBirdCreate />} />
        <Route path="/mp-bird-update" element={<MpBirdUpdate />} />
        <Route path="/mp-first" element={<MpFirst />} />
        <Route path="/mp-user-update" element={<MpUserUpdate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup2" element={<Signup2 />} />

        {/* 404 Page Not Found */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
