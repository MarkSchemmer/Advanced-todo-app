import { mergeStyleSets } from '@uifabric/merge-styles';

export const getStylesForTodo = () => {
    return mergeStyleSets({
        div: {
            color:'yellow'
        }
    })
}