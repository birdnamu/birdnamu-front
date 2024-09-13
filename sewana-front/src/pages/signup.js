import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/signup.css';
import crowLogo from '../assets/images/crow-solid.svg'; // 새와나 로고 대체

const SignupPage = () => {
  const [fullAccept, setFullAccept] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const navigate = useNavigate();

  const handleFullAcceptChange = (e) => {
    const isChecked = e.target.checked;
    setFullAccept(isChecked);
    setTermsAndConditions(isChecked);
    setPrivacyPolicy(isChecked);
  };

  const handleTermsAndConditionsChange = (e) => {
    setTermsAndConditions(e.target.checked);
  };

  const handlePrivacyPolicyChange = (e) => {
    setPrivacyPolicy(e.target.checked);
  };

  const handleNextButtonClick = () => {
    if (termsAndConditions && privacyPolicy) {
      navigate('/signup2'); // Navigate to the next signup page
    } else {
      alert('이용약관 및 개인정보 수집 및 이용에 동의해야 합니다.');
    }
  };

  return (
    <div className="signup-container">
      <header>
        <button onClick={() => navigate('/login')} style={{ textDecoration: 'none' }}>뒤로가기</button>
        <h1>회원가입</h1>
        <ul style={{ listStyle: 'none' }}>
          <li id="current-step">1</li>
          <li id="next-step">2</li>
        </ul>
      </header>

      <main>
        <section className="title">
          <img src={crowLogo} alt="logo" className="logo" />
          <div>이용약관에 동의해주세요.</div>
        </section>

        <section className="form">
          <article>
            <label htmlFor="full_accept" className="checkbox-label">
              <input
                type="checkbox"
                name="full_accept"
                id="full_accept"
                checked={fullAccept}
                onChange={handleFullAcceptChange}
              />
              <span className="checkbox-custom"></span>전체 동의하기
            </label>
          </article>
          
          <article>
            <div>
              <div>
                <label htmlFor="terms_and_conditions" className="checkbox-label">
                  <input
                    type="checkbox"
                    name="terms_and_conditions"
                    id="terms_and_conditions"
                    checked={termsAndConditions}
                    onChange={handleTermsAndConditionsChange}
                  />
                  <span className="checkbox-custom"></span>서비스 이용약관
                </label>
                <div className="terms-content">이용약관 내용</div>
              </div>
              
              <div>
                <label htmlFor="privacy_policy" className="checkbox-label">
                  <input
                    type="checkbox"
                    name="privacy_policy"
                    id="privacy_policy"
                    checked={privacyPolicy}
                    onChange={handlePrivacyPolicyChange}
                  />
                  <span className="checkbox-custom"></span>개인정보 수집 및 이용
                </label>
                <div className="terms-content">개인정보 수집 및 이용 내용</div>
              </div>
            </div>
          </article>
        </section>
      </main>

      <section className="submit">
        <article>
          <button id="submit" onClick={handleNextButtonClick}>다음</button>
        </article>
      </section>
    </div>
  );
};

export default SignupPage;
