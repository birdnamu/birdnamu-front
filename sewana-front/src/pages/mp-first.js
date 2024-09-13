import React, { useState, useEffect } from 'react';
import '../assets/styles/mp-first.css';

import Compass from '../assets/images/compass-solid.svg';
import ToDo from '../assets/images/list-check-solid.svg';
import Pen from '../assets/images/pen-nib-solid.svg';
import Checker from '../assets/images/stethoscope-solid.svg';
import Profile from '../assets/images/circle-user-solid.svg';

const MyPage = () => {
  const [activeSection, setActiveSection] = useState('my-info');
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const birdData = [
      { name: "사랑", gender: "암컷", birthday: "0000.00.00", age: "12개월", species: "회색앵무", personality: "#까칠함 #귀여움" },
      { name: "희망", gender: "수컷", birthday: "0000.00.00", age: "8개월", species: "왕관앵무", personality: "#활발함 #장난기많음" },
      { name: "랄이", gender: "모름", birthday: "0000.00.00", age: "15개월", species: "코카투", personality: "#온순함 #조용함" }
    ];
    setBirds(birdData);
  }, []);

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <header>
        <button onClick={() => window.history.back()}>뒤로가기</button>
        <h1>마이페이지</h1>
      </header>
      <main>
        <div className="second-header">
          <div
            className={`tab ${activeSection === 'my-info' ? 'active' : ''}`}
            id="my-info-tab"
            onClick={() => showSection('my-info')}
          >
            내 정보
          </div>
          <div
            className={`tab ${activeSection === 'bird-info' ? 'active' : ''}`}
            id="bird-info-tab"
            onClick={() => showSection('bird-info')}
          >
            반려조 정보
          </div>
        </div>

        {/* 내 정보 Section */}
        {activeSection === 'my-info' && (
          <section id="my-info" className="profile-section">
            <h2>내 정보</h2>
            <div id="user-update">
              <button>
                <a href="./mp-user-update" className="button-link">내 정보 수정하기</a>
              </button>
            </div>
            <div className="profile-container">
              <div className="profile-pic">
                <img src="https://via.placeholder.com/100" alt="Profile Picture" />
              </div>
              <div className="profile-info">
                <p>이름: 김눈송</p>
                <p>아이디: birdnamu</p>
                <p>성별: 여</p>
                <p>생일: 0000.00.00</p>
                <p>이메일: abc@naver.com</p>
              </div>
            </div>
          </section>
        )}

        {/* 반려조 정보 Section */}
        {activeSection === 'bird-info' && (
          <section id="bird-info" className="bird-info-container">
            <h2>반려조 정보</h2>
            <div id="add-bird">
              <button>
                <a href="./mp-bird-create" className="button-link">반려조 추가하기</a>
              </button>
            </div>
            <div id="update-bird">
              <button>
                <a href="./mp-bird-update" className="button-link">정보 수정하기</a>
              </button>
            </div>
            <div id="bird-list">
              {birds.map((bird, index) => (
                <div key={index} className="bird-info">
                  <div className="bird-pic">
                    <img src="https://via.placeholder.com/100" alt="Bird Picture" />
                  </div>
                  <div className="bird-details">
                    <p>이름: {bird.name}</p>
                    <p>성별: {bird.gender}</p>
                    <p>생일: {bird.birthday} (나이: {bird.age})</p>
                    <p>종: {bird.species}</p>
                    <p>성격: {bird.personality}</p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </section>
        )}
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
};

export default MyPage;
