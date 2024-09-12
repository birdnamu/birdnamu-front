import React, { useEffect } from 'react';
import '../assets/styles/checker_common.css';
import '../assets/styles/checker_diagnosis.css';

function HealthAdvisorAI() {
  const diagnosisData = [
    { name: 'Diagnosis 1', percentage: '70%' },
    { name: 'Diagnosis 2', percentage: '60%' },
    { name: 'Diagnosis 3', percentage: '80%' },
    { name: 'Diagnosis 4', percentage: '65%' },
    { name: 'Diagnosis 5', percentage: '55%' },
    { name: 'Diagnosis 6', percentage: '75%' },
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
          <a href="../html/checker_info.html" className="option">기본 정보</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_symptom.html" className="option">증상 기록</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_diagnosis.html" className="option active">가능 질환</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_solution.html" className="option">대처법</a>
        </div>

        <div className="symptoms">
          <div className="symptom-details">
            <div className="symptom-header">증상</div>
            <div className="symptom-item">부위: 다리</div>
            <div className="symptom-item">해당 사항: 절뚝거림, 붓기, 열기</div>
            <a href="../html/checker_symptom.html" id="edit-symptoms">수정하기</a>
          </div>
        </div>

        <div id="diagnosis-container" className="diagnosis">
          {/* 가능질환을 여기에 표시 (React에서 직접 렌더링) */}
        </div>

        <div className="navigation-arrows">
          <a href="../html/checker_symptom.html" className="arrow left">&larr;</a>
          <a href="../html/checker_solution.html" className="arrow right">&rarr;</a>
        </div>  
      </main>

      <footer className="navbar">
        <ul>
          <li>
            <a href="../html/main-board.html">
              <img src="../data/img/icons/compass-solid.svg" alt="Compass Icon" />
            </a>
          </li>                
          <li>
            <a href="../html/main-todo.html">
              <img src="../data/img/icons/list-check-solid.svg" alt="Todo Icon" />
            </a>
          </li>
          <li>
            <a href="../html/main.html">
              <img src="../data/img/icons/pen-nib-solid.svg" alt="Pen Icon" />
            </a>
          </li>
          <li>
            <a href="../html/checker_info.html">
              <img src="../data/img/icons/stethoscope-solid.svg" alt="Stethoscope Icon" />
            </a>
          </li>
          <li>
            <a href="../html/login.html">
              <img src="../data/img/icons/circle-user-solid.svg" alt="User Icon" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default HealthAdvisorAI;
