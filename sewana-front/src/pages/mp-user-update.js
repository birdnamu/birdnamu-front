import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import '../assets/styles/mp-user-update.css';

import Compass from '../assets/images/compass-solid.svg';
import ToDo from '../assets/images/list-check-solid.svg';
import Pen from '../assets/images/pen-nib-solid.svg';
import Checker from '../assets/images/stethoscope-solid.svg';
import Profile from '../assets/images/circle-user-solid.svg';

const UserUpdatePage = () => {
  const [formData, setFormData] = useState({
    birdImage: null,
    userid: '',
    username: '',
    password: '',
    email: '',
    birthdate: '',
    gender: 'female',
  });
  
  const [ageInMonths, setAgeInMonths] = useState('');
  const navigate = useNavigate(); // useNavigate hook

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDateChange = (e) => {
    const birthDate = new Date(e.target.value);
    const today = new Date();
    const ageMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
    setAgeInMonths(`${ageMonths}개월`);
    handleChange(e);
  };

  const handleSubmit = () => {
    navigate('/mp-first'); 
  };

  return (
    <div>
      <header>
        <button onClick={() => navigate(-1)}>뒤로가기</button> {/* navigate(-1) replaces history.goBack() */}
        <h1>내 정보 수정하기</h1>
      </header>

      <main>
        <section className="title">
          <div>내 정보를 수정해주세요.</div>
        </section>

        <section className="form">
          <form id="userForm">
            <article>
              <label htmlFor="birdImage">사진 업로드:</label>
              <input
                type="file"
                id="birdImage"
                name="birdImage"
                accept="image/*"
                onChange={handleChange}
              />
            </article>
            <article>
              <label htmlFor="userid">이름:</label>
              <input
                type="text"
                id="userid"
                name="userid"
                value={formData.userid}
                onChange={handleChange}
              />
            </article>
            <article>
              <label htmlFor="username">아이디:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </article>
            <article>
              <label htmlFor="password">비밀번호:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </article>
            <article>
              <label htmlFor="email">이메일 주소:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </article>
            <article>
              <label htmlFor="birthdate">생년월일:</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleDateChange}
              />
              <span id="ageInMonths">{ageInMonths}</span>
            </article>
            <article>
              <label htmlFor="gender">성별:</label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="female">여성</option>
                <option value="male">남성</option>
                <option value="other">기타</option>
              </select>
            </article>
          </form>
        </section>

        <section className="submit">
          <article>
            <button onClick={handleSubmit} id="submit">수정 완료</button>
          </article>
        </section>
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

export default UserUpdatePage;
