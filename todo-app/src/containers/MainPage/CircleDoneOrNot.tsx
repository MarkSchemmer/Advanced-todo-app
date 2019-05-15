import React from 'react'
import { mergeStyleSets } from '@uifabric/merge-styles';
import { connect } from 'react-redux';
import { updateTodo } from '../../redux/actions-creators/action-creators';


interface Props {
    completed: boolean
    handleCompleted: any
    editable: boolean
}

const stylesForCircleOrDone = () => {
    return mergeStyleSets({
        CircleContainer: {
            position: 'absolute',
            top: '41%',
            zIndex:60
        }
    });
}

class CircleDoneOrNotRaw extends React.Component<Props> {
    private getClasses: any 
    constructor(props: Props) {
        super(props)
        this.getClasses = stylesForCircleOrDone()
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }


    // will have to implement wrapper for changing completed to not ... 


    render() {
        const openCircle = <i className="far fa-circle"></i> as any 
        const circlCheck = <i className="far fa-check-circle" style={{
            color: 'green'
        }}></i> as any 
        const symbol = this.props.completed ? circlCheck : openCircle
        const { CircleContainer } = this.getClasses
        return (
            <div className={CircleContainer} onClick={ this.props.handleCompleted } style={{
                opacity: this.props.editable ? 0.1 : 1 
            }}>
                { symbol }
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        completed: ownProps.completed,
        handleCompleted: ownProps.handleCompleted,
        editable: ownProps.editable
    }
}

const mapDispatchToProps = {
    updateTodo
}

export const CircleDoneOrNot = connect(
    mapStateToProps,
    mapDispatchToProps
)(CircleDoneOrNotRaw)
