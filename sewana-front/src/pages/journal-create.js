import React, { useState } from 'react';
import '../assets/styles/journal-create.css';

const JournalCreate = () => {
  const [bird, setBird] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fileName, setFileName] = useState('첨부파일');
  
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('첨부파일');
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted with:', { bird, date, title, content });
  };

  return (
    <div>
      <header>
        <button onClick={() => window.history.back()}>뒤로가기</button>
        <h1>일지 쓰기</h1>
        <div>
          <label htmlFor="submit"></label>
          <input 
            type="button" 
            id="submit" 
            value="등록" 
            onClick={handleSubmit} 
          />
        </div>
      </header>
      <main>
        <form action="">
          <section className="form">
            <article>
              <ul>
                <li className="picker">
                  <label htmlFor="bird">
                    <div id="bird-icon">
                      <img src="../data/img/icons/bird-svgrepo-com.svg" alt="Bird Icon" />
                    </div>
                  </label>
                  <select 
                    name="bird" 
                    id="bird" 
                    value={bird} 
                    onChange={(e) => setBird(e.target.value)}
                  >
                    <option value="" disabled hidden>반려조 선택</option>
                    <option value="bird01">사랑</option>
                    <option value="bird02">초롱</option>
                  </select>
                </li>
                <li className="picker">
                  <label htmlFor="jdate">
                    <div id="calender-icon">
                      <img src="../data/img/icons/calendar-note-date-svgrepo-com.svg" alt="Calendar Icon" />
                    </div>
                  </label>
                  <input 
                    type="date" 
                    id="jdate" 
                    required 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                  />
                </li>
              </ul>
            </article>
            <article className="title">
              <label htmlFor="title"></label>
              <input 
                type="text" 
                id="title" 
                placeholder="제목을 입력하세요..." 
                required 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
              />
            </article>
            <article className="content">
              <label htmlFor="content"></label>
              <textarea 
                name="content" 
                id="content" 
                minLength="10" 
                maxLength="200" 
                placeholder="내용을 입력하세요..." 
                required 
                value={content} 
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </article>
          </section>
          <section className="form-tail">
            <article className="filebox">
              <label htmlFor="file">
                <img src="../data/img/icons/camera-solid.svg" alt="Camera Icon" />
              </label>
              <input 
                type="file" 
                id="file" 
                accept="image/*" 
                onChange={handleFileChange}
              />
              <input 
                className="upload-name" 
                value={fileName} 
                placeholder="첨부파일" 
                readOnly
              />
            </article>
          </section>
        </form>
      </main>
    </div>
  );
};

export default JournalCreate;
