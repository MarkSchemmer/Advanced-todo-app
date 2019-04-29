import React, { Component } from 'react';
import { TodoInput } from '../../components/TodoInput/TodoInput'
import './css-scss/MainPage.css';

class App extends Component {
  render() {
    return (
      <div className="main">
            <TodoInput />
      </div>
    );
  }
}

export default App;
