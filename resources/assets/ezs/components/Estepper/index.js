import { createSimpleFunctional } from '../../util/helpers'
import EStepper from './EStepper'
import EStepNav from './EStepNav'
import EStepContent from './EStepContent'

const EStepHeader = createSimpleFunctional('step-header');
const EStepBody = createSimpleFunctional('step-body');

EStepper.install=function install(Vue) {
    Vue.component(EStepper.name,EStepper);
    Vue.component(EStepHeader.name,EStepHeader);
    Vue.component(EStepNav.name,EStepNav);
    Vue.component(EStepBody.name,EStepBody);
    Vue.component(EStepContent.name,EStepContent);
};

export default EStepper