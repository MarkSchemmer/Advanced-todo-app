import React from 'react'
import { todoStyles } from '../MainPage/Styles/MainPageStyles'
import { connect } from 'react-redux';

interface Props {
    value: string 
    doubleClickTodo: () => void 
}

class TodoNotEditableRaw extends React.Component<Props> {
    private todoStyles: any
    constructor(props: Props){
        super(props)
        this.todoStyles = todoStyles()
    }

    render() {
        return (
        <div
            onDoubleClick={this.props.doubleClickTodo}
            className={this.todoStyles.todo}>
            {this.props.value}
        </div> 
        )
    }
}

const mapStateToProps = (state:any, ownProps: any) => {
    return { 
        value: ownProps.value,
        doubleClickTodo: ownProps.doubleClickTodo
    } 
}

const mapDispatchToProps = {

}

export const TodoNotEditable = connect(
mapStateToProps, 
mapDispatchToProps
)(TodoNotEditableRaw)