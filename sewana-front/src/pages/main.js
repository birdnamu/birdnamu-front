//npm install react-router-dom < 이거 해야 돌아감

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/main.css';

const JournalPage = () => {
  const journals = [
    {
      date: '2024년00월00일',
      title: '제목입니다',
      content: '내용 미리보기 입니다...',
      reaction: '공감 00 댓글 00',
      image: '../data/img/사랑앵무.jpg',
      link: './journal.html'
    },
    {
      date: '0000년 00월 00일',
      title: '예시2번 제목',
      content: '내용 미리보기 입니다...',
      reaction: '공감 00 댓글 00',
      image: '',
      link: './journal.html'
    },
  ];

  return (
    <div>
      <header className="journal-list">
        <div>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <object data="../data/img/icons/crow-solid.svg" type="image/svg+xml" aria-label="Logo"></object>
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
          <Link to="../html/journal-create.html">
            <img src="../data/img/icons/circle-pluc-solid.svg" alt="추가 아이콘" />
          </Link>
        </div>
      </main>
      <footer className="navbar">
        <ul>
          <li>
            <Link to="../html/main-board.html">
              <img src="../data/img/icons/compass-solid.svg" alt="Board" />
            </Link>
          </li>
          <li>
            <Link to="../html/main-todo.html">
              <img src="../data/img/icons/list-check-solid.svg" alt="To-Do" />
            </Link>
          </li>
          <li>
            <Link to="../html/main.html">
              <img src="../data/img/icons/pen-nib-solid-color.svg" alt="Pen" />
            </Link>
          </li>
          <li>
            <Link to="../html/checker_info.html">
              <img src="../data/img/icons/stethoscope-solid.svg" alt="Info" />
            </Link>
          </li>
          <li>
            <Link to="../html/login.html">
              <img src="../data/img/icons/circle-user-solid.svg" alt="User" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default JournalPage;
