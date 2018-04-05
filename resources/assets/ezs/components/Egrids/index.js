import { createSimpleFunctional } from '../../util/helpers'
import EContainer from './EContainer'
import ECol from './ECol'
import ERow from './ERow'
import EDivider from './EDivider'

export const ESpacer = createSimpleFunctional('spacer');
export {
    EContainer,
    ECol,
    ERow
}

const EGrid = {};

EGrid.install = function install (Vue) {
    Vue.component(EContainer.name, EContainer);
    Vue.component(ECol.name, ECol);
    Vue.component(ERow.name, ERow);
    Vue.component(ESpacer.name, ESpacer);
    Vue.component(EDivider.name, EDivider)
};

export default EGrid
