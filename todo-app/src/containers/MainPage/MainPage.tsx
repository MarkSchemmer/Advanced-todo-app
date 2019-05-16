import React, { Component } from 'react';
import { TodoInput } from '../../components/TodoInput/TodoInput'
import { Todos } from '../MainPage/Todos'
import { mergeStyleSets } from '@uifabric/merge-styles';
import { TodoFooter } from './TodoFooter/TodosFooter';

const mainStyles = () => {
  return mergeStyleSets({
    main: {
      margin:'auto',
      marginTop:'10%'
    }
  })
}

export const TodoMVC = (props) => {
  const { main } = mainStyles();
  return (
    <div className={main}>
    <div className="card">
      <div className="card-body">
          <TodoInput />
        </div>
      <Todos /> 
    </div>
      <div className="card-footer" style={{
        position:'relative',
        width:'445px',
        height:'35px'
      }}>
          <TodoFooter /> 
      </div>
  </div>
  )
}

class App extends React.PureComponent {
  render() {
      return (
        <>
          <TodoMVC /> 
        </>
      )
  }
}

export default App;
