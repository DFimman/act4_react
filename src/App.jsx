import { useState } from 'react';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine, RiDeleteBinLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="todo-item">
      <span onClick={() => onToggle(todo.id)}>
        {todo.completed ? <RiCheckboxCircleLine /> : <RiCheckboxBlankCircleLine />}
      </span>
      <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
      <span onClick={() => onDelete(todo.id)} className="delete-icon">
        <RiDeleteBinLine />
      </span>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="todo-container">
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo}>Addfafsaf</button>
        </div>
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggle={toggleTodo} />
          ))}
        </div>
      </div>
    </div>
  );

};

export default App;