import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/main.css';

import Compass from '../assets/images/compass-solid.svg';
import ToDo from '../assets/images/list-check-solid.svg';
import Pen from '../assets/images/pen-nib-solid.svg';
import Checker from '../assets/images/stethoscope-solid.svg';
import Profile from '../assets/images/circle-user-solid.svg';

const JournalPage = () => {
  const journals = [
    {
      date: '2024년00월00일',
      title: '제목입니다',
      content: '내용 미리보기 입니다...',
      reaction: '공감 00 댓글 00',
      image: '/data/img/사랑앵무.jpg',
      link: './journal'
    },
    {
      date: '0000년 00월 00일',
      title: '예시2번 제목',
      content: '내용 미리보기 입니다...',
      reaction: '공감 00 댓글 00',
      image: '',
      link: './journal'
    },
  ];

  return (
    <div>
      <header className="journal-list">
        <div>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <object data="/data/img/icons/crow-solid.svg" type="image/svg+xml" aria-label="Logo"></object>
            </li>
            <li className="journal-title">
              <span id="bird-name">사랑</span>이의 성장일지
            </li>
          </ul>
        </div>
        <div className="sort">
          <form>
            <select name="sort" id="sort">
              <option id="sort-option" value="old">날짜순</option>
              <option id="sort-option" value="new">최신순</option>
            </select>
          </form>
        </div>
      </header>
      <main>
        <section>
          {journals.map((journal, index) => (
            <article key={index} className="jitem" onClick={() => window.location.href = journal.link}>
              <div>
                <ul className="jtext">
                  <li id="jdate">{journal.date}</li>
                  <li id="jtitle">{journal.title}</li>
                  <li id="content">{journal.content}</li>
                  <li id="jreaction">{journal.reaction}</li>
                </ul>
              </div>
              {journal.image && (
                <div id="jimage">
                  <img src={journal.image} alt="임의의 사진" />
                </div>
              )}
            </article>
          ))}
        </section>
        <div id="floating-btn">
          <Link to="/journal-create">
            <img src="/data/img/icons/circle-pluc-solid.svg" alt="추가 아이콘" />
          </Link>
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

export default JournalPage;
