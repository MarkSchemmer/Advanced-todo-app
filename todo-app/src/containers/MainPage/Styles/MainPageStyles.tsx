import { mergeStyleSets } from "@uifabric/merge-styles";
const none = ' none '
const important = ' !important '

export const todoStyles = () => {
    const borderStyle = '1px solid rgba(0, 0, 0, 0.5)'
    const none = 'none'
    return mergeStyleSets({
        todo: {
           // flexDirection:'column',
           position: 'relative',
            border: none,
            padding:'30px',
            fontSize:'1.4em',
            width: '402px',
            marginTop: '-1px',
            zIndex: 10,
           // borderBottom: '0',
            selectors: {
                // ':last-child':{
                //     borderBottom: borderStyle
                // },
                ':focus':{
                    outline: none + ' !important', 
                    //border: none
                }
            }
        },
        TodoContainer: {
            display: 'flex'
        }
    })
}