import React from 'react'
import { connect } from 'react-redux'
import deepEqual from 'deep-equal'
import { mergeStyleSets } from '@uifabric/merge-styles';
import { updateTodo } from '../../redux/actions-creators/action-creators';

interface IProps {
    value: string;
    updateTodo: any 
    id: string 
}

const todoStyles = () => {
    const borderStyle = '1px solid rgba(0, 0, 0, 0.5)'
    const none = ' none '
    const important = ' !important '
    return mergeStyleSets({
        todo: {
           // flexDirection:'column',
            border: borderStyle,
            padding:'30px',
            fontSize:'1.4em',
            width: '100%',
            marginTop: '-1px',
            borderBottom: '0',
            selectors: {
                ':last-child':{
                    borderBottom: borderStyle
                },
                ':focus':{
                    outline: none + ' !important', 
                    border: borderStyle
                }
            }
        },
        TodoContainer: {
            display: 'flex'
        }
    })
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

    changeEditable = () => this.setState( (prevState) => ({ 
        editable: !prevState.editable
    }))

    handleEnter = e => {
        e.key === 'Enter' ? this.changeEditable() : null 
    }



    InputOrDiv = () => {
        return (
        <div className={this.todoStyles.TodoContainer}>
             { !this.state.editable ? <div
                onDoubleClick={this.doubleClickTodo}
                className={this.todoStyles.todo}>
                {this.props.value}
             </div> :  
                    <input 
                            autoFocus
                            className={this.todoStyles.todo}
                            value={this.props.value}
                            onChange={this.updateTodo}
                            onKeyDown={ this.handleEnter }
                            type="text" />  }  
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
    updateTodo
}
)(TodoRaw)


