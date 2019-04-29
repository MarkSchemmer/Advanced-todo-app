import { mergeStyleSets } from '@uifabric/merge-styles';
import { isAbsolute } from 'path';

/*

    position: absolute;
    width: 25%;
    top: 50%;
    left: 36%;

*/

export const getStylesForInput = () => {
    return mergeStyleSets({
        input: {
            padding:'10px',
            minWidth:'250px',
            position: 'absolute',
            width:'25%',
            top:'35%',
            left:'36%'
        }
    });
}