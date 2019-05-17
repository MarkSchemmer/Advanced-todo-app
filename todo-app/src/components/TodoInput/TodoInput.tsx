import React from 'react'
import { connect } from 'react-redux'
import { newInput, createTodo, clearInputTodo, toggleAllTodosClick } from '../../redux/actions-creators/action-creators'
import { mergeStyleSets } from '@uifabric/merge-styles';

const inputStyles = () => {
    const none = 'none'
    return mergeStyleSets({
       input : {
        position: 'relative',
        left: '20px',
        width:'387px',
        fontSize:'1.4em',
        border: none,
        selectors : {
            ':focus':{
                border: none,
                outline: none  
            }
        }
       },
       downArrow: {
           selectors: {
               ':hover':{
                   cursor: 'pointer'
               }
           }
       }
    })
}

const DownArrow = (props) => {

    const { downArrow } = inputStyles()

    return (
        <i 
        className={`fas fa-chevron-down  ${ downArrow }`}
        onClick={props.handleToggleAll}
        style={{
            opacity: props.toggledAll ? 1 : 0.1
        }}></i>
    )
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

    handleToggleAll = e => {
        this.props.toggleAllTodosClick()
    }

    newInputWrapper = e => {
        e = e.target.value 
        if(e.length < 30)
            this.props.newInput(e)
    }

    render() {
        return (
        <div>
            <DownArrow 
                handleToggleAll={this.handleToggleAll}
                toggledAll={this.props.toggledAll} /> 
            <input 
                value={ this.props.todoInputValue }
                onChange={ this.newInputWrapper }
                onKeyDown={ this.handleEnter }
                className={ this.inputStyles.input }
                placeholder='Please Enter Todo:' />
        </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        todoInputValue: state.todoInputValueReducer.todoInputValue,
        toggledAll: state.TodosReducer.toggledAll
    }
}


const mapDispatchToProps = {
    newInput,
    createTodo,
    clearInputTodo,
    toggleAllTodosClick
}

export const TodoInput = connect(
mapStateToProps,
mapDispatchToProps
)(TodoInputRaw)