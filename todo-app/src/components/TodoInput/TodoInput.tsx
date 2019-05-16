import React from 'react'
import { connect } from 'react-redux'
import { newInput, createTodo, clearInputTodo } from '../../redux/actions-creators/action-creators'
import { mergeStyleSets } from '@uifabric/merge-styles';

const inputStyles = () => {
    const none = 'none'
    return mergeStyleSets({
       input : {
        width:'400px',
        fontSize:'1.4em',
        border: none,
        selectors : {
            ':focus':{
                border: none,
                outline: none  
            }
        }
       }
    })
}

class TodoInputRaw extends React.PureComponent<any> {

    private inputStyles: any;
    constructor(props: any) {
        super(props)
        this.inputStyles = inputStyles();
    }

    handleEnter = e => {
        if(e.key==='Enter'&&e.target.value.length>1) {
             this.props.createTodo(this.props.todoInputValue) 
            this.props.clearInputTodo()
        }    
    }

    newInputWrapper = e => {
        e = e.target.value 
        if(e.length < 30)
            this.props.newInput(e)
    }

    render() {
        return (
            <input 
                value={ this.props.todoInputValue }
                onChange={ this.newInputWrapper }
                onKeyDown={ this.handleEnter }
                className={ this.inputStyles.input }
                placeholder='Please Enter Todo:' />
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        todoInputValue: state.todoInputValueReducer.todoInputValue
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