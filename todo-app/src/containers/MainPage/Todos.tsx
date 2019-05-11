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

class TodosRaw extends React.PureComponent<any> {
    private listOfTodos: any
    constructor(props) {
        super(props)
        this.listOfTodos = listOfTodos()
    }

    todos = () => {

        return (
        <div>
            {Object.keys(this.props.todos || {} ).map( item => 
                    <Todo 
                        key={item}
                       {...this.props.todos[item]} /> 
                 ) }
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
        todos: state.TodosReducer.todos
    }
}

export const Todos = connect(
mapStateToProps,
null 
)(TodosRaw)