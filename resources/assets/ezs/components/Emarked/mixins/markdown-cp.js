import hljsLangs from '../lib/core/hljs/lang.hljs'
import { loadScript } from "../lib/core/helper";
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

const markdown_config = {
    html: true,             // Enable HTML tags in source
    xhtmlOut: true,        // Use '/' to close single tags (<br />).
    breaks: true,           // Convert '\n' in paragraphs into <br>
    langPrefix: 'lang-',  // CSS language prefix for fenced blocks. Can be
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
        }
    },
    watch: {
        ishljs(val) {
            hljs_opts.highlighted = val;
        }
    },
    mounted() {
        hljs_opts.highlighted = this.ishljs;
    },
    methods: {

        eRender(src, func) {
            let res = markdown.render(src);
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