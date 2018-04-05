//代码高亮插件
import highLight from '../../directives/high-light'
export default {
    name:'e-hljs',
    directives:{ highLight },
    props:{
        language:String,
        cs:String
    },
    computed:{
        codeClass(){
            return {
                [this.language]:this.language
            }
        }
    },
    render(h){
        const code=h('code',{
            staticClass:'e-code',
            'class':this.codeClass,
        },[this.$slots.default]);
        return h('pre',{
            directives:[
                {
                    name:'highLight'
                }
            ]
        },[code]);
    }
}