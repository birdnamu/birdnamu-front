import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/styles/todo.css';

import Compass from '../assets/images/compass-solid.svg';
import ToDo from '../assets/images/list-check-solid.svg';
import Pen from '../assets/images/pen-nib-solid.svg';
import Checker from '../assets/images/stethoscope-solid.svg';
import Profile from '../assets/images/circle-user-solid.svg';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <main>
        <section className="container">
          <article className="title-container">
            <ul>
              <li className="picker">
                <label htmlFor="bird">
                  <div id="bird-icon">
                    <img src="../data/img/icons/bird-svgrepo-com.svg" alt="Bird Icon" />
                  </div>
                </label>
                <select name="bird" id="bird">
                  <option value="" disabled hidden selected>반려조 선택</option>
                  <option value="bird01">사랑</option>
                  <option value="bird02">초롱</option>
                </select>
              </li>
              <li className="picker">
                <label htmlFor="jdate">
                  <div id="calender-icon">
                    <img src="../data/img/icons/calendar-note-date-svgrepo-com.svg" alt="Calendar Icon" />
                  </div>
                </label>
                <input type="date" id="jdate" required />
              </li>
            </ul>
          </article>
          <article className="todo-container">
            <ul id="todo-list">
              {todos.map((todo, index) => (
                <li key={index} className="todo-item">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                  <span className={todo.completed ? 'task-content completed' : 'task-content'}>
                    {todo.text}
                  </span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
            <form id="todo-form" onSubmit={handleAddTodo}>
              <input
                type="text"
                id="todo-input"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="새로운 할 일 추가"
                required
              />
              <button type="submit">
                <img src="../data/img/icons/circle-pluc-solid.svg" alt="Add Icon" />
              </button>
            </form>
          </article>
        </section>
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
};

export default TodoPage;
