import React, { useState, useEffect } from 'react';
import '../assets/styles/journal.css'; 
import { ReactComponent as HeartLogo } from '../assets/images/heart-regular.svg';
import DefaultPfp from '../assets/images/circle-user-solid.svg';
import DefaultImage from '../assets/images/사랑앵무.jpg';

const JournalPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch post data
    fetch('/api/posts/1') // Update with your API endpoint
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
    
    // Fetch comments data
    fetch('/api/posts/1/comments') // Update with your API endpoint
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  const handleSubmit = () => {
    if (!newComment.trim()) {
      // Prevent submission if the comment is empty
      return;
    }

    fetch('/api/posts/1/comments', { // Update with your API endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newComment })
    })
      .then(response => response.json())
      .then(data => {
        console.log('New comment data:', data);
        setComments(prevComments => [...prevComments, data]);
        setNewComment('');
      })
      .catch(error => console.error('Error posting comment:', error));
  };

  const handleDeletePost = () => {
    if (window.confirm("정말 삭제하겠습니까?")) {
      fetch('/api/posts/1', { // Update with your API endpoint
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            alert("게시글이 삭제되었습니다.");
            // Redirect or handle post-deletion logic
            window.location.href = '/'; // Redirect to home or another page
          } else {
            throw new Error('Failed to delete the post');
          }
        })
        .catch(error => console.error('Error deleting post:', error));
    }
  };

  return (
    <div>
      <header>
        <button onClick={() => window.history.back()}>뒤로가기</button>
        <h1>자유게시판 <span>#질문</span></h1>
        <div><a href="/board-create">글쓰기</a></div>
      </header>
      <main>
        <section className="journal-layout">
          <section className="post-layout">
            <article className="journal-head">
              <div id="jtitle">{post.title || 'Loading...'}</div>
              <div id="jhead">
                <div id="jinfo">
                  <div id="jimg">
                    <img src={post.profileImage || DefaultPfp} alt="유저 프로필 사진" />
                  </div>
                  <div>
                    <ul>
                      <li id="jauthor">{post.author || 'Loading...'}</li>
                      <li id="jdate">{post.date || 'Loading...'}</li>
                    </ul>
                  </div>
                </div>
                <div className="ud">
                  <ul>
                    <li id="update-btn"><a href="./board-update">수정</a></li>
                    <li>|</li>
                    <li id="delete-btn"><a href="#" onClick={handleDeletePost}>삭제</a></li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="jcontent">
              <div><img id="jcontent-img" src={post.image || DefaultImage} alt="예시 사진" /></div>
              <div id="jcontent-text">{post.content || 'Loading...'}</div>
            </article>
            <article className="journal-tail">
              <div>
                <ul>
                  <li id="like-btn"><HeartLogo alt="좋아요 버튼" /></li>
                  <li>
                    <span>추천</span>
                    <span id="like-count">{post.likes || 0}</span>
                  </li>
                  <li>
                    <span>댓글</span>
                    <span id="com-count">{comments.length}</span>
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="comment-layout">
            {comments.map(comment => (
              <article key={comment.id} id="comment-item">
                <div>
                  <ul>
                    <li id="cimg"><img src={comment.profileImage || DefaultPfp} alt="유저 프로필 사진" /></li>
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
