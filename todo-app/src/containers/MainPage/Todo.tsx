import React from 'react'
import { connect } from 'react-redux'
import deepEqual from 'deep-equal'
import { mergeStyleSets } from '@uifabric/merge-styles';
import { updateTodo, deleteTodoById } from '../../redux/actions-creators/action-creators';
import { todoStyles } from './Styles/MainPageStyles';
import { TodoNotEditable } from './TodoNotEditable';
import { TodoEditable } from './TodoEditable';
import { XdeleteStyle } from './XdeleteSymbol';
import { CircleDoneOrNot } from './CircleDoneOrNot';

interface IProps {
    value: string;
    updateTodo: any 
    id: string 
    completed: boolean
    deleteTodoById: any  
}



class TodoRaw extends React.PureComponent<IProps, any> {
    private todoStyles: any
    private todoRef: any

    constructor(props: IProps){
        super(props)
        this.todoStyles = todoStyles();
        this.state = {
            editable:false,
            canSee: false
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
        if(!this.state.editable) {
            if(this.props.value.length===0) {
                this.props.deleteTodoById(this.props.id)
            }
        }
    })

    handleEnter = e => {
        e.key === 'Enter' ? this.changeEditable() : null 
    }

    handleBlur = e => {
        this.changeEditable()
    }

    handleMouseEvent = val => {
        this.setState(prevState => ({
            canSee: val  
        }))
    }

    handleCompleted = () => {
        this.props.updateTodo({
            id: this.props.id,
            completed: !this.props.completed
        })
    }

    handleDeleteById = () => 
        this.props.deleteTodoById(this.props.id)
    

    renderTodo = () => {
        const canSee = this.state.editable===true ? 
                                            false : 
                                            this.state.canSee
       return (  
        <li className=" list-group-item " 
        onMouseEnter={ () => this.handleMouseEvent(true) }
        onMouseLeave={ () => this.handleMouseEvent(false) }
        >
                <CircleDoneOrNot
                        editable={ this.state.editable }
                        handleCompleted={this.handleCompleted} 
                        completed={this.props.completed} /> 
              <XdeleteStyle canSee={ canSee } handleDelete={ this.handleDeleteById } /> 
            { !this.state.editable ?
                <TodoNotEditable 
                    completed={ this.props.completed }
                    doubleClickTodo={ this.doubleClickTodo }
                    value={ this.props.value }  /> 
            :  
            <TodoEditable 
                completed={ this.props.completed }
                handleBlur={ this.handleBlur }
                handleEnter={ this.handleEnter } 
                value={ this.props.value } 
                id={ this.props.id } /> } 
        </li> 
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


