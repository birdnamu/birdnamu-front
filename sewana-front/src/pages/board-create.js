import React, { useState } from 'react';
import '../assets/styles/board-create.css';
import camera from '../assets/images/camera-solid.svg';

function BoardCreate() {
  const [fileName, setFileName] = useState('첨부파일'); // To store and display the uploaded file's name

  const handleBack = () => {
    window.history.back(); // Navigate back to the previous page
  };

  const handleSubmit = () => {
    console.log('Form submitted');
    // Add submission logic here
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name); // Set the uploaded file's name
    }
  };

  return (
    <div className="board-create-container">
      <header>
        <button onClick={handleBack}>뒤로가기</button>
        <h1>글쓰기</h1>
        <div>
          <input type="button" id="submit" value="등록" onClick={handleSubmit} />
        </div>
      </header>

      <main>
        <form>
          <section className="form">
            {/* Checkbox Section */}
            <article className="checkbox-section">
              <input type="checkbox" id="question-checkbox" />
              <label htmlFor="question-checkbox">질문글</label>
            </article>

            {/* Title Input */}
            <article className="title">
              <input
                type="text"
                id="title"
                placeholder="제목을 입력하세요..."
                required
              />
            </article>

            {/* Content Textarea */}
            <article className="content">
              <textarea
                name="content"
                id="content"
                minLength="10"
                maxLength="200"
                placeholder="내용을 입력하세요..."
                required
              ></textarea>
            </article>
          </section>

          {/* Footer with File Upload */}
          <section className="form-tail">
            <article className="filebox">
              <label htmlFor="file">
                <img src="../data/img/icons/camera-solid.svg" alt="카메라아이콘" />
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
}

export default BoardCreate;
