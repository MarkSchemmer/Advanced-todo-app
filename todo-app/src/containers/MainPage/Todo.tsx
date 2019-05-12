import React from 'react'
import { connect } from 'react-redux'
import deepEqual from 'deep-equal'
import { mergeStyleSets } from '@uifabric/merge-styles';
import { updateTodo, deleteTodoById } from '../../redux/actions-creators/action-creators';
import { todoStyles } from './Styles/MainPageStyles';
import { TodoNotEditable } from './TodoNotEditable';
import { TodoEditable } from './TodoEditable';

interface IProps {
    value: string;
    updateTodo: any 
    id: string 
    deleteTodoById: any  
}



class TodoRaw extends React.PureComponent<IProps, any> {
    private todoStyles: any
    private todoRef: any

    constructor(props: IProps){
        super(props)
        this.todoStyles = todoStyles();
        this.state = {
            editable:false 
        }
    }

    doubleClickTodo = e => {
        this.setState( (prevState) => {
           return { 
               editable: !prevState.editable
           }
        })
    }

 

    changeEditable = () => this.setState( prevState => ({ 
        editable: !prevState.editable
    }), () => {
        console.log(this.props.value)
        debugger
        if(!this.state.editable) {
            
                if(this.props.value.length===0) {
                    debugger
                    this.props.deleteTodoById(this.props.id)
                }
        }
    })

    handleEnter = e => {
        e.key === 'Enter' ? this.changeEditable() : null 
    }

    renderTodo = () => {
       return (  !this.state.editable ?
            <TodoNotEditable 
            doubleClickTodo={ this.doubleClickTodo }
            value={ this.props.value }  /> 
         :  <TodoEditable handleEnter={ this.handleEnter } value={this.props.value} id={this.props.id} /> 
  ) 
    }


    InputOrDiv = () => {
        return (
        <div className={this.todoStyles.TodoContainer}>
            { this.renderTodo() }
        </div> )
    }

    render() {
        return this.InputOrDiv()
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        todo: ownProps.todo 
    }
}

export const Todo = connect(
mapStateToProps,
{
    updateTodo,
    deleteTodoById
}
)(TodoRaw)


