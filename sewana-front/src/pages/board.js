import React, { useState } from 'react';
import '../assets/styles/journal.css'; //이게 맞는 css 파일인지 확인 필요
function FreeBoard() {
  const [likeCount, setLikeCount] = useState(1);
  const [commentCount, setCommentCount] = useState(1);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: '험난한앵집사의하루',
      content: '병원에서 물어보시는 게 빠를 것 같은데, 코뉴어앵무라면 3개월 정도 기다리시면 확실히 아실 수 있을 것 같아요.',
      date: '2024년 00월 00일',
      likes: 5,
    },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        id: comments.length + 1,
        author: '새로운 유저', 
        content: newComment,
        date: '2024년 00월 00일',
        likes: 0,
      };
      setComments([...comments, newCommentObj]);
      setCommentCount(commentCount + 1);
      setNewComment('');
    }
  };

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div>
      <header>
        <button onClick={handleBack}>뒤로가기</button>
        <h1>자유게시판 <span>#질문</span></h1>
        <div><a href="./board-create.html">글쓰기</a></div>
      </header>
      <main>
        <section className="journal-layout">
          <section className="post-layout">
            <article className="journal-head">
              <div id="jtitle">성별은 언제쯤 알 수 있나요?</div>
              <div id="jhead">
                <div id="jinfo">
                  <div id="jimg"><img src="../data/img/사랑앵무.jpg" alt="유저 프로필 사진" /></div>
                  <div>
                    <ul>
                      <li id="jauthor">유저닉네임</li>
                      <li id="jdate">2024년 00월 00일</li>
                    </ul>
                  </div>
                </div>
                <div className="ud">
                  <ul>
                    <li id="update-btn"><a href="./board-update.html">수정</a></li>
                    <li>|</li>
                    <li id="delete-btn"><a href="">삭제</a></li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="jcontent">
              <div><img id="jcontent-img" src="../data/img/사랑앵무.jpg" alt="예시 사진" /></div>
              <div id="jcontent-text">집사 된 지 3일차 초보집사입니다!
                블루코뉴어 아가를 데려왔는데요.. 동물병원에서는
                암컷인지 수컷인지 조금 더 커봐야 알 수 있다고 하는데,
                언제쯤 알 수 있나요?</div>
            </article>
            <article className="journal-tail">
              <div>
                <ul>
                  <li id="like-btn" onClick={handleLike}><img src="../data/img/icons/heart-regular.svg" alt="좋아요 버튼" /></li>
                  <li>
                    <span>추천</span>
                    <span id="like-count">{likeCount}</span>
                  </li>
                  <li>
                    <span>댓글</span>
                    <span id="com-count">{commentCount}</span>
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="comment-layout">
            {comments.map(comment => (
              <article id="comment-item" key={comment.id}>
                <div>
                  <ul>
                    <li id="cimg"><img src="../data/img/사랑앵무.jpg" alt="유저 프로필 사진" /></li>
                    <li id="cauthor">{comment.author}</li>
                  </ul>
                </div>
                <div id="ccontent">{comment.content}</div>
                <div id="cdate">{comment.date} 추천 {comment.likes}</div>
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
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="submit"></label>
                <input type="button" id="submit" value="등록" onClick={handleSubmit} />
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default FreeBoard;
