import React from 'react'
import { connect } from 'react-redux';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { updateFilterType, clearCompleted } from '../../../redux/actions-creators/action-creators';


/*

    div 1:
    position: absolute;
    height: 25px;
    width: 442px;
    z-index: 3;
    background: black


    div 2: 
    position: absolute;
    width: 442px;
    height: 10px;
    z-index: 2;
    bottom: 63.4%;
    background: green;

    div 3: 
    position: absolute;
    width: 442px;
    height: 10px;
    z-index: 1;
    bottom: 62.7%;
    background: pink;


    -webkit-box-shadow: 0px 4px 3px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 4px 3px -1px rgba(0,0,0,0.75);
box-shadow: 0px 4px 3px -1px rgba(0,0,0,0.75);

    div2
    position: absolute;
    left: 100px;
    height: 100%;
    left: 0;
    top: 6px;

*/

const getStylesForFooter = () => {
    const absolute = 'absolute'
    const width442 = '442px'
    const none = 'none'

    return mergeStyleSets({
        div1: {
            position: absolute,
            // height: '25px',
            width: '100%',
            zIndex: 3,
            opacity: 1,
          //  borderBottom: '1px solid black',
            background: '#efefef',
            padding: '10px',
            boxShadow: '0px 4px 3px -3px rgba(0,0,0,0.75)',
            left:0,
            top: 0,
            height: '100%'
        },
        div2: {
            position: absolute,
            height: '100%',
            width: '100%',
            zIndex: 2,
            left: 0,
            top: '6px',
           // margin:'auto',
           // bottom: '65%',
          //  borderBottom: '1px solid black',
           // background: 'green'
           boxShadow: '0px 4px 3px -3px rgba(0,0,0,0.75)'
        }, 
        div3: {
            position: absolute,
            width: '100%',
            height: '100%',
            left:0,
            top:'12px',
           // margin: 'auto',
            zIndex: 1,
          //  bottom: '64%',
            //borderBottom: '1px solid black',
            boxShadow: '0px 4px 3px -3px rgba(0,0,0,0.75)'
        //    background: 'pink'
        },
        items :{
            position: absolute,
            top: '20%',
            fontSize: '0.8em'
        },
        listDiv: {
            position: absolute,
            top: '20%',
            right: 0,
            fontSize: '0.9em'
        },
        ul: {
            listStyle: none,
            fontSize: '0.8em',
            position:'relative',
            right: '147px',
            selectors: {
                '& li': {
                    display: 'inline-block',
                    marginRight: '15px'
                },
                '& li:hover':{
                    cursor:'pointer'
                }
            } 
        },
        clearCompleted : {
            position: 'absolute',
            left: '70px',
            top:'-2px',
            selectors: {
                ':hover':{
                    cursor: 'pointer'
                }
            }
        }
    })
}

class TodoFooterRaw extends React.Component<any> {
    private getStyles: any 
    private borderStyle = '1px solid black'
    private none = 'none'
    constructor(props) {
        super(props)
        this.getStyles = getStylesForFooter() 
    }

    render() {
      const none = this.none
      const border = this.borderStyle
        return (
            <>
                <div className={`  ${this.getStyles.div1}`}> 
                        <div>
                                <div className={this.getStyles.items}>
                                   { this.props.len } Items left
                                </div>
                                <div className={this.getStyles.listDiv}>
                                    <ul className={this.getStyles.ul}>
                                        <li style={{
                                            border: this.props.filterType === 'All' ? border : none 
                                        }}
                                        onClick={() => this.props.updateFilterType('All') }
                                        >All</li>
                                        <li style={{
                                            border: this.props.filterType === 'Active' ? border : none 
                                        }}
                                        onClick={() => this.props.updateFilterType('Active')}>Active</li>
                                        <li style={{
                                            border: this.props.filterType === 'Completed' ? border : none 
                                        }}
                                        onClick={() => this.props.updateFilterType('Completed')}>Completed</li>

                         

                                    </ul>
                                    { this.props.completedIds.length>0 ? <div 
                                        onClick={() => this.props.clearCompleted() }
                                        className={ this.getStyles.clearCompleted }>
                                            clear completed
                                       </div> : null  }
                                </div>
                        </div>
                </div> 
                 <div className={`  ${this.getStyles.div2}`}> 
                </div>
                <div className={`  ${this.getStyles.div3}`}> 
                </div>
            </>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        len: Object.entries(state.TodosReducer.todos).filter( ([key, value]: any) => !value.completed ).length,
        filterType: state.TodosReducer.filterType,
        completedIds: state.TodosReducer.completedIds
    }
}

const mapDispatchToProps = {
    updateFilterType,
    clearCompleted
}

export const TodoFooter = connect(
mapStateToProps,
mapDispatchToProps
)(TodoFooterRaw)