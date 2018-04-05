<template>
    <div :class="[{'fullscreen': sFullScreen}]" class="v-note-wrapper markdown-body">
        <!--工具栏-->
        <e-markdown-bar v-show="toolbarsFlag"   ref="markdownBar"
                :editable="editable" :toolbars="toolbars" :dWords="dWords"
                :sHtmlCode="sHtmlCode" :sSubfield="sSubfield" :sNavigation="sNavigation"
                :sFullScreen="sFullScreen" :sPreviewSwitch="sPreviewSwitch"
                @markBarClickLink="markBarClickLink"
                @markBarClick="markBarClick">
        </e-markdown-bar>

        <!--编辑展示区域-->
        <e-row>
            <!--编辑区-->
            <e-col ref="editAreaEl" :class="editArea" v-show="(sSubfield || !sPreviewSwitch) && (!sHtmlCode || sSubfield)">
                <e-input :readonly="!editable" :placeholder="placeholder"
                         @scroll="editAreaScroll" ref="eTextarea"
                         rows="24" max-height="100%" hide-detail textarea v-model="dValue"
                         @input="editAreaRender"></e-input>
            </e-col>
            <!--展示区-->
            <e-col ref="previewAreaEl" class="previewAear" :class="previewArea" v-show="sPreviewSwitch || sHtmlCode">
                <e-card ref="previewCard">
                    <e-card-body v-show="!sHtmlCode" v-html="dRender"></e-card-body>
                    <e-card-body v-show="sHtmlCode">{{dRender}}</e-card-body>
                </e-card>
            </e-col>
            <!--标题导航-->
            <!--<e-list></e-list>-->
            <transition name="slideTop">
                <div v-show="sNavigation" class="v-note-navigation-wrapper">
                    <div class="v-note-navigation-title">
                        {{dWords.navigation_title}}
                        <e-btn @click="markBarClick('navigation')"><e-icon>fa fa-times</e-icon></e-btn>
                    </div>
                    <div ref="navigationContent" class="v-note-navigation-content scroll-style"></div>
                </div>
            </transition>
        </e-row>
        <!--阅读模式-->
        <div v-show="sReadModel" class="read-model" ref="vReadModel">
            <div v-html="dRender"></div>
        </div>
        <!--帮助文档-->
        <e-dialog v-model="sHelp" max-width="800px">
            <e-card>
                <e-card-body v-html="dHelp"></e-card-body>
            </e-card>
        </e-dialog>
    </div>
</template>
<script>
    import markData from './mixins/markdown-data'
    import markProps from './mixins/markdown-props'
    import markdown from './mixins/markdown'
    //comments
    import EMarkdownBar from './EMarkdownBar'
    //配置
    import {CONFIG} from "./lib/config";
    import hljsLangs from './lib/core/hljs/lang.hljs.js'
    //import hljs from './lib/core/highlight'
    import {keydownListen} from "./lib/core/keydown-listen"
    import {
        insertTextAtCaret,  //插入字符串
        changeFullscreen,   //变更全屏状态
        //getNavigation,
        insertTab,          //插入tab
        scrollLink,         //滚动联动
    } from "./lib/core/helper"
    import {markBarClick,markBarClickLink} from "./lib/markBarClick"

    export default {
        name:'e-markdown-edit',
        components: {EMarkdownBar},
        mixins:[markData,markdown,markProps],

        watch:{
            language: function (val) {
                this.initLanguage();
            },
            defaultOpen: function (val) {
                let default_open_ = val;
                if ( !default_open_) {
                    default_open_ = this.subfield?'preview':'edit';
                }
                return this.sPreviewSwitch = default_open_;
            },
            subfield(val) {      //
                this.sSubfield = val
            },
            dValue(val) {
                this.editAreaRender(val);
            },
            dHistoryIndex() {
                if (this.dHistoryIndex > 20) {
                    this.dHistory.shift();
                    this.dHistoryIndex = this.dHistoryIndex - 1
                }
                this.dValue = this.dHistory[this.dHistoryIndex]
            },
            value(val) {
                if (val !== this.dValue) {
                    this.dValue = val;
                }
            },
            codeStyle: function (val) {
                this.codeStyleChange(val)
            }
        },
        computed:{
            editArea(){
                if(this.sSubfield){
                    if(!this.sPreviewSwitch){
                        return 'md12'
                    }
                    return 'md6'
                }
                return 'md12'
            },
            previewArea(){
                if(this.sSubfield){
                    return 'md6'
                }
                return 'md12'
            }
        },
        created() {
            //var $vm = this;
            // 初始化语言
            this.initLanguage();
            // this.$nextTick(() => {
            //     // 初始化Textarea编辑开关
            //     this.editableTextarea();
            //     // 图片预览事件监听
            //     ImagePreviewListener(this);
            // })

        },
        mounted(){
            this.dValue=this.value;
            //设置预览区高度与编辑区同高
            let $vm=this;
            this.setPreviewAreaHeight();
            keydownListen(this);        //监听按键事件
            changeFullscreen(this);     //监听全屏事件
            this.loadExternalLink('markdown_css', 'css');   //加载css 和 js
            this.loadExternalLink('katex_css', 'css');
            this.loadExternalLink('katex_js', 'js', function() {
                $vm.initLanguage();
                $vm.editAreaRender($vm.dValue);
            });
            this.loadExternalLink('hljs_js', 'js', function() {
                $vm.initLanguage();
                $vm.editAreaRender($vm.dValue);
            });
            this.codeStyleChange(this.codeStyle, true)
        },
        methods:{
            // 滚动条联动
            editAreaScroll(e) {
                scrollLink(e, this);
            },
            //展示区高度
            setPreviewAreaHeight(){
                let h= this.$refs.editAreaEl.getBoundingClientRect().height;
                this.$refs.previewAreaEl.style.height=h+'px';
                this.$refs.previewCard.$el.style.minHeight=h+'px';
            },
            initLanguage() {
                let lang = CONFIG.langList.indexOf(this.language) >= 0 ? this.language : this.language.default;
                const $vm = this;

                this.eRender(CONFIG[`help_${lang}`], function(res) {
                    $vm.dHelp = res;
                });
                this.dWords = CONFIG[`words_${lang}`];
            },
            insertTab() {
                insertTab(this)
            },
            ////添加图片系列
            markBarClickLink(_type, text, link){
                markBarClickLink(_type, text, link,this);
            },
            /////---系列
            //工具栏点击事件
            markBarClick(type){
                markBarClick(type,this);
            },
            // 工具栏插入内容
            insertText(obj, {prefix, subfix, str}) {
                // if (this.s_preview_switch) {
                insertTextAtCaret(obj, {prefix, subfix, str}, this);
            },
            // 获取textarea dom节点
            getTextareaDom() {
                return this.$refs.eTextarea.$refs.textarea;
            },
            ///////
            saveHistory() {
                this.dHistory.splice(this.dHistoryIndex + 1, this.dHistory.length);
                this.dHistory.push(this.dValue);
                this.dHistoryIndex = this.dHistory.length - 1
            },
            // 监听ctrl + s       -----noOk
            save(val, render) {
                this.$emit('save', val, render)
            },
            ///////右则按钮
            // 切换htmlcode触发 （status , val）
            htmlCode(status, val) {
                this.$emit('htmlCode', status, val)
            },
            // 打开 , 关闭 help触发 （status , val）
            helpToggle(status, val) {
                this.$emit('helpToggle', status, val)
            },
            // 切换阅读编辑触发 （status , val）
            previewToggle(status, val) {
                this.$emit('previewToggle', status, val)
            },
            // 切换全屏触发 （status , val）
            fullscreen(status, val) {
                this.$emit('fullscreen', status, val)
            },
            // 切换分栏触发 （status , val）
            subfieldToggle(status, val) {
                this.$emit('subfieldToggle', status, val)
            },
            // 导航栏切换
            navigationToggle(status, val) {
                this.$emit('navigationToggle', status, val)
            },
            getNavigation() {

            },
            // 打开阅读模式触发（status , val）
            readModel(status, val) {
                this.$emit('readModel', status, val)
            },
            changeReadModelStatus() {
                this.sReadModel = !this.sReadModel;
                if (this.readModel) {
                    this.readModel(this.sReadModel, this.dValue)
                }
                // if (this.sReadModel && this.toolbars.navigation) {
                //     this.getNavigation(this, true)
                // }
            },
            // @event
            // 修改数据触发 （val ， val_render）
            change(val, render) {
                this.$emit('change', val, render)
            },
            //////
            editAreaRender(val){
                let $vm=this;

                this.$emit('input', val);

                this.eRender(val,function (res) {
                    $vm.dRender = res;
                    if ($vm.dValue === $vm.dHistory[$vm.dHistoryIndex]) return;
                    if($vm.timeoutRef){
                        clearTimeout($vm.timeoutRef);
                    }
                    $vm.timeoutRef = setTimeout(() => { $vm.saveHistory(); }, 500);
                })
                //this.timeoutRef = setTimeout(this.setActive(ets) , 100);
            },
        }
    }
</script>