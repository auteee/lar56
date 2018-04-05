import hljsCss from '../lib/core/hljs/lang.hljs.css.js'
export default {
    data(){
        return{
            dValue: '',                // props 文本内容
            dRender: '',               // props 文本内容render
            dWords: null,
            dHelp: null,                //
            dHistoryIndex: 0,           // 编辑记录索引
            dHistory: (() => {          // 编辑记录
                let temp_array = [];
                temp_array.push(this.value);
                return temp_array;
            })(),
            sHelp: false,// markdown帮助
            sSubfield: (() => {         //开关分栏
                return this.subfield;
            })(),
            sFullScreen: false,       // 全屏编辑标志
            sHtmlCode: false,           // 分栏情况下查看html源码
            sPreviewSwitch: (() => {    // props true 展示编辑 false展示预览
                let default_open_ = this.defaultOpen;
                if (!default_open_) {
                    default_open_ = this.subfield ? 'preview' : 'edit';
                }
                return default_open_ === 'preview';
            })(),
            sNavigation: false,
            sReadModel: false,
            sImgLinkOpen:false,

            timeoutRef:null,
            navArr:[],       //导航目录数组
            editScrollHeight:-1,
        }
    }
}