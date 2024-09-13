import React from 'react';
import '../assets/styles/checker_common.css';
import '../assets/styles/checker_solution.css';

import Compass from '../assets/images/compass-solid.svg';
import ToDo from '../assets/images/list-check-solid.svg';
import Pen from '../assets/images/pen-nib-solid.svg';
import Checker from '../assets/images/stethoscope-solid.svg';
import Profile from '../assets/images/circle-user-solid.svg';

function SolutionPage() {
  // 진단 결과 예시 
  const diagnosisData = [
    { condition: '감염', accuracy: '78%', solution: '감염의 대처법은 ~~~~~~~~' },
    { condition: '부상', accuracy: '65%', solution: '부상의 대처법은 ~~~~~~~~' },
    { condition: '영양 부족', accuracy: '82%', solution: '영양 부족의 대처법은 ~~~~~~~~' },
  ];

  return (
    <div>
      <header>
        <h1>건강 자문 AI</h1>
      </header>

      <main>
      <div className="option-bar">
        <a href="/checker-info" className="option">기본 정보</a>
        <span className="arrow">▶</span>
        <a href="/checker-symptom" className="option">증상 기록</a>
        <span className="arrow">▶</span>
        <a href="/checker-diagnosis" className="option">가능 질환</a>
        <span className="arrow">▶</span>
        <a href="/checker-solution" className="option active">대처법</a>
      </div>

        <div id="sol">대처법</div>

        <div id="diagnosis-container" className="diagnosis">
          {diagnosisData.map((diagnosis, index) => (
            <div key={index} className="diagnosis-box">
              <div>{diagnosis.condition}</div>
              <div className="percentage">정확도: {diagnosis.accuracy}</div>
              <div>{diagnosis.solution}</div>
            </div>
          ))}
        </div>

        <div className="navigation-arrows">
          <a href="/checker-diagnosis" className="arrow left">&larr;</a>
          <a href="/mp-first" className="arrow right">완료</a>
        </div>
      </main>

      <footer className="navbar">
        <ul>
          <li>
            <a href="/main-board">
              <img src={Compass} alt="Home" />
            </a>
          </li>
          <li>
            <a href="/main-todo">
              <img src={ToDo} alt="To-Do" />
            </a>
          </li>
          <li>
            <a href="/main">
              <img src={Pen} alt="Notes" />
            </a>
          </li>
          <li>
            <a href="/checker-info">
              <img src={Checker} alt="Health" />
            </a>
          </li>
          <li>
            <a href="/mp-first">
              <img src={Profile} alt="Profile" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default SolutionPage;
