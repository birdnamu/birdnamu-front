import React from 'react';
import '../assets/styles/checker_common.css';  // Ensure paths are correct
import '../assets/styles/checker_info.css';    // Ensure paths are correct

// Import images
import Compass from '../assets/images/compass-solid.svg';
import ToDo from '../assets/images/list-check-solid.svg';
import Pen from '../assets/images/pen-nib-solid.svg';
import Checker from '../assets/images/stethoscope-solid.svg';
import Profile from '../assets/images/circle-user-solid.svg';

function HealthAdvisor() {
  const speciesOptions = [
    { value: "budgerigar", text: "사랑앵무" },
    { value: "cockatiel", text: "코카티엘" },
    { value: "lovebird", text: "모란앵무" },
    { value: "canary", text: "카나리아" },
    { value: "finch", text: "핀치" },
    { value: "conure", text: "코뉴어" },
    { value: "african_grey", text: "아프리카회색앵무" },
    { value: "amazon_parrot", text: "아마존앵무" },
    { value: "cockatoo", text: "코카투" },
    { value: "macaw", text: "마코" },
    { value: "parrotlet", text: "파로틀렛" },
    { value: "eclectus", text: "에클렉터스앵무" },
    { value: "quaker_parrot", text: "쿼커앵무" },
    { value: "pionus", text: "피오누스앵무" },
    { value: "senegal_parrot", text: "세네갈앵무" },
    { value: "kakariki", text: "카카리키 (그린파라킷)" },
    { value: "greencheek_conure", text: "그린치크코뉴어" },
    { value: "sun_conure", text: "선코뉴어" },
    { value: "Jenday_conure", text: "젠다이코뉴어" },
    { value: "nanday_conure", text: "난다이코뉴어" },
    { value: "golden_capped_conure", text: "골든캡드코뉴어" },
    { value: "orange_winged_amazon", text: "오렌지윙드아마존앵무" },
    { value: "double_yellow_headed_amazon", text: "더블옐로헤드아마존앵무" },
    { value: "blue_and_gold_macaw", text: "블루앤골드마코" },
    { value: "scarlet_macaw", text: "스칼렛마코" },
    { value: "hyacinth_macaw", text: "하이신스마코" },
    { value: "blue_fronted_amazon", text: "블루프론티드아마존앵무" },
    { value: "mitred_conure", text: "미터드코뉴어" },
    { value: "black_capped_conure", text: "블랙캡드코뉴어" },
    { value: "red_bellied_parrot", text: "레드벨리드앵무" },
    { value: "rosella", text: "로셀라" },
    { value: "zebra_finches", text: "제브라핀치" },
  ];

  const ageOptions = [
    { value: "1-12", text: "1-12 개월" },
    { value: "12-24", text: "12-24 개월" },
    { value: "24-36", text: "24-36 개월" },
    { value: "36-48", text: "36-48 개월" },
    { value: "48-60", text: "48-60 개월" },
    { value: "68+", text: "68 개월 이상" },
  ];

  return (
    <div>
      <header>
        <h1>건강 자문 AI</h1>
      </header>

      <div className="option-bar">
        <a href="/checker-info" className="option active">기본 정보</a>
        <span className="arrow">▶</span>
        <a href="/checker-symptom" className="option">증상 기록</a>
        <span className="arrow">▶</span>
        <a href="/checker-diagnosis" className="option">가능 질환</a>
        <span className="arrow">▶</span>
        <a href="/checker-solution" className="option">대처법</a>
      </div>

      <main>
        <div className="form-container">
          <div id="exp">정확한 진단을 위해서 반려조의 기본 정보를 알려주세요!</div>
          <form>
            <label htmlFor="age">나이(개월수):</label>
            <select id="age" name="age">
              {ageOptions.map((age) => (
                <option key={age.value} value={age.value}>
                  {age.text}
                </option>
              ))}
            </select>

            <label htmlFor="species">종:</label>
            <select id="species" name="species">
              {speciesOptions.map((species) => (
                <option key={species.value} value={species.value}>
                  {species.text}
                </option>
              ))}
            </select>

            <label htmlFor="gender">성별:</label>
            <select id="gender" name="gender">
              <option value="male">수컷</option>
              <option value="female">암컷</option>
              <option value="unknown">모름</option>
            </select>
          </form>
        </div>

        <div className="navigation-arrows">
          <a href="/checker-symptom" className="return"></a>
          <a href="/checker-symptom" className="arrow right">&rarr;</a>
        </div>
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
}

export default HealthAdvisor;
