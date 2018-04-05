import markdown from './mixins/markdown'
export default {
    name:'e-markdown-it',
    mixins:[ markdown ],
    props:{
        value: {
            type: String,
            default: null
        },
        language:{
            type:String,
            default:'html'
        },
    },
    data(){
        return{
            dValue: this.value,                // props 文本内容
        }
    },
    computed:{
        codeClass(){
            return {
                [this.language]:this.language
            }
        }
    },
    mounted(){
        let $vm=this;
        this.loadExternalLink('markdown_css', 'css');   //加载css 和 js
        this.loadExternalLink('katex_css', 'css');
        this.loadExternalLink('katex_js', 'js', function() {
            $vm.iRender();
        });
        this.loadExternalLink('hljs_js', 'js', function() {
            $vm.iRender();
        });
        this.codeStyleChange(this.codeStyle, true)
    },
    methods:{
        iRender(){
             let s='```'+this.language+'\n'+this.value+'\n```';
             this.dValue= this.eRender(s);
             //this.$parent.$emit('update')
        }
    },
    render(h){
        return h('div',{
            domProps:{
                innerHTML:this.dValue
            }
        })
        //return h('div',[this.compiledMarkdown])
    }
}