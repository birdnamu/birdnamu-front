import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import crowLogo from '../assets/images/crow-solid.svg';
import '../assets/styles/login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'testUser' && password === 'testPW') {
      navigate('/mp-first'); 
    } else {
      alert('다시 입력해주세요.'); 
    }
  };

  return (
    <div>
      <img src={crowLogo} alt="logo" />

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
          <input type="submit" value="로그인" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
