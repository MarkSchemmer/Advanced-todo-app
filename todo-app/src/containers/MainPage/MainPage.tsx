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
    },
    footer: {
      selectors: {
        '::before':{

        },
        '::after':{

        }
      }
    }
  })
}

class App extends React.PureComponent {
  render() {
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
    );
  }
}

export default App;
