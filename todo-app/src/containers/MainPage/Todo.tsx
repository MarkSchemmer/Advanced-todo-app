import React from 'react'
import { connect } from 'react-redux'
import deepEqual from 'deep-equal'
import { mergeStyleSets } from '@uifabric/merge-styles';

interface IProps {
    todo: string;
}

const todoStyles = () => {
    const borderStyle = '1px solid rgba(0, 0, 0, 0.25)'
    const none = 'none'
    return mergeStyleSets({
        todo: {
            border: borderStyle,
            padding:'10px',
            fontSize:'1.4em',
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

class TodoRaw extends React.Component<IProps> {
    private todoStyles: any;
    constructor(props: IProps){
        super(props)
        this.todoStyles = todoStyles();
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.todo !== this.props.todo) {
            return true 
        } else {
            return false 
        } 
    }

    render() {
        return (
            <>
              <div className={this.todoStyles.todo}>
                {this.props.todo}
              </div>
            </>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        todo: ownProps.todo 
    }
}

export const Todo = connect(
mapStateToProps,
null
)(TodoRaw)


