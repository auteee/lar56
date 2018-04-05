import EInput from './EInput'

export default {
    name:'e-file',
    components:{ EInput},
    data(){
        return{
            fileName:''
        }
    },
    props:{
        inputC:{},      //inputConfig input-props
        multiple:Boolean,
    },
    computed:{
        classes(){
            const classes={
                'form-group file': true,
                'disabled':this.disabled,
            };
            return classes;
        }
    },
    methods:{
        genInput(){
            const data={
                props:{
                    prependIcon:'ion-android-attach',
                    prependIconCb:this.openPicker,
                    placeholder: '请选择文件',
                    readonly: true,
                    value:this.fileName
                },
                on:{
                    focus:this.openPicker,
                    click:this.openPicker
                }
            };
            if(this.inputC){
                // for(let k in this.inputC){
                //     data.props[k]=this.inputC[k]
                // }
                data.props=Object.assign({},data.props,this.inputC);
            }
            return this.$createElement('e-input',data);
        },
        genFile(){
            const data= {
                staticClass:'file-input',
                attrs: {
                    ...this.$attrs,
                    type: 'file',
                    multiple:this.multiple
                },
                on:{
                    change: this.onChange
                },
                ref:'inputFile'
            };
            return this.$createElement('input',data);
        },
        onChange (e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files) {
                this.fileName= e.target.value.split('\\').pop()
            }
            if (files.length > 1) {
                this.fileName= this.getMultipleName(files)
            }
            if (files.length === 1) {
                this.fileName=files[0].name
            }
            this.$emit('change', files || e.target.value)
        },
        getMultipleName (files) {
            let names = [];

            [...files].forEach(({ name }) => names.push(name));

            return names.join(', ')
        },
        openPicker () {
            //this.onFocus();
            this.$refs.inputFile.click()
        },
    },
    render(h){
        const data={
            'class':this.classes,
        };
        return h('div',data,[this.genInput(),this.genFile()]);
    }
}