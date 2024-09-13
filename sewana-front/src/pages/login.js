import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import crowLogo from '../assets/images/crow-solid.svg';
import '../assets/styles/login.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/mp-first'); // 로그인 성공하면 mp-first 페이지로
      } else {
        alert(data.message || '로그인 실패. 다시 시도하세요.');
      }
    } catch (error) {
      alert('서버 오류. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <img src={crowLogo} alt="logo" className="logo" />

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="input-group" id="username">
          <label htmlFor="id">아이디 입력:</label>
          <input 
            type="text" 
            id="id" 
            name="id" 
            placeholder="아이디를 입력하세요" 
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="input-group" id="pw">
          <label htmlFor="pw">비밀번호:</label>
          <input 
            type="password" 
            id="pw" 
            name="pw" 
            placeholder="비밀번호를 입력하세요" 
            minLength="8" 
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div id="button">
          <input type="submit" value={loading ? '로그인 중...' : '로그인'} disabled={loading} />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
