import React from 'react';
import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import logo from '../../assets/logo.svg';
import './App.css';

const App = () => (
  <div>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
