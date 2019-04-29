import React from 'react'
import { connect } from 'react-redux'
import { getStylesForInput } from '../../containers/MainPage/MainPageInlineStyles'
import { newInput, createTodo } from '../../redux/actions-creators/action-creators'
class TodoInputRaw extends React.PureComponent<any> {

    constructor(props: any) {
        super(props)
    }

    handleEnter = e => {
        if(e.key==='Enter')
            this.props.createTodo(this.props.todoInputValue) 
    }

    render() {
        const { input } = getStylesForInput()
        return (
            <input 
            value={this.props.todoInputValue}
            onChange={e => this.props.newInput(e.target.value)}
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
    createTodo
};

export const TodoInput = connect(
mapStateToProps,
mapDispatchToProps
)(TodoInputRaw);