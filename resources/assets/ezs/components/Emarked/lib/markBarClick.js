// 直接添加链接
export const markBarClickLink = (type, text, link, $vm) => {
    let insert_text = {
        prefix: type === 'link' ? `[${text}](` : `![${text}](`,
        subfix: ')',
        str: link
    };
    $vm.insertText($vm.getTextareaDom(), insert_text);
};

export const markBarClick = (_type, $vm) => {
    const _param_of_insert_text = {
        'bold': {
            prefix: '**',
            subfix: '**',
            str: $vm.dWords.tl_bold
        },
        'italic': {
            prefix: '*',
            subfix: '*',
            str: $vm.dWords.tl_italic
        },
        'header': {
            prefix: '# ',
            subfix: ' #',
            str: $vm.dWords.tl_header
        },
        'underline': {
            prefix: '++',
            subfix: '++',
            str: $vm.dWords.tl_underline
        },
        'strikethrough': {
            prefix: '~~',
            subfix: '~~',
            str: $vm.dWords.tl_strikethrough
        },
        'mark': {
            prefix: '==',
            subfix: '==',
            str: $vm.dWords.tl_mark
        },
        'superscript': {
            prefix: '^',
            subfix: '^',
            str: $vm.dWords.tl_superscript
        },
        'subscript': {
            prefix: '~',
            subfix: '~',
            str: $vm.dWords.tl_subscript
        },
        'quote': {
            prefix: '> ',
            subfix: '',
            str: $vm.dWords.tl_quote
        },
        'ol': {
            prefix: '1. ',
            subfix: '',
            str: $vm.dWords.tl_ol
        },
        'ul': {
            prefix: '- ',
            subfix: '',
            str: $vm.dWords.tl_ul
        },
        'link': {
            prefix: '[](',
            subfix: ')',
            str: $vm.dWords.tl_link
        },
        'imagelink': {
            prefix: '![](',
            subfix: ')',
            str: $vm.dWords.tl_image
        },
        'code': {
            prefix: '```',
            subfix: '\n\n```\n',
            str: 'language'
        },
        'table': {
            prefix: '',
            subfix: '',
            str: '|column1|column2|column3|\n|-|-|-|\n|content1|content2|content3|\n'
        },
        'aligncenter': {
            prefix: '::: hljs-center\n\n',
            subfix: '\n\n:::\n',
            str: $vm.dWords.tl_aligncenter
        },
        'alignright': {
            prefix: '::: hljs-right\n\n',
            subfix: '\n\n:::\n',
            str: $vm.dWords.tl_alignright
        },
        'alignleft': {
            prefix: '::: hljs-left\n\n',
            subfix: '\n\n:::\n',
            str: $vm.dWords.tl_alignleft
        }
    };
    if (_param_of_insert_text.hasOwnProperty(_type)) {
        // 插入对应的内容
        $vm.insertText($vm.getTextareaDom(), _param_of_insert_text[_type]);
    }
    const _other_click = {
        'undo': clickUndo,
        'redo': clickRedo,
        'trash': clickTrash,
        'save': clickSave,


        'html': clickHtml,
        'help': clickHelp,
        'read': clickRead,
        'preview': clickPreview,
        'fullscreen': clickFullscreen,
        'navigation': clickNavigation,
        'subfield': clickSubfield
    };
    if (_other_click.hasOwnProperty(_type)) {
        _other_click[_type]($vm);
    }
};
function clickSubfield ($vm) {
    $vm.sSubfield = !$vm.sSubfield;
    $vm.sPreviewSwitch = $vm.sSubfield;
    if ($vm.previewToggle) {
        $vm.previewToggle($vm.sPreviewSwitch, $vm.dValue)
    }
    if ($vm.subfieldToggle) {
        $vm.subfieldToggle($vm.sSubfield, $vm.dValue)
    }
}

function clickNavigation($vm) {
    $vm.sNavigation = !$vm.sNavigation;
    if ($vm.sNavigation) {
        $vm.sPreviewSwitch = true;
        // 绘制标题导航
        $vm.getNavigation($vm, false)
    }
    if ($vm.navigationToggle) {
        $vm.navigationToggle($vm.sNavigation, $vm.dValue)
    }
}
function clickFullscreen($vm) {
    $vm.sFullScreen = !$vm.sFullScreen;
    if ($vm.fullscreen) {
        $vm.fullscreen($vm.sFullScreen, $vm.dValue)
    }
}

function clickPreview($vm) {
    $vm.sPreviewSwitch = !$vm.sPreviewSwitch;
    if ($vm.previewToggle) {
        $vm.previewToggle($vm.sPreviewSwitch, $vm.dValue)
    }
}

// 全屏，阅读模式
function clickRead($vm) {
    let el = $vm.$refs.vReadModel;
    // 单栏编辑
    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
    } else if (e.msRequestFullscreen) {
        el.msRequestFullscreen();
    }
}
function clickHelp($vm) {
    $vm.sHelp = !$vm.sHelp;
    if ($vm.helpToggle) {
        $vm.helpToggle($vm.sHelp, $vm.dValue)
    }
}
function clickHtml($vm) {
    $vm.sHtmlCode = !$vm.sHtmlCode;
    if ($vm.htmlCode) {
        $vm.htmlCode($vm.sHtmlCode, $vm.dValue)
    }
}

function clickUndo($vm) {
    if ($vm.dHistoryIndex > 0) {
        $vm.dHistoryIndex--
    }
    // $vm.$refs.vNoteDivEdit.innerHTML = $vm.s_markdown.render($vm.d_value)
    if ($vm.sPreviewSwitch) {
        let start = $vm.getTextareaDom().selectionStart;
        let currentLength = $vm.dValue.length;
        $vm.$nextTick(() => {
            // 光标操作
            start -= currentLength - $vm.dValue.length;
            $vm.getTextareaDom().selectionStart = start;
            $vm.getTextareaDom().selectionEnd = start
        })
    }
}
// redo
function clickRedo($vm) {
    if ($vm.dHistoryIndex < $vm.dHistory.length - 1) {
        $vm.dHistoryIndex++
    }
    // $vm.$refs.vNoteDivEdit.innerHTML = $vm.s_markdown.render($vm.d_value)
}

function clickTrash($vm) {
    $vm.dValue = ''
    // $vm.$refs.vNoteDivEdit.innerHTML = $vm.s_markdown.render($vm.d_value)
}
function clickSave($vm) {
    $vm.save($vm.$refs, $vm.dRender)
}