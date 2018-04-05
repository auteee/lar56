<template>
    <div :class="[{'fullscreen': s_fullScreen}]" class="v-note-wrapper markdown-body">
        <!--工具栏-->
        <div class="v-note-op" v-show="toolbarsFlag">
            <s-md-toolbar-left ref="toolbar_left" :editable="editable" :d_words="d_words"
                               @toolbar_left_click="toolbar_left_click" @toolbar_left_addlink="toolbar_left_addlink" :toolbars="toolbars"
                               @imgAdd="$imgAdd" @imgDel="$imgDel" @imgTouch="$imgTouch" :image_filter="image_filter"/>
            <s-md-toolbar-right ref="toolbar_right" :d_words="d_words" @toolbar_right_click="toolbar_right_click"
                                :toolbars="toolbars"
                                :s_subfield="s_subfield"
                                :s_preview_switch="s_preview_switch" :s_fullScreen="s_fullScreen"
                                :s_html_code="s_html_code"
                                :s_navigation="s_navigation"/>
        </div>
        <!--编辑展示区域-->
        <div class="v-note-panel">
            <!--编辑区-->
            <div ref="vNoteEdit" @scroll="$v_edit_scroll" class="v-note-edit divarea-wrapper"
                 :class="{'scroll-style': s_scrollStyle  , 'single-edit': !s_preview_switch && !s_html_code , 'single-show': (!s_subfield && s_preview_switch) || (!s_subfield && s_html_code)}"
                 @click="textAreaFocus">
                <div class="content-input-wrapper">
                    <!-- 双栏 -->
                    <v-autoTextarea ref="vNoteTextarea" :placeholder="placeholder ? placeholder : d_words.start_editor"
                                    class="content-input" fontSize="15px"
                                    lineHeight="1.5" v-model="d_value"></v-autoTextarea>
                </div>
            </div>
            <!--展示区-->
            <div :class="{'single-show': (!s_subfield && s_preview_switch) || (!s_subfield && s_html_code)}"
                 v-show="s_preview_switch || s_html_code" class="v-note-show">
                <div ref="vShowContent" v-html="d_render" v-show="!s_html_code"
                     :class="{'scroll-style': s_scrollStyle}" class="v-show-content">
                </div>
                <div v-show="s_html_code" :class="{'scroll-style': s_scrollStyle}" class="v-show-content-html">
                    {{d_render}}
                </div>
            </div>

            <!--标题导航-->
            <transition name="slideTop">
                <div v-show="s_navigation" class="v-note-navigation-wrapper">
                    <div class="v-note-navigation-title">
                        {{d_words.navigation_title}}<i @click="toolbar_right_click('navigation')"
                                                       class="fa fa-mavon-times v-note-navigation-close"
                                                       aria-hidden="true"></i>
                    </div>
                    <div ref="navigationContent" class="v-note-navigation-content scroll-style"></div>
                </div>
            </transition>

        </div>

        <!-- 预览图片 -->
        <transition name="fade">
            <div @click="d_preview_imgsrc=null" class="v-note-img-wrapper" v-if="d_preview_imgsrc">
                <i @click.stop.prevent="d_preview_imgsrc=null" class="fa fa-mavon-times" aria-hidden="true"></i>
                <img @click.stop="" :src="d_preview_imgsrc" alt="none">
            </div>
        </transition>
    </div>
</template>

<script>
    // import tomarkdown from './lib/core/to-markdown.js'
    import {
        /* windowResize, */
        getNavigation,
        ImagePreviewListener
    } from './lib/core/extra-function.js'
    import hljs from './lib/core/highlight.js'
    import markdown from './lib/mixins/markdown.js'
    export default {
        mixins: [markdown],
        props: { // 是否渲染滚动条样式(webkit)
            scrollStyle: {
                type: Boolean,
                default: true
            },


            code_style: {
                type: String,
                default() {
                    return 'github';
                }
            },



            image_filter: {
                type: Function,
                default: null,
            }
        },
        data() {
            return {

                s_autofocus: true,
                // 标题导航
                s_navigation: false,
                s_scrollStyle: (() => {
                    return this.scrollStyle
                })(),// props 是否渲染滚动条样式

                edit_scroll_height: -1,
                s_table_enter: false, // 回车事件是否在表格中执行
                d_image_file: [],
                d_preview_imgsrc: null, // 图片预览地址

            };
        },
        created() {
            var $vm = this;
            $vm.initExternalFuc();
            // 初始化语言
            this.initLanguage();
            this.$nextTick(() => {
                // 图片预览事件监听
                ImagePreviewListener(this);
            })
        },
        mounted() {
            var $vm = this;
            this.$el.addEventListener('paste', function (e) {
                $vm.$paste(e);
            });
            this.$el.addEventListener('drop', function (e) {
                $vm.$drag(e);
            });

        },
        methods: {

            $drag($e) {
                var dataTransfer = $e.dataTransfer;
                if (dataTransfer) {
                    var files = dataTransfer.files;
                    if (files.length > 0) {
                        $e.preventDefault();
                        this.$refs.toolbar_left.$imgFilesAdd(files);
                    }
                }
            },
            $paste($e) {
                var clipboardData = $e.clipboardData;
                if (clipboardData) {
                    var items = clipboardData.items;
                    if (!items) return;
                    var types = clipboardData.types || [];
                    var item = null;
                    for (var i = 0; i < types.length; i++) {
                        if (types[i] === 'Files') {
                            item = items[i];
                            break;
                        }
                    }
                    if (item && item.kind === 'file') {
                        var oFile = item.getAsFile();
                        this.$refs.toolbar_left.$imgFilesAdd([oFile,]);
                    }
                }
            },
            $imgTouch(file) {
                var $vm = this;
                this.insertText(this.getTextareaDom(),
                    {
                        prefix: '\n![' + file[1]._name + '](' + file[0] + ')',
                        subfix: '',
                        str: ''
                    });
            },
            $imgDel(file) {
                this.s_markdown.image_del(file[0]);
                // 删除所有markdown中的图片
                let reg = new RegExp(`\\!\\[${file[1]._name}\\]\\(\\${file[0]}\\)`, "g");
                this.d_value = this.d_value.replace(reg, '');
                this.iRender();
                this.$emit('imgDel', file[0]);
            },
            $imgAdd(pos, $file, isinsert) {
                if (isinsert === undefined) isinsert = true;
                var $vm = this;
                if (this.__rFilter == null) {
                    // this.__rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
                    this.__rFilter = /^image\//i;
                }
                this.__oFReader = new FileReader();
                this.__oFReader.onload = function (oFREvent) {
                    $vm.s_markdown.image_add(pos, oFREvent.target.result);
                    $file.miniurl = oFREvent.target.result;
                    if (isinsert === true) {
                        // 去除特殊字符
                        $file._name = $file.name.replace(/[\[\]\(\)\+\{\}&\|\\\*^%$#@\-]/g, '');
                        $vm.insertText($vm.getTextareaDom(),
                            {
                                prefix: '\n![' + $file._name + '](' + pos + ')',
                                subfix: '',
                                str: ''
                            });
                        $vm.$nextTick(function () {
                            $vm.$emit('imgAdd', pos, $file);
                        })
                    }
                };
                if ($file) {
                    var oFile = $file;
                    if (this.__rFilter.test(oFile.type)) {
                        this.__oFReader.readAsDataURL(oFile);
                    }
                }
            },
            $imgUpdateByUrl(pos, url) {
                var $vm = this;
                this.s_markdown.image_add(pos, url);
                this.$nextTick(function () {
                    $vm.d_render = this.s_markdown.render(this.d_value);
                })
            },
            $imgAddByUrl(pos, url) {
                if (this.$refs.toolbar_left.$imgAddByUrl(pos, url)) {
                    this.$imgUpdateByUrl(pos, url);
                    return true;
                }
                return false;
            },
            $img2Url(filename, url) {
                // x.replace(/(\[[^\[]*?\](?=\())\(\s*(\.\/2)\s*\)/g, "$1(http://path/to/png.png)")
                filename = filename.replace(/(\.|\\|\+|\*|\?|\^|\$|\[|\]|\{|\}|\(|\)|\||\/)/g, "\\$1");
                var reg_str = "/(!\\[\[^\\[\]*?\\]\(?=\\(\)\)\\(\\s*\(" + filename + "\)\\s*\\)/g";
                var reg = eval(reg_str);
                this.d_value = this.d_value.replace(reg, "$1(" + url + ")")
            },
            $imglst2Url(imglst) {
                if (imglst instanceof Array) {
                    for (var i = 0; i < imglst.length; i++) {
                        this.$img2Url(imglst[i][0], imglst[i][1]);
                    }
                }
            },


        },

    };
    import "./lib/font/css/fontello.css"
    import './lib/css/md.css'
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "lib/css/scroll.styl"
    @import "lib/css/mavon-editor.styl"
</style>
<style lang="css" scoped>
    .auto-textarea-wrapper {
        height: 100%;
    }
</style>