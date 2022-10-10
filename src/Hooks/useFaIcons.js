/* eslint-disable dot-notation */
import * as Fa from 'react-icons/fa';

function useFaIcons() {
    return (txt) => Fa[`${txt}`]();
}

export default useFaIcons;
