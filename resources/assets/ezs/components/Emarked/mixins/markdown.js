import hljsLangs from '../lib/core/hljs/lang.hljs'
import { loadScript,loadLink } from "../../../util/helpers";
import markdownIt from 'markdown-it'  //
import emoji from 'markdown-it-emoji'   //表情
import sub from 'markdown-it-sub'       //下标
import sup from 'markdown-it-sup'       //上标
import deflist from 'markdown-it-deflist'   //<dl>
import abbr from 'markdown-it-abbr'         //<abbr/>
import footnote from 'markdown-it-footnote'
import insert from 'markdown-it-ins'        // insert 带有下划线 样式 ++ ++
import mark from 'markdown-it-mark'
import container from 'markdown-it-container'
import e_hljs from 'markdown-it-highlightjs-external'
import katex from 'markdown-it-katex-external'
import eimg from 'markdown-it-images-preview'
import hljsCss from "../lib/core/hljs/lang.hljs.css";

const markdown_config = {
    html: true,             // Enable HTML tags in source
    xhtmlOut: true,        // Use '/' to close single tags (<br />).
    breaks: true,           // Convert '\n' in paragraphs into <br>
    langPrefix: 'vue lang-',  // CSS language prefix for fenced blocks. Can be
    linkify: false,        // 自动识别url
    typographer: true,
    quotes: '“”‘’'
};
const markdown=markdownIt(markdown_config);
//const markdown = require('markdown-it')(markdown_config);
//console.info(markdown);

const defaultRender=markdown.renderer.rules.link_open ||
    function (tokens,idx,options,env,self) {
        return self.renderToken(tokens, idx, options);
    };

markdown.renderer.rules.link_open=(tokens, idx, options, env, self)=>{
    // If you are sure other plugins can't add `target` - drop check below
    let aIndex = tokens[idx].attrIndex('target');

    if (aIndex < 0) {
        tokens[idx].attrPush(['target', '_blank']); // add new attribute
    } else {
        tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
    }
    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
};

let missLangs = {};
let needLangs=[];
const hljs_opts={
    hljs:'auto',
    highlighted: true,
    langCheck: function(lang) {
        if (lang && hljsLangs[lang] && !missLangs[lang]) {
            missLangs[lang] = 1;
            needLangs.push(lang)
        }
    }
};

markdown.use(e_hljs, hljs_opts)
    .use(emoji)
    .use(sup)
    .use(sub)
    .use(container)
    .use(container, 'hljs-left') /* align left */
    .use(container, 'hljs-center')/* align center */
    .use(container, 'hljs-right')/* align right */
    .use(deflist)
    .use(abbr)
    .use(footnote)
    .use(insert)
    .use(mark)
    .use(container)
    .use(eimg)
    .use(katex);

export default {
    data(){
        return {
            sMarkdown:markdown,
            ///////////////////
            pExtLink: {},
            sExtLink: {
                markdown_css: function() {
                    return 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css';
                },
                hljs_js: function() {
                    return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js';
                },
                hljs_lang: function(lang) {
                    return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/' + lang + '.min.js';
                },
                hljs_css: function(css) {
                    if(hljsCss[css]) {
                        return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/' + css + '.min.css';
                    }
                    return '';
                },
                katex_js: function() {
                    return 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js';
                },
                katex_css: function() {
                    return 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css';
                }
            },
        }
    },
    props:{
        extLink: {
            type: [Object, Boolean],
            default: true
        },
        codeStyle: {
            type: String,
            default() {
                return 'github';
            }
        },
        ishljs: {
            type: Boolean,
            default: true
        },
    },
    watch: {
        ishljs(val) {
            hljs_opts.highlighted = val;
        }
    },
    created(){
        this.initExternalFuc();
    },
    mounted() {
        hljs_opts.highlighted = this.ishljs;
    },
    methods: {
        codeStyleChange(val, isInit) {
            isInit = isInit ? isInit : false;
            if (typeof this.pExtLink.hljs_css !== 'function') {
                if (this.pExtLink.hljs_css !== false)
                    console.error('external_link.hljs_css is not a function, if you want to disabled this error log, set external_link.hljs_css to function or false');
                return;
            }
            let url = this.pExtLink.hljs_css(val);
            if (url.length === 0 && isInit) {
                console.warn('hljs color scheme', val, 'do not exist, loading default github');
                url = this.pExtLink.hljs_css('github')
            }
            if (url.length > 0) {
                loadLink(url)
            } else {
                console.warn('hljs color scheme', val, 'do not exist, hljs color scheme will not change');
            }
        },
        loadExternalLink(name, type, callback) {
            if (typeof this.pExtLink[name] !== 'function') {
                if (this.pExtLink[name] !== false) {
                    console.error('external_link.' + name, 'is not a function, if you want to disabled this error log, set external_link.' + name, 'to function or false');
                }
                return ;
            }
            const _obj = {
                'css': loadLink,
                'js': loadScript,
            };
            if (_obj.hasOwnProperty(type)) {
                _obj[type](this.pExtLink[name](), callback);
            }
        },
        initExternalFuc() {
            const exts = ['markdown_css', 'hljs_js', 'hljs_css', 'hljs_lang', 'katex_js', 'katex_css'];
            let _type_ = typeof this.extLink;
            let _is_object = (_type_ === 'object');
            let _is_boolean = (_type_ === 'boolean');
            for (let i = 0;i < exts.length; i++) {
                if ((_is_boolean && !this.extLink) || (_is_object && this.extLink[exts[i]] === false)) {
                    this.pExtLink[exts[i]] = false;
                } else if (_is_object && typeof this.extLink[exts[i]] === 'function') {
                    this.pExtLink[exts[i]] = this.extLink[exts[i]];
                } else {
                    this.pExtLink[exts[i]] = this.sExtLink[exts[i]];
                }
            }
        },

        eRender(src, func) {
            let res = markdown.render(src);
            if(typeof func!== "function"){
                return res;
            }
            if (this.ishljs) {
                if (needLangs.length > 0) {
                    this._eRender(src, func, res);
                }
            }
            func(res);
        },
        _eRender(src, func, res) {
            let deal = 0;
            for (let i = 0; i < needLangs.length; i++) {
                let url = this.pExtLink.hljs_lang(needLangs[i]);
                loadScript(url, function() {
                    deal = deal + 1;
                    if (deal === needLangs.length) {
                        res = markdown.render(src);
                        func(res);
                    }
                })
            }
        }
    },
}