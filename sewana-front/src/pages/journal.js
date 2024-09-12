import React, { useState } from 'react';
import '../assets/styles/journal.css';

const JournalPage = () => {
  const [comments, setComments] = useState([
    { id: 1, author: '유저닉네임', content: '너무 귀여워요.<br>앞으로 사랑이와 함께 행복한 추억 많이 만드시길 바랍니다.', date: '2024년 00월 00일' },
    { id: 2, author: '유저닉네임2', content: '22222222<br>앞으로 사랑이와 함께 행복한 추억 많이 만드시길 바랍니다.', date: '2024년 00월 00일' }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim()) {
      const newComments = [...comments, {
        id: comments.length + 1,
        author: '새 유저닉네임',
        content: newComment,
        date: new Date().toLocaleDateString('ko-KR'),
      }];
      setComments(newComments);
      setNewComment('');
    }
  };

  return (
    <div>
      <header>
        <button onClick={() => window.history.back()}>뒤로가기</button>
        <h1><span>사랑</span>이의 성장일지</h1>
        <div><a href="./journal-create.html">글쓰기</a></div>
      </header>
      <main>
        <section className="journal-layout">
          <section className="post-layout">
            <article className="journal-head">
              <div id="jtitle">사랑이 입양 D-Day</div>
              <div id="jhead">
                <div id="jinfo">
                  <div id="jimg">
                    <img src="../data/img/사랑앵무.jpg" alt="유저 프로필 사진" />
                  </div>
                  <div>
                    <ul>
                      <li id="jauthor">유저닉네임</li>
                      <li id="jdate">2024년 00월 00일</li>
                    </ul>
                  </div>
                </div>
                <div className="ud">
                  <ul>
                    <li id="update-btn"><a href="./journal-update.html">수정</a></li>
                    <li>|</li>
                    <li id="delete-btn"><a href="#">삭제</a></li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="jcontent">
              <div><img id="jcontent-img" src="../data/img/사랑앵무.jpg" alt="예시 사진" /></div>
              <div id="jcontent-text">사랑이가 우리집에 처음 온 날이다.<br />앞으로 즐거운 추억 많이 쌓자!!</div>
            </article>
            <article className="journal-tail">
              <div>
                <ul>
                  <li id="like-btn"><img src="../data/img/icons/heart-regular.svg" alt="좋아요 버튼" /></li>
                  <li>
                    <span>공감</span>
                    <span id="like-count">10</span>
                  </li>
                  <li>
                    <span>댓글</span>
                    <span id="com-count">10</span>
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="comment-layout">
            {comments.map(comment => (
              <article key={comment.id} className="comment-item">
                <div>
                  <ul>
                    <li id="cimg"><img src="../data/img/사랑앵무.jpg" alt="유저 프로필 사진" /></li>
                    <li id="cauthor">{comment.author}</li>
                  </ul>
                </div>
                <div id="ccontent" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
                <div id="cdate">{comment.date}</div>
              </article>
            ))}
          </section>
        </section>

        <section className="comment-form">
          <article>
            <ul>
              <li>
                <label htmlFor="comment"></label>
                <input 
                  type="text" 
                  id="comment" 
                  name="comment" 
                  placeholder="댓글을 입력하세요..." 
                  value={newComment}
                  onChange={handleCommentChange}
                />
              </li>
              <li>
                <label htmlFor="submit"></label>
                <input 
                  type="button" 
                  id="submit" 
                  value="등록" 
                  onClick={handleSubmit}
                />
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
};

export default JournalPage;
