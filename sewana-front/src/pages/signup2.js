import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/signup2.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    userid: '',
    password: '',
    passwordConfirm: '',
    email: '',
    birthdate: '',
    gender: 'female',
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Check if all required fields are filled
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');
    if (!allFieldsFilled) {
      alert('정보를 모두 입력해주세요.');
      return;
    }

    // Validate that passwords match
    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // POST data to the backend (replace '/api/signup' with the actual backend endpoint)
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('회원가입이 완료되었습니다.');
        navigate('/login'); // Redirect to login page on success
      } else {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <header>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <h1>회원가입</h1>
        <ul style={{ listStyle: 'none' }}>
          <li id="last-step">1</li>
          <li id="current-step">2</li>
        </ul>
      </header>
      
      <main>
        <section className="title">
          <div>회원정보를 입력해주세요.</div>
        </section>

        <section className="form">
          <form>
            <article>
              <label htmlFor="username">이름</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
              />
            </article>

            <article>
              <label htmlFor="userid">아이디</label>
              <input 
                type="text" 
                id="userid" 
                name="userid" 
                value={formData.userid} 
                onChange={handleChange} 
              />
            </article>

            <article>
              <label htmlFor="password">비밀번호</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
              />
            </article>

            <article>
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <input 
                type="password" 
                id="passwordConfirm" 
                name="passwordConfirm" 
                value={formData.passwordConfirm} 
                onChange={handleChange} 
              />
            </article>

            <article>
              <label htmlFor="email">이메일 주소</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </article>

            <article>
              <label htmlFor="birthdate">생년월일</label>
              <input 
                type="date" 
                id="birthdate" 
                name="birthdate" 
                value={formData.birthdate} 
                onChange={handleChange} 
              />
            </article>

            <article>
              <label htmlFor="gender">성별</label>
              <select 
                name="gender" 
                id="gender" 
                value={formData.gender} 
                onChange={handleChange}>
                <option value="female">여성</option>
                <option value="male">남성</option>
                <option value="other">기타</option>
              </select>
            </article>
          </form>
        </section>

        <section className="submit">
          <article>
            <input 
              type="button" 
              id="submit" 
              value="가입완료" 
              onClick={handleSubmit} 
            />
          </article>
        </section>
      </main>
    </div>
  );
};

export default SignupPage;
