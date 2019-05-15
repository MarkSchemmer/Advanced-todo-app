import React from 'react'
import { todoStyles } from '../MainPage/Styles/MainPageStyles'

import { connect } from 'react-redux';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { XdeleteStyle } from './XdeleteSymbol';


interface Props {
    value: string 
    doubleClickTodo: () => void 
}

const getStyles  = () => {
    const red = 'red'
    return mergeStyleSets({
        XStyle : {
            color: red, 
            position: 'absolute',
            left: '85%',
            top: '32%'
        },

        xContainer: {
            position: 'absolute',
            width: '100%',
            height: '100%'
        }
    })
}

class TodoNotEditableRaw extends React.Component<any> {
    private todoStyles: any
    private getStylesX: any 
    constructor(props: any){
        super(props)
        this.todoStyles = todoStyles()
        this.getStylesX = getStyles()
    }

    componentDidCatch(error, info) {
        console.log(error, info) 
    }

    render() {
        return (
          <>  
            <div
                onDoubleClick={this.props.doubleClickTodo}
                className={this.todoStyles.todo}
                style={{
                    textDecorationLine: this.props.completed ? 'line-through' : '',
                    opacity: this.props.completed ? 0.6: 1
                }}>
                {this.props.value}
            </div>
          </>
        )
    }
}



const mapStateToProps = (state:any, ownProps: any) => {
    return { 
        value: ownProps.value,
        doubleClickTodo: ownProps.doubleClickTodo,
        completed: ownProps.completed 
    } 
}

const mapDispatchToProps = {

}

export const TodoNotEditable = connect(
mapStateToProps, 
mapDispatchToProps
)(TodoNotEditableRaw)