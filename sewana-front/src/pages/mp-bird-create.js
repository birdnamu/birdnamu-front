//npm install react react-dom react-router-dom

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/mp-bird-create.css';


const BirdCreatePage = () => {
  const [species, setSpecies] = useState([]);
  const [traits, setTraits] = useState([]);
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [ageInMonths, setAgeInMonths] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // 여기 데이터 더 채우기 (따로 JSON 파일 만들지/ 바로 여기다 정리할지 정하기!)
    const speciesList = ['사랑앵무', '왕관앵무', '모란앵무', '코카투'];
    const traitsList = ['활발함', '차분함', '귀여움', '정신없음'];
    setSpecies(speciesList);
    setTraits(traitsList);
  }, []);

  const handleDateChange = (e) => {
    const birthDate = new Date(e.target.value);
    const today = new Date();
    const months = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
    setAgeInMonths(`(${months}개월)`);
  };

  const handleTraitChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedTraits(selected);
  };

  const handleSubmit = () => {
    const form = document.getElementById('birdForm');
    const formData = new FormData(form);
    const traits = formData.getAll('traits');

    if (traits.length < 1 || traits.length > 3) {
      alert('성격은 1개 이상 3개 이하로 선택해주세요.');
      return;
    }

    navigate('./mp-first.html');
  };

  return (
    <div>
      <header>
        <button onClick={() => window.history.back()}>뒤로가기</button>
        <h1>반려조 등록</h1>
      </header>

      <main>
        <section className="title">
          <div>반려조 정보를 입력해주세요.</div>
        </section>

        <section className="form">
          <form id="birdForm">
            <article>
              <label htmlFor="birdImage">사진 업로드:</label>
              <input type="file" id="birdImage" name="birdImage" accept="image/*" />
            </article>
            <article>
              <label htmlFor="username">이름:</label>
              <input type="text" id="username" name="username" />
            </article>
            <article>
              <label htmlFor="species">종:</label>
              <select id="species" name="species">
                {species.map(sp => (
                  <option key={sp} value={sp}>{sp}</option>
                ))}
              </select>
            </article>
            <article>
              <label htmlFor="birthdate">생년월일:</label>
              <input type="date" id="birthdate" name="birthdate" onChange={handleDateChange} />
              <span id="ageInMonths">{ageInMonths}</span>
            </article>
            <article>
              <label htmlFor="gender">성별:</label>
              <select name="gender" id="gender">
                <option value="female">수컷</option>
                <option value="male">암컷</option>
                <option value="other">모름</option>
              </select>
            </article>
            <article>
              <label htmlFor="traits">성격:</label>
              <select id="traits" name="traits" multiple onChange={handleTraitChange}>
                {traits.map(trait => (
                  <option key={trait} value={trait}>{trait}</option>
                ))}
              </select>
              <div id="selected-traits">{selectedTraits.join(', ')}</div>
            </article>
          </form>
        </section>

        <section className="submit">
          <article>
            <button type="button" id="submit" onClick={handleSubmit}>등록 완료</button>
          </article>
        </section>
      </main>

      <footer className="navbar">
        <ul>
          <li>
            <a href="../html/main-board.html">
              <img src="../data/img/icons/compass-solid-color.svg" alt="Board" />
            </a>
          </li>
          <li>
            <a href="../html/main-todo.html">
              <img src="../data/img/icons/list-check-solid.svg" alt="To-Do" />
            </a>
          </li>
          <li>
            <a href="../html/main.html">
              <img src="../data/img/icons/pen-nib-solid.svg" alt="Pen" />
            </a>
          </li>
          <li>
            <a href="../html/checker_info.html">
              <img src="../data/img/icons/stethoscope-solid.svg" alt="Info" />
            </a>
          </li>
          <li>
            <a href="../html/login.html">
              <img src="../data/img/icons/circle-user-solid.svg" alt="User" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default BirdCreatePage;
