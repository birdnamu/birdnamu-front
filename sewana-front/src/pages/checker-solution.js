import React from 'react';
import '../assets/styles/checker_common.css';
import '../assets/styles/checker_solution.css';

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
          <a href="../html/checker_info.html" className="option">기본 정보</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_symptom.html" className="option">증상 기록</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_diagnosis.html" className="option">가능 질환</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_solution.html" className="option active">대처법</a>
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
          <a href="../html/checker_diagnosis.html" className="arrow left">&larr;</a>
          <a href="./mp-first.html" className="arrow right">완료</a>
        </div>
      </main>

      <footer className="navbar">
        <ul>
          <li>
            <a href="../html/main-board.html">
              <img src="../data/img/icons/compass-solid.svg" alt="Home" />
            </a>
          </li>
          <li>
            <a href="../html/main-todo.html">
              <img src="../data/img/icons/list-check-solid.svg" alt="To-Do" />
            </a>
          </li>
          <li>
            <a href="../html/main.html">
              <img src="../data/img/icons/pen-nib-solid.svg" alt="Notes" />
            </a>
          </li>
          <li>
            <a href="../html/checker_info.html">
              <img src="../data/img/icons/stethoscope-solid.svg" alt="Health" />
            </a>
          </li>
          <li>
            <a href="../html/login.html">
              <img src="../data/img/icons/circle-user-solid.svg" alt="Profile" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default SolutionPage;
