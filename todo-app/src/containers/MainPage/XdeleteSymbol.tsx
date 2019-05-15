import React from 'react'
import { mergeStyleSets } from '@uifabric/merge-styles';


const getXdeleteStyles = () => {
    const red = 'red'
    return mergeStyleSets({
        XStyle : {
            color: red, 
            position: 'absolute',
            width: '25px',
            height: '25px',
            left: '85%',
            top: '42%',
            zIndex:80
        },
        xContainer: {
            // position: 'absolute',
            // width: '100%',
            // height: '100%'
            selectors: {
                ':hover':{
                    cursor:'pointer'
                }
            }
        }
    })
}
export class XdeleteStyle extends React.Component<any> {
    private xDeleteStyles: any 
    constructor(props) {
        super(props)
        this.xDeleteStyles = getXdeleteStyles()
    }   

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        const item = <i className={`fas fa-minus-circle ${this.xDeleteStyles.XStyle}`}></i> as any   
        return (
            <div className={this.xDeleteStyles.xContainer} style={{
                visibility: this.props.canSee ? 'visible' : 'hidden'
            }} 
            onClick={this.props.handleDelete}
            >
                { item }
            </div>
        )
    }
}

