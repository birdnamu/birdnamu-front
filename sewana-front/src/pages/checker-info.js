import React, { useState, useEffect } from 'react';
import '../assets/styles/checker_common.css';
import '../assets/styles/checker_info.css';



function HealthInfoForm() {
  const [speciesList, setSpeciesList] = useState([]);
  const [formData, setFormData] = useState({
    age: '',
    species: '',
    gender: 'unknown',
  });

  // KSON 경로도 다시 확인 필요 
  useEffect(() => {
    fetch('../json/species.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSpeciesList(data);
      })
      .catch(error => console.error('Error loading species data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <header>
        <h1>건강 자문 AI</h1>
      </header>

      <div className="option-bar">
        <a href="../html/checker_info.html" className="option active">기본 정보</a>
        <span className="arrow">▶</span>
        <a href="../html/checker_symptom.html" className="option">증상 기록</a>
        <span className="arrow">▶</span>
        <a href="../html/checker_diagnosis.html" className="option">가능 질환</a>
        <span className="arrow">▶</span>
        <a href="../html/checker_solution.html" className="option">대처법</a>
      </div>

      <main>
        <div className="form-container">
          <div id="exp">정확한 진단을 위해서 반려조의 기본 정보를 알려주세요!</div>
          <form>
            <label htmlFor="age">나이(개월수):</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />

            <label htmlFor="species">종:</label>
            <select
              id="species"
              name="species"
              value={formData.species}
              onChange={handleInputChange}
            >
              <option value="">선택해주세요</option>
              {speciesList.map((species) => (
                <option key={species.value} value={species.value}>
                  {species.text}
                </option>
              ))}
            </select>

            <label htmlFor="gender">성별:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="male">수컷</option>
              <option value="female">암컷</option>
              <option value="unknown">모름</option>
            </select>
          </form>
        </div>

        <div className="navigation-arrows">
          <a href="#" className="return"></a>
          <a href="../html/checker_symptom.html" className="arrow right">
            &rarr;
          </a>
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
}

export default HealthInfoForm;
