import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodoTaskContainer from './components/AddTodo/AddTodoTaskContainer';
import TodoContainer from './components/Todo/TodoContainer';
import FiltersContainer from './components/Filters/FiltersContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddTodoTaskContainer />
        <TodoContainer />
        <FiltersContainer />
      </header>
    </div>
  );
}

export default App;
