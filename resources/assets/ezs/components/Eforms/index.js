import EInput from './EInput'
import ECheckbox from './ECheckbox'
import ERadios from './ERadios'
import ESelect from './ESelect'
import EFile from  './EFile'
import ESwitch from './ESwitch'
import ERadioGroup from './ERadioGroup'
import ERadio from './ERadio'
import EForm from './EForm'

export { ECheckbox }

const Eforms={};



Eforms.install=function (Vue){
    Vue.component(ECheckbox.name,ECheckbox);
    Vue.component(EInput.name,EInput);
    Vue.component(ERadios.name,ERadios);
    Vue.component(ERadio.name,ERadio);
    Vue.component(ERadioGroup.name,ERadioGroup);
    Vue.component(ESelect.name,ESelect);
    Vue.component(EFile.name,EFile);
    Vue.component(ESwitch.name,ESwitch);
    Vue.component(EForm.name,EForm);
};
export default Eforms