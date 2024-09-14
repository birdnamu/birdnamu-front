import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/styles/board-create.css';
import cameraIcon from '../assets/images/camera-solid.svg'; // Update path according to your project structure

function BoardEdit() {
  const { id } = useParams(); // Access route parameters
  const navigate = useNavigate(); // For navigation
  const [formData, setFormData] = useState({
    isQuestion: false,
    title: '',
    content: '',
    file: null,
    fileName: '첨부파일',
  });

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Fetch existing data when component mounts
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/board/${id}`);
        const data = await response.json();
        setFormData({
          isQuestion: data.isQuestion,
          title: data.title,
          content: data.content,
          file: null,
          fileName: data.fileName || '첨부파일',
        });
        if (data.file) {
          setImageSrc(data.fileUrl);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        file: file,
        fileName: file.name,
      }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleSubmit = async () => {
    const { isQuestion, title, content, file } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append('isQuestion', isQuestion);
    formDataToSend.append('title', title);
    formDataToSend.append('content', content);
    if (file) {
      formDataToSend.append('file', file);
    }

    try {
      const response = await fetch(`/api/board/${id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('글이 성공적으로 수정되었습니다!');
        navigate('/'); // Redirect to another page after success
      } else {
        alert('글 수정 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('오류가 발생했습니다.');
    }
  };

  return (
    <div className="board-edit-container">
      <header>
        <button onClick={handleBack}>뒤로가기</button>
        <h1>수정하기</h1>
        <div>
          <input type="button" id="submit" value="수정" onClick={handleSubmit} />
        </div>
      </header>

      <main>
        <form>
          <section className="form">
            {/* Checkbox for "질문글" with Checkbox on Right */}
            <article className="checkbox-section">
              <label htmlFor="question-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="question-checkbox"
                  name="isQuestion"
                  checked={formData.isQuestion}
                  onChange={handleChange}
                />
                질문글
              </label>
            </article>

            {/* Title Input */}
            <article className="title">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="제목을 입력하세요..."
                value={formData.title}
                onChange={handleChange}
                required
              />
            </article>

            {/* Content Textarea */}
            <article className="content">
              <textarea
                name="content"
                id="content"
                placeholder="내용을 입력하세요..."
                minLength="10"
                maxLength="200"
                value={formData.content}
                onChange={handleChange}
                required
              ></textarea>
            </article>
          </section>
          <section className="form-tail">
            <article className="filebox">
              <label htmlFor="file" className="filebox-label">
                <img src={cameraIcon} alt="카메라아이콘" />
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <input
                className="upload-name"
                value={formData.fileName}
                placeholder="첨부파일"
                readOnly
              />
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

