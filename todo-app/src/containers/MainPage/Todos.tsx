import React from 'react'
import { connect } from 'react-redux';
import { Todo } from './Todo';
import deepEqual from 'deep-equal'


class TodosRaw extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        console.log(nextProps)
        return JSON.stringify(nextProps.todos) !== JSON.stringify(this.props.todos)
    }

    todos = () => {
        return (
            this.props.todos.map( (item, key) => 
            <Todo
                 key={key}  
                 todo={item} /> 
         ) 
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