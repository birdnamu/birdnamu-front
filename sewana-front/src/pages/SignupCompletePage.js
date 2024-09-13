import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/signup2.css'; 

const SignupCompletePage = () => {
  return (
    <div className="signup-complete">
      <main className="submitted">
        <section>
          <div id="logo">새와나</div>
          <div id="submitted">
            <h1>반갑습니다 :D</h1>
            <h2>회원가입이 완료되었습니다.</h2>
            <div>
              <Link to="/login" className="login-link">로그인하러 가기</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignupCompletePage;
