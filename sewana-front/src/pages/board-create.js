import React from 'react';
import '../assets/styles/board-create.css';

function BoardCreate() {
  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <div>
      <header>
        <button onClick={handleBack}>뒤로가기</button>
        <h1>글쓰기</h1>
        <div>
          <label htmlFor="submit"></label>
          <input type="button" id="submit" value="등록" onClick={handleSubmit} />
        </div>
      </header>
      <main>
        <form action="">
          <section className="form">
            <article>
              <input type="checkbox" />
              <label htmlFor="checkbox">질문글</label>
            </article>
            <article className="title">
              <label htmlFor="title"></label>
              <input type="text" id="title" placeholder="제목을 입력하세요..." required />
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
              ></textarea>
            </article>
          </section>
          <section className="form-tail">
            <article className="filebox">
              <label htmlFor="file">
                <img src="../data/img/icons/camera-solid.svg" alt="카메라아이콘" />
              </label>
              <input type="file" id="file" accept="image/*" />
              <input className="upload-name" value="첨부파일" placeholder="첨부파일" />
            </article>
          </section>
        </form>
      </main>
    </div>
  );
}

export default BoardCreate;
