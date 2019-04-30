import React from 'react'
import { connect } from 'react-redux'
import { getStylesForInput } from '../../containers/MainPage/MainPageInlineStyles'
import { newInput, createTodo, clearInputTodo } from '../../redux/actions-creators/action-creators'
class TodoInputRaw extends React.Component<any> {

    constructor(props: any) {
        super(props)
    }

    handleEnter = e => {
        if(e.key==='Enter') {
            this.props.createTodo(this.props.todoInputValue) 
            this.props.clearInputTodo()
        }
           
    }

    newInputWrapper = e => {
        if(e.length < 20)
            this.props.newInput(e)
    }

    render() {
        const { input } = getStylesForInput()
        return (
            <input 
            value={this.props.todoInputValue}
            onChange={e => this.newInputWrapper(e.target.value)}
            onKeyDown={this.handleEnter}
            className={input}
            type='text'
            placeholder='Please Enter Todo:' />
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        todoInputValue: state.TodoInputReducer.todoValue
    }
}


const mapDispatchToProps = {
    newInput,
    createTodo,
    clearInputTodo
};

export const TodoInput = connect(
mapStateToProps,
mapDispatchToProps
)(TodoInputRaw);