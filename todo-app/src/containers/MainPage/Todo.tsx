import React from 'react'
import { connect } from 'react-redux'
import { getStylesForTodoBox } from './MainPageInlineStyles';
import deepEqual from 'deep-equal'

class TodoRaw extends React.Component<any> {
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(nextProps) {
        console.log('nextProps Todo', nextProps);
        if(nextProps.todo !== this.props.todo) {
            return true 
        } else {
            return false 
        } 
    }

    render() {
        const { div } = getStylesForTodoBox()
        return (
            <>
              <div className={div}>
                {this.props.todo}
              </div>
            </>
        )
    }
}

export const Todo = connect(
null,
null
)(TodoRaw)


