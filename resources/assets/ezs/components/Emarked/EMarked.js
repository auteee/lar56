
import marked from 'marked'
import hljs from 'highlight.js'
//import highLight from "../../directives/high-light";

//配置marked环境
// marked.setOptions({
//     gfm: true,              //启动Github样式的Markdown
//     tables: true,           //支持Github表格，必须打开gfm选项
//     breaks: false,          //支持Github换行符，必须打开gfm选项
//     pedantic: false,        //只解析符合markdown.pl定义的，不修正markdown的错误
//     sanitize: false,        //原始输出，忽略HTML标签
//     smartLists: true,       //优化列表输出
//     smartypants: false,
//     highlight: function (code) {
//         return hljs ? hljs.highlightAuto(code).value : code
//     }
// });
export default {
    name:'e-marked',
    //directives:{ highLight },
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
    computed:{
        codeClass(){
            return {
                [this.language]:this.language
            }
        },
        compiledMarkdown(){
            return marked(this.value);
        }
    },
    created(){
        this.setMarked(this.value, { sanitize: true });
    },
    methods:{
        setMarked(){
            marked.setOptions({
                gfm: true,              //启动Github样式的Markdown
                tables: true,           //支持Github表格，必须打开gfm选项
                langPrefix:'hljs',
                highlight: function (code) {
                    return hljs ? hljs.highlightAuto(code).value : code
                }
            });
        },
        formatValue(){
            let s='```'+this.language+'\n'+this.value+'\n```';
            return s;
        }
    },
    render(h){
        return h('div',{
            domProps:{
                innerHTML:this.compiledMarkdown
            }
        })
    }
}