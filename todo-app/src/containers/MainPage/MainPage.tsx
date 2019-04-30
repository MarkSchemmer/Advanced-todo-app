import React, { Component } from 'react';
import { TodoInput } from '../../components/TodoInput/TodoInput'
import { Todos } from '../MainPage/Todos'
import './css-scss/MainPage.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="main">
            <TodoInput />
            <Todos /> 
      </div>
    );
  }
}

export default App;
