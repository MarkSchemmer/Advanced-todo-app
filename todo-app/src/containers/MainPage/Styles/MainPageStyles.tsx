import { mergeStyleSets } from "@uifabric/merge-styles";
const none = ' none '
const important = ' !important '

export const todoStyles = () => {
    const borderStyle = '1px solid rgba(0, 0, 0, 0.5)'
    return mergeStyleSets({
        todo: {
           // flexDirection:'column',
            border: borderStyle,
            padding:'30px',
            fontSize:'1.4em',
            width: '100%',
            marginTop: '-1px',
            borderBottom: '0',
            selectors: {
                ':last-child':{
                    borderBottom: borderStyle
                },
                ':focus':{
                    outline: none + ' !important', 
                    border: borderStyle
                }
            }
        },
        TodoContainer: {
            display: 'flex'
        }
    })
}