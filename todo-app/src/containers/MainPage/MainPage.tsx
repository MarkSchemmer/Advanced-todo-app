import React, { Component } from 'react';
import { TodoInput } from '../../components/TodoInput/TodoInput'
import { Todos } from '../MainPage/Todos'
import { mergeStyleSets } from '@uifabric/merge-styles';

const mainStyles = () => {
  return mergeStyleSets({
    main: {
      margin:'auto',
      marginTop:'10%'
    }
  })
}

class App extends React.PureComponent {
  render() {
    const { main } = mainStyles();
    return (
      <div className={main}>
            <TodoInput />
            <Todos /> 
      </div>
    );
  }
}

export default App;
