import React from 'react'
import { connect } from 'react-redux'
import deepEqual from 'deep-equal'
import { mergeStyleSets } from '@uifabric/merge-styles';
import { updateTodo } from '../../redux/actions-creators/action-creators';

interface IProps {
    todo: string;
    updateTodo: any 
    id: string 
}

const todoStyles = () => {
    const borderStyle = '1px solid rgba(0, 0, 0, 0.25)'
    const none = 'none'
    return mergeStyleSets({
        todo: {
            border: borderStyle,
            padding:'10px',
            fontSize:'1.4em',
            width: '100%',
            selectors: {
                ':nth-child(odd)':{
                    borderBottom:none,
                    borderTop:none
                },
                ':nth-child(1)':{
                    borderTop: none
                },
                ':last-child':{
                    borderBottom: borderStyle
                }
            }
        }
    })
}

class TodoRaw extends React.Component<IProps, any> {
    private todoStyles: any;
    constructor(props: IProps){
        super(props)
        this.todoStyles = todoStyles();
        this.state = {
            editable:false 
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.todo !== this.props.todo) {
            return true 
        } else if (this.state.editable !== nextState.editable) {
            return true 
        } else {
            return false 
        } 
    }

    doubleClickTodo = e => {
        this.setState( (prevState) => ({
            editable: !prevState.editable
        }))
    }

    InputOrDiv = () => {
        return !this.state.editable ? (
            <div
            onDoubleClick={this.doubleClickTodo} 
            className={this.todoStyles.todo}>
            {this.props.todo}
          </div>
          ) : (<input
                       onChange={e => this.props.updateTodo({
                           id: this.props.id,
                           value: e.target.value 
                       })}
                       className={this.todoStyles.todo}
                       value={this.props.todo} /> 
                    )
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


