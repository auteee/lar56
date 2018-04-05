<template>
    <e-toolbar>
        <e-toolbar-items>
            <e-btn cs="link-primary mark-btn" @click="clicks('bold')" :title="`${dWords.tl_bold}(ctrl+b)`"><e-icon>fa fa-bold</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('italic')" :title="`${dWords.tl_italic} (ctrl+i)`"><e-icon>fa fa-italic</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('header')" :title="`${dWords.tl_header} (ctrl+h)`"><e-icon>fa fa-header</e-icon></e-btn>
        </e-toolbar-items>
        <e-toolbar-items>
            <e-btn cs="link-primary mark-btn" @click="clicks('underline')" :title="`${dWords.tl_underline} (ctrl+u)`"><e-icon>fa fa-underline</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('strikethrough')" :title="`${dWords.tl_strikethrough} (ctrl+d)`"><e-icon>fa fa-strikethrough</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('mark')" :title="`${dWords.tl_mark} (ctrl+m)`"><e-icon>fa fa-bookmark</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('superscript')" :title="`${dWords.tl_subscript} (ctrl+shift+s)`"><e-icon>fa fa-superscript</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('subscript')" :title="`${dWords.tl_subscript} (ctrl+shift+s)`"><e-icon>fa fa-subscript</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('alignleft')" :title="`${dWords.tl_alignleft} (ctrl+l)`"><e-icon>fa fa-align-left</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('aligncenter')" :title="`${dWords.tl_aligncenter} (ctrl+e)`"><e-icon>fa fa-align-center</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('alignright')" :title="`${dWords.tl_alignright} (ctrl+r)`"><e-icon>fa fa-align-right</e-icon></e-btn>
        </e-toolbar-items>
        <e-toolbar-items>
            <e-btn cs="link-primary mark-btn" @click="clicks('quote')" :title="`${dWords.tl_quote} (ctrl+q)`"><e-icon>fa fa-quote-left</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('ol')" :title="`${dWords.tl_ol} (ctrl+o)`"><e-icon>fa fa-list-ol</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('ul')" :title="`${dWords.tl_ul} (ctrl+alt+u)`"><e-icon>fa fa-list-ul</e-icon></e-btn>
        </e-toolbar-items>
        <e-toolbar-items>
            <e-btn cs="link-primary mark-btn" @click.stop="addLinkDialog('link')" :title="`${dWords.tl_link} (ctrl+l)`"><e-icon>fa fa-chain</e-icon></e-btn>
            <e-menu>

            </e-menu>

            <e-btn cs="link-primary mark-btn" @click="clicks('code')" :title="`${dWords.tl_code} (ctrl+alt+c)`"><e-icon>fa fa-code</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('table')" :title="`${dWords.tl_table} (ctrl+alt+t)`"><e-icon>fa fa-table</e-icon></e-btn>
        </e-toolbar-items>
        <e-toolbar-items>
            <e-btn cs="link-primary mark-btn" @click="clicks('undo')" :title="`${dWords.tl_undo} (ctrl+z)`"><e-icon>fa fa-undo</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('redo')" :title="`${dWords.tl_redo} (ctrl+y)`"><e-icon>fa fa-repeat</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('trash')" :title="`${dWords.tl_trash} (ctrl+breakspace)`"><e-icon>fa fa-trash</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('save')" :title="`${dWords.tl_save} (ctrl+s)`"><e-icon>fa fa-save</e-icon></e-btn>
        </e-toolbar-items>
        <e-spacer></e-spacer>
        <e-toolbar-items>
            <e-btn v-show="!sNavigation" cs="link-primary mark-btn" @click="clicks('navigation')" :title="`${dWords.tl_navigation_on} (F8)`"><e-icon>fa fa-bars</e-icon></e-btn>
            <e-btn v-show="sNavigation" cs="link-primary mark-btn" @click="clicks('navigation')" :title="`${dWords.tl_navigation_off} (F8)`"><e-icon>fa fa-bars</e-icon></e-btn>
            <e-btn :class = "{'selected': sPreviewSwitch}" v-show="sPreviewSwitch" cs="link-primary mark-btn" @click="clicks('preview')" :title="`${dWords.tl_edit} (F9)`"><e-icon>fa fa-eye-slash</e-icon></e-btn>
            <e-btn v-show="!sPreviewSwitch" cs="link-primary mark-btn" @click="clicks('preview')" :title="`${dWords.tl_preview} (F9)`"><e-icon>fa fa-eye</e-icon></e-btn>
            <e-btn v-show="!sFullScreen" cs="link-primary mark-btn" @click="clicks('fullscreen')" :title="`${dWords.tl_fullscreen_on} (F10)`"><e-icon>fa fa-arrows-alt</e-icon></e-btn>
            <e-btn v-show="sFullScreen" cs="link-primary mark-btn" @click="clicks('fullscreen')" :title="`${dWords.tl_fullscreen_off} (F10)`"><e-icon>fa fa-compress</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('read')" :title="`${dWords.tl_read} (F11)`"><e-icon>fa fa-window-maximize</e-icon></e-btn>
            <e-btn :class = "{'selected': sSubfield}" cs="link-primary mark-btn" v-if="toolbars.subfield" @click="clicks('subfield')"
                     :title="`${sSubfield ? dWords.tl_single_column : dWords.tl_double_column} (F12)`"><e-icon>fa fa-columns</e-icon></e-btn>

            <e-btn v-show="!sHtmlCode" cs="link-primary mark-btn" @click="clicks('html')" :title="dWords.tl_html_on"><e-icon>fa fa-code</e-icon></e-btn>
            <e-btn class="selected" v-show="sHtmlCode" cs="link-primary mark-btn" @click="clicks('html')" :title="dWords.tl_html_off"><e-icon>fa fa-code</e-icon></e-btn>
            <e-btn cs="link-primary mark-btn" @click="clicks('help')" :title="dWords.tl_help"><e-icon>fa fa-question-circle</e-icon></e-btn>
        </e-toolbar-items>
        <!-- 添加image链接 -->
        <e-dialog v-model="sImgLinkOpen" max-width="400px">
            <e-card>
                <e-card-header>
                    <e-spacer></e-spacer>
                    <e-btn @click.stop="sImgLinkOpen = false"><e-icon>fa fa-times</e-icon></e-btn>
                </e-card-header>
                <e-card-body>
                    <e-input ref="linkTextInput" :placeholder="dWords.tl_popup_link_text" v-model="linkText"></e-input>
                    <e-input :placeholder="dWords.tl_popup_link_addr" v-model="linkAddr"></e-input>
                </e-card-body>
                <e-card-footer>
                    <e-btn  @click.stop="sImgLinkOpen = false">{{dWords.tl_popup_link_cancel}}</e-btn>
                    <e-btn  @click.stop="addLinkSure()">{{dWords.tl_popup_link_sure}}</e-btn>
                </e-card-footer>
            </e-card>
        </e-dialog>
    </e-toolbar>
</template>

<script>
    import Etoolbar from '../Etoolbar'
    import Ebtn from '../Ebtn'
    export default {
        name:'e-markdown-bar',
        components:{Etoolbar,Ebtn},
        props:{
            sHtmlCode:{ type:Boolean, default:true },
            sNavigation:{ type:Boolean, default:true },
            sPreviewSwitch:{ type:Boolean, default:true },
            sFullScreen:{ type:Boolean, default:true },
            sSubfield:{ type:Boolean, default:true },

            // 是否开启编辑
            editable: {
                type: Boolean,
                default: true
            },
            // 工具栏
            toolbars: {
                type: Object,
                required: true
            },
            dWords: {
                type: Object,
                required: true
            },
        },
        data(){
            return {
                imgFile: [['./0', null]],
                sImgDropdownOpen: false,
                sImgLinkOpen: false,
                trigger: null,
                num: 0,
                linkText: '',
                linkAddr: '',
                linkType: 'link'
            }
        },
        methods:{
            clicks(type){
                // 让父节点来绑定事件并
                this.$emit('markBarClick',type);
            },
            addLinkDialog(type) {
                this.linkType = type;
                this.linkText = this.linkAddr = '';
                this.sImgLinkOpen = true;
                this.$nextTick(() => {
                    this.$refs.linkTextInput.focus()
                });
                this.sImgDropdownOpen = false;
            },
            addLinkSure(){
                this.$emit('markBarClickLink', this.linkType, this.linkText, this.linkAddr);
                this.sImgLinkOpen = false;
            }
        }

    }
</script>