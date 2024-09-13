import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/styles/main.css';

import Compass from '../assets/images/compass-solid.svg';
import ToDo from '../assets/images/list-check-solid.svg';
import Pen from '../assets/images/pen-nib-solid.svg';
import Checker from '../assets/images/stethoscope-solid.svg';
import Profile from '../assets/images/circle-user-solid.svg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleItemClick = (url) => {
    navigate(url);  // Use navigate to change routes
  };

  return (
    <div>
      <header className="journal-list">
        <div>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <object data="../data/img/icons/crow-solid.svg" type="image/svg+xml"></object>
            </li>
            <li className="journal-title">자유게시판</li>
          </ul>
        </div>
        <div className="sort">
          <form>
            <select name="sort" id="sort">
              <option id="sort-option" value="whole" selected>전체글</option>
              <option id="sort-option" value="q">질문글</option>
              <option id="sort-option" value="no-q">일상글</option>
            </select>
          </form>
        </div>
      </header>

      <main>
        <section>
          {/* Navigate to "/board" instead of "./board.html" */}
          <article className="jitem" onClick={() => handleItemClick('/board')}>
            <div>
              <ul className="jtext">
                <li id="jdate">#질문</li>
                <li id="jtitle">성별은 언제쯤 알 수 있나요?</li>
                <li id="content">어쩌다 보니 집사가 된 지 3일차네요...</li>
                <li id="jreaction">2024년00월00일 추천 00 댓글 00</li>
              </ul>
            </div>
            <div id="jimage">
              <img src="../data/img/사랑앵무.jpg" alt="임의의 사진" />
            </div>
          </article>

          <article className="jitem" onClick={() => handleItemClick('/board')}>
            <div>
              <ul className="jtext">
                <li id="jdate">#일상</li>
                <li id="jtitle">소파가 남아 나지않는 요즘</li>
                <li id="content">소파 뒷부분은 잘 안 보여서 몰랐는데...</li>
                <li id="jreaction">2024년00월00일 추천 00 댓글 00</li>
              </ul>
            </div>
            <div id="jimage">
              <img src="../data/img/사랑앵무.jpg" alt="임의의 사진" />
            </div>
          </article>
        </section>

        {/* Floating Button for Create Post */}
        <div id="floating-btn" onClick={() => handleItemClick('/board-create')}>
          <img src="../data/img/icons/circle-plus-solid.svg" alt="추가 아이콘" />
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
};

export default HomePage;

