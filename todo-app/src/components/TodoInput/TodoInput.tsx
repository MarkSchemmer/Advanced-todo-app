import React from 'react'
import { connect } from 'react-redux'
import { newInput, createTodo, clearInputTodo } from '../../redux/actions-creators/action-creators'
import { mergeStyleSets } from '@uifabric/merge-styles';

/*
    padding: 10px;
    width: 400px;
    font-size: 1.4em;
    font-family: monospace;
*/


const inputStyles = () => {
    return mergeStyleSets({
       input : {
        padding:'10px',
        width:'400px',
        fontSize:'1.4em'
       }
    })
}

class TodoInputRaw extends React.Component<any> {

    private inputStyles: any;
    constructor(props: any) {
        super(props)
        this.inputStyles = inputStyles();
    }

    shouldComponentUpdate(nextProps) {
       return nextProps.todoInputValue !== this.props.todoInputValue
    }

    handleEnter = e => {
        if(e.key==='Enter'&&e.target.value.length>1) {
            this.props.createTodo(this.props.todoInputValue) 
            this.props.clearInputTodo()
        }
           
    }

    newInputWrapper = e => {
        if(e.length < 20)
            this.props.newInput(e)
    }

    render() {
        return (
            <div>
                <input 
                value={this.props.todoInputValue}
                onChange={e => this.newInputWrapper(e.target.value)}
                onKeyDown={this.handleEnter}
                type='text'
                className={this.inputStyles.input}
                placeholder='Please Enter Todo:' />
            </div>
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
}

export const TodoInput = connect(
mapStateToProps,
mapDispatchToProps
)(TodoInputRaw)