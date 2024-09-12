import React, { useState } from 'react';
import '../assets/styles/board-create.css';

function BoardEdit() {
  const [fileName, setFileName] = useState('첨부파일');
  const [imageSrc, setImageSrc] = useState(null);

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <header>
        <button onClick={handleBack}>뒤로가기</button>
        <h1>수정하기</h1>
        <div>
          <label htmlFor="submit"></label>
          <input type="button" id="submit" value="수정" onClick={handleSubmit} />
        </div>
      </header>
      <main>
        <form action="">
          <section className="form">
            <article>
              <input type="checkbox" checked readOnly />
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
              <input type="file" id="file" accept="image/*" onChange={handleFileChange} />
              <input className="upload-name" value={fileName} placeholder="첨부파일" readOnly />
            </article>
          </section>
        </form>
        {imageSrc && (
          <section className="image-preview">
            <h2>미리보기:</h2>
            <img src={imageSrc} alt="Selected" />
          </section>
        )}
      </main>
    </div>
  );
}

export default BoardEdit;
