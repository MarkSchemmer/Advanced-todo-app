import React from 'react'
import { connect } from 'react-redux';
import { Todo } from './Todo';
import deepEqual from 'deep-equal'
import { mergeStyleSets } from '@uifabric/merge-styles';
import { filterTodos } from '../../redux/reducers/TodosReducer'

const listOfTodos = () => {
    return mergeStyleSets({
        todos:{
            selectors:{
                ':nth-child(1)':{
                  //  border: 'none'
                }
            }
        }
    })
}

class TodosRaw extends React.PureComponent<any> {
  //  private listOfTodos: any
    constructor(props) {
        super(props)
    //    this.listOfTodos = listOfTodos()
    }

    todos = () => {
        console.log(this.props.todos)
        return (
        <ul className="list-group" style={{
            width: '100%'
        }}>
            { this.props.todos.map( ([key, value]:any) => 
                    <Todo 
                        key={key}
                       {...value} /> 
                 ) }
        </ul>
        )
    }


    render() {
        return (
            <>
                { this.todos() }
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
  //  debugger
    return {
        todos: filterTodos(state.TodosReducer) || []
    }
}

export const Todos = connect(
mapStateToProps,
null 
)(TodosRaw)