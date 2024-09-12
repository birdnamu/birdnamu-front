//npm install react react-dom react-router-dom

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/mp-bird-update.css';

const BirdUpdatePage = () => {
  const [species, setSpecies] = useState([]);
  const [traits, setTraits] = useState([]);
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [ageInMonths, setAgeInMonths] = useState('');
  const [birdInfoVisible, setBirdInfoVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    birdImage: '',
    username: '',
    species: '',
    birthdate: '',
    gender: 'female',
    traits: []
  });
  const navigate = useNavigate();

  useEffect(() => {
    // mp-bird 데이터는 다시 손보기 
    const speciesList = ['사랑앵무', '왕관앵무', '모란앵무', '코카투'];
    const traitsList = ['활발함', '차분함', '귀여움', '정신없음'];
    setSpecies(speciesList);
    setTraits(traitsList);
  }, []);

  const handleDateChange = (e) => {
    const birthDate = new Date(e.target.value);
    const today = new Date();
    const months = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
    setAgeInMonths(`(${months}개월)`);
  };

  const handleTraitChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedTraits(selected);
    setFormValues(prevValues => ({ ...prevValues, traits: selected }));
  };

  const handleBirdChange = (e) => {
    const selectedBird = e.target.value;
    setBirdInfoVisible(true);
    if (selectedBird === '송송이') {
      setFormValues({
        birdImage: '',
        username: '송송이',
        species: 'budgerigar',
        birthdate: '2020-01-01',
        gender: 'female',
        traits: ['curious', 'active']
      });
      setAgeInMonths('(44개월)'); 
      setSelectedTraits(['curious', 'active']);
    }
  };

  const handleSubmit = () => {
    const { username, birthdate, gender, species, traits } = formValues;

    if (traits.length < 1 || traits.length > 3) {
      alert('성격은 1개 이상 3개 이하로 선택해주세요.');
      return;
    }

    navigate('/mp-first.html');
  };

  const handleDelete = () => {
    if (window.confirm('반려조를 정말 삭제하겠습니까?')) {
      alert('반려조가 삭제되었습니다.');
      navigate('/mp-first.html');
    }
  };

  return (
    <div>
      <header>
        <button onClick={() => window.history.back()}>뒤로가기</button>
        <h1>반려조 정보 수정하기</h1>
      </header>

      <main>
        <section className="title">
          <div>반려조를 선택해주세요.</div>
        </section>

        <section className="form">
          <article>
            <label htmlFor="selectBird">반려조 선택하기:</label>
            <select id="selectBird" name="selectBird" onChange={handleBirdChange}>
              <option value="송송이">송송이</option>
              <option value="솜솜이">솜솜이</option>
              <option value="다솜이">다솜이</option>
            </select>
          </article>

          {birdInfoVisible && (
            <div id="birdInfo">
              <section className="title">
                <div>반려조 정보를 수정해주세요.</div>
              </section>
              <article>
                <input
                  type="button"
                  id="delete"
                  value="반려조 삭제하기"
                  onClick={handleDelete}
                />
              </article>
              <section className="form">
                <form id="birdForm">
                  <article>
                    <label htmlFor="birdImage">사진 업로드:</label>
                    <input
                      type="file"
                      id="birdImage"
                      name="birdImage"
                      accept="image/*"
                      onChange={(e) => setFormValues({ ...formValues, birdImage: e.target.files[0] })}
                    />
                  </article>
                  <article>
                    <label htmlFor="username">이름:</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formValues.username}
                      onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
                    />
                  </article>
                  <article>
                    <label htmlFor="species">종:</label>
                    <select
                      id="species"
                      name="species"
                      value={formValues.species}
                      onChange={(e) => setFormValues({ ...formValues, species: e.target.value })}
                    >
                      {species.map(sp => (
                        <option key={sp} value={sp}>{sp}</option>
                      ))}
                    </select>
                  </article>
                  <article>
                    <label htmlFor="birthdate">생년월일:</label>
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      value={formValues.birthdate}
                      onChange={(e) => {
                        setFormValues({ ...formValues, birthdate: e.target.value });
                        handleDateChange(e);
                      }}
                    />
                    <span id="ageInMonths">{ageInMonths}</span>
                  </article>
                  <article>
                    <label htmlFor="gender">성별:</label>
                    <select
                      name="gender"
                      id="gender"
                      value={formValues.gender}
                      onChange={(e) => setFormValues({ ...formValues, gender: e.target.value })}
                    >
                      <option value="female">수컷</option>
                      <option value="male">암컷</option>
                      <option value="other">모름</option>
                    </select>
                  </article>
                  <article>
                    <label htmlFor="traits">성격:</label>
                    <div id="selected-traits">
                      {selectedTraits.map(trait => (
                        <span key={trait} className="selected-trait">{trait}</span>
                      ))}
                    </div>
                    <select
                      id="traits"
                      name="traits"
                      multiple
                      value={formValues.traits}
                      onChange={handleTraitChange}
                    >
                      {traits.map(trait => (
                        <option key={trait} value={trait}>{trait}</option>
                      ))}
                    </select>
                  </article>
                </form>
              </section>
              <section className="submit">
                <article>
                  <input
                    type="button"
                    id="submit"
                    value="수정 완료"
                    onClick={handleSubmit}
                  />
                </article>
              </section>
            </div>
          )}
        </section>
      </main>

      <footer className="navbar">
        <ul>
          <li><a href="../html/main-board.html"><img src="../data/img/icons/compass-solid.svg" alt="Home" /></a></li>
          <li><a href="../html/main-todo.html"><img src="../data/img/icons/list-check-solid-color.svg" alt="To-Do" /></a></li>
          <li><a href="../html/main.html"><img src="../data/img/icons/pen-nib-solid.svg" alt="Notes" /></a></li>
          <li><a href="../html/checker_info.html"><img src="../data/img/icons/stethoscope-solid.svg" alt="Health" /></a></li>
          <li><a href="../html/login.html"><img src="../data/img/icons/circle-user-solid.svg" alt="Profile" /></a></li>
        </ul>
      </footer>
    </div>
  );
};

export default BirdUpdatePage;
