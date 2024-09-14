import React, { useEffect } from 'react';
import '../assets/styles/checker_common.css';
import '../assets/styles/checker_diagnosis.css';

import Compass from '../assets/images/compass-solid.svg';
import ToDo from '../assets/images/list-check-solid.svg';
import Pen from '../assets/images/pen-nib-solid.svg';
import Checker from '../assets/images/stethoscope-solid.svg';
import Profile from '../assets/images/circle-user-solid.svg';

function HealthAdvisorAI() {
  const diagnosisData = [
    { name: 'Diagnosis 1', percentage: '70%' },
    { name: 'Diagnosis 2', percentage: '60%' },
    { name: 'Diagnosis 3', percentage: '80%' },
    { name: 'Diagnosis 4', percentage: '65%' },
    { name: 'Diagnosis 5', percentage: '55%' },
    { name: 'Diagnosis 6', percentage: '45%' },
    { name: 'Diagnosis 7', percentage: '75%' },
    { name: 'Diagnosis 8', percentage: '85%' },
    { name: 'Diagnosis 9', percentage: '50%' },
  ];

  useEffect(() => {
    const diagnosisContainer = document.getElementById('diagnosis-container');
    diagnosisData.forEach((diagnosis) => {
      const diagnosisBox = document.createElement('div');
      diagnosisBox.className = 'diagnosis-box';
      diagnosisBox.innerHTML = `
        ${diagnosis.name}
        <div class="percentage">${diagnosis.percentage}</div>
      `;
      diagnosisContainer.appendChild(diagnosisBox);
    });
  }, [diagnosisData]);

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
          <a href="/checker-diagnosis" className="option active">가능 질환</a>
          <span className="arrow">▶</span>
          <a href="/checker-solution" className="option">대처법</a>
        </div>

        <div className="symptoms">
          <div className="symptom-details">
            <div className="symptom-header">증상</div>
            <div className="symptom-item">부위: 다리</div>
            <div className="symptom-item">해당 사항: 절뚝거림, 붓기, 열기</div>
            <a href="../html/checker_symptom.html" id="edit-symptoms">수정하기</a>
          </div>
        </div>

        <div className="diagnosis-message">
          가능 질환은 다음과 같습니다
        </div>

        <div id="diagnosis-container" className="diagnosis">
          {/* 가능질환을 여기에 표시 (React에서 직접 렌더링) */}
        </div>

        <div className="navigation-arrows">
          <a href="/checker-symptom" className="arrow left">&larr;</a>
          <a href="/checker-solution" className="arrow right">&rarr;</a>
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

export default HealthAdvisorAI;
