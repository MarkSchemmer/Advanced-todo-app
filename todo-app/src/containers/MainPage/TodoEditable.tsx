import React from 'react'
import { todoStyles } from './Styles/MainPageStyles';
import { connect } from 'react-redux';
import { updateTodo } from '../../redux/actions-creators/action-creators';


class TodoEditableRaw extends React.Component<any> {
    
    private todoStyles: any 
    
    constructor(props) {
        super(props)
        this.todoStyles = todoStyles()
    }

    updateTodo = e => {
        const newTodo = e.target.value
        const newTodoObj = {
            value: newTodo,
            id: this.props.id
        }
        if(newTodo.length < 20) {
            this.props.updateTodo(newTodoObj)

            

        }
    }

    render() {
        return (
            <input 
                autoFocus
                className={ this.todoStyles.todo }
                value={ this.props.value }
                onChange={ this.updateTodo }
                onKeyDown={ this.props.handleEnter }
                type="text" /> 
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        handleEnter: ownProps.handleEnter,
        value: ownProps.value,
        id: ownProps.id 
    }
}

export const TodoEditable = connect(
mapStateToProps,
{
    updateTodo
}
)(TodoEditableRaw)