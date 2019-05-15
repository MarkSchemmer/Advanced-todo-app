import React from 'react'
import { todoStyles } from './Styles/MainPageStyles';
import { connect } from 'react-redux';
import { updateTodo } from '../../redux/actions-creators/action-creators';
import { XdeleteStyle } from './XdeleteSymbol';
import { mergeStyleSets } from '@uifabric/merge-styles';

const getStylesRedX = () => {
    
    return mergeStyleSets({
        RedX: {
            selectors: {
                ':hover': {
                    cursor: 'pointer'
                }
            }
        }
    })
}


class TodoEditableRaw extends React.Component<any> {
    
    private todoStyles: any 
    private getStylesRedX: any 
    
    constructor(props) {
        super(props)
        this.getStylesRedX = getStylesRedX()
        this.todoStyles = todoStyles()
    }

    updateTodo = e => {
        const newTodo = e.target.value
        const newTodoObj = {
            value: newTodo,
            id: this.props.id
        }
        if(newTodo.length < 30) {
            this.props.updateTodo(newTodoObj)
        }
    }

    render() {
        return (
            <>
               {/* <i className={` fas fa-times  ${this.getStylesRedX.RedX} `} style={{
                   color: 'red',
                   position: 'relative',
                   left:'85%'
               }}></i> */}
                <input 
                    autoFocus
                    className={ this.todoStyles.todo }
                    value={ this.props.value }
                    onChange={ this.updateTodo }
                    onKeyDown={ this.props.handleEnter }
                    onBlur={ this.props.handleBlur }
                    type="search" />
            </>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        handleEnter: ownProps.handleEnter,
        handleBlur: ownProps.handleBlur,
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