import React from 'react'
import { connect } from 'react-redux';
import { Todo } from './Todo';
import deepEqual from 'deep-equal'
import { mergeStyleSets } from '@uifabric/merge-styles';

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

class TodosRaw extends React.Component<any> {
    private listOfTodos: any
    constructor(props) {
        super(props)
        this.listOfTodos = listOfTodos()
    }

    shouldComponentUpdate(nextProps) {
        return (JSON.stringify(nextProps.todos) !== JSON.stringify(this.props.todos))
    }

    todos = () => {
        return (
        <div>
            {this.props.todos.map( (item, key) => 
            <Todo
                 key={key}  
                 todo={item} /> 
            )}
         </div> 
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
    return {
        todos: state.TodoInputReducer.todos
    }
}

export const Todos = connect(
mapStateToProps,
null 
)(TodosRaw)