import { createSimpleFunctional } from '../../util/helpers'

import ECard from './ECard'
import ECardMedia from './ECardMedia'

const ECardHeader = createSimpleFunctional('card-header');
const ECardBody = createSimpleFunctional('card-body');
const ECardFooter = createSimpleFunctional('card-footer');

export {ECard, ECardMedia, ECardHeader, ECardBody, ECardFooter}

ECard.install=function install(Vue){
  Vue.component(ECard.name,ECard);
  Vue.component(ECardMedia.name,ECardMedia);
  Vue.component(ECardHeader.name,ECardHeader);
  Vue.component(ECardBody.name,ECardBody);
  Vue.component(ECardFooter.name,ECardFooter);
};

export default ECard;
