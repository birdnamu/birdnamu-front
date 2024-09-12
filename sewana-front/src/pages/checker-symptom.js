import React, { useState } from 'react';
import '../assets/styles/checker_common.css';
import '../assets/styles/checker_symptom.css';

const symptomsData = {
  head: ['부리 변형', '부리 색 변화', '부리 균열', '부리 과도한 성장', '부리 출혈'],
  eyes: ['눈 분비물', '눈 충혈', '눈 부종', '시력 상실', '눈 주변 깃털 손실'],
  beak: ['부리 변형', '부리 색 변화', '부리 균열', '부리 과도한 성장', '부리 출혈'],
  chest: ['호흡 곤란', '흉부 부종', '깃털 손실'],
  wings: ['날개 처짐', '날개 깃털 손실', '날개 부상', '비행 불능'],
  abdomen: ['복부 팽창', '체중 감소', '비정상적인 덩어리'],
  legs: ['다리 절뚝거림', '발 부종', '발톱 변형', '발목 부상'],
  feet: ['다리 절뚝거림', '발 부종', '발톱 변형', '발목 부상'],
  skin: ['깃털 가려움', '깃털 손실', '피부 발진', '피부 궤양', '비정상']
};

const koreanNames = {
  head: '머리',
  eyes: '눈',
  beak: '부리',
  chest: '가슴',
  wings: '날개',
  abdomen: '배',
  legs: '다리',
  feet: '발',
  skin: '피부'
};

const SymptomChecker = () => {
  const [selectedParts, setSelectedParts] = useState({});
  const [currentSymptoms, setCurrentSymptoms] = useState([]);

  const handlePartClick = (part) => {
    setCurrentSymptoms(symptomsData[part]);
  };

  const handleSymptomClick = (part, symptom) => {
    setSelectedParts((prev) => {
      const newParts = { ...prev };
      if (!newParts[part]) {
        newParts[part] = [];
      }
      if (!newParts[part].includes(symptom)) {
        newParts[part].push(symptom);
      }
      return newParts;
    });
  };

  const handleReset = () => {
    setSelectedParts({});
  };

  const renderSelectedParts = () => {
    return Object.keys(selectedParts).map((part) => (
      <div key={part} className="selected-part">
        <span>{koreanNames[part]}: </span>
        {selectedParts[part].join(', ')}
      </div>
    ));
  };

  return (
    <div>
      <header>
        <h1>건강 자문 AI</h1>
      </header>

      <main>
        <div className="option-bar">
          <a href="../html/checker_info.html" className="option">기본 정보</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_symptom.html" className="option active">증상 기록</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_diagnosis.html" className="option">가능 질환</a>
          <span className="arrow">▶</span>
          <a href="../html/checker_solution.html" className="option">대처법</a>
        </div>

        <div className="content">
          <div className="fixed-container">
            <h2 className="title">증상 선택</h2>
            <div className="grid-container">
              {Object.keys(symptomsData).map((part) => (
                <button
                  key={part}
                  className="grid-item"
                  onClick={() => handlePartClick(part)}
                >
                  {koreanNames[part]}
                </button>
              ))}
            </div>
          </div>

          <div id="symptoms-container" className="symptoms-container">
            <div id="symptoms-list">
              {currentSymptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="symptom-item"
                  onClick={() => handleSymptomClick(symptom, symptom)}
                >
                  {symptom}
                </div>
              ))}
            </div>
          </div>

          <div id="selected-data" className="selected-data">
            <h2>선택된 신체 부위 및 증상</h2>
            <div id="selected-parts">
              {renderSelectedParts()}
            </div>
            <button id="reset-button" onClick={handleReset}>Reset</button>
          </div>

          <div className="navigation-arrows">
            <a href="../html/checker_info.html" className="arrow left">&larr;</a>
            <a href="../html/checker_solution.html" className="arrow right">&rarr;</a>
          </div>
        </div>
      </main>

      <footer className="navbar">
        <ul>
          <li><a href="../html/main-board.html"><img src="../data/img/icons/compass-solid.svg" alt="Home" /></a></li>
          <li><a href="../html/main-todo.html"><img src="../data/img/icons/list-check-solid.svg" alt="To-Do" /></a></li>
          <li><a href="../html/main.html"><img src="../data/img/icons/pen-nib-solid.svg" alt="Notes" /></a></li>
          <li><a href="../html/checker_info.html"><img src="../data/img/icons/stethoscope-solid.svg" alt="Health" /></a></li>
          <li><a href="../html/login.html"><img src="../data/img/icons/circle-user-solid.svg" alt="Profile" /></a></li>
        </ul>
      </footer>
    </div>
  );
};

export default SymptomChecker;
