/**
 * @Author: HuaChao Chen <chc>
 * @Date:   2017-06-14T23:04:34+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: extra-function.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-12-19T17:46:48+08:00
 * @License: MIT
 * @Copyright: 2017
 */


/**
 * textarea 插入内容
 */
export const insertTextAtCaret = (obj, {prefix, subfix, str}, $vm) => {
    obj.focus();
    if (document.selection) {

    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        let startPos = obj.selectionStart;
        let endPos = obj.selectionEnd;
        let tmpStr = obj.value;
        if (startPos === endPos) {
            // 直接插入
            obj.value = tmpStr.substring(0, startPos) + prefix + str + subfix + tmpStr.substring(endPos, tmpStr.length);
            obj.selectionStart = startPos + prefix.length;
            obj.selectionEnd = startPos + (str.length + prefix.length);
        } else {
            // 存在选中区域
            if (tmpStr.substring(startPos - prefix.length, startPos) === prefix && tmpStr.substring(endPos, endPos + subfix.length) === subfix) {
                // 取消
                obj.value = tmpStr.substring(0, startPos - prefix.length) + tmpStr.substring(startPos, endPos) + tmpStr.substring(endPos + subfix.length, tmpStr.length);
                obj.selectionStart = startPos - prefix.length;
                obj.selectionEnd = endPos - prefix.length;
            } else {
                // 确定
                obj.value = tmpStr.substring(0, startPos) + prefix + tmpStr.substring(startPos, endPos) + subfix + tmpStr.substring(endPos, tmpStr.length);
                obj.selectionStart = startPos + prefix.length;
                obj.selectionEnd = startPos + (endPos - startPos + prefix.length);
            }
        }
    } else {
        alert(obj)
        // obj.value += str;
    }
    // 触发change事件
    $vm.dValue = obj.value;
    obj.focus()
};

/**
 * 监听浏览器fullscreen
 * @param $vm
 */
export const changeFullscreen = ($vm) => {
    // 阅读模式 全屏监听事件
    $vm.$el.addEventListener('fullscreenchange', function (e) {
        $vm.changeReadModelStatus()
    }, false);
    $vm.$el.addEventListener('mozfullscreenchange', function (e) {
        $vm.changeReadModelStatus()
    }, false);
    $vm.$el.addEventListener('webkitfullscreenchange', function (e) {
        $vm.changeReadModelStatus()
    }, false);
    $vm.$el.addEventListener('msfullscreenchange', function (e) {
        $vm.changeReadModelStatus()
    }, false);
};
// 插入tab
export const insertTab = ($vm) => {
    let obj = $vm.getTextareaDom();
    if (document.selection) {
    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        let startPos = obj.selectionStart;
        let endPos = obj.selectionEnd;
        let tmpStr = obj.value;
        obj.value = tmpStr.substring(0, startPos) + '    ' + tmpStr.substring(endPos, tmpStr.length);
        obj.selectionStart = obj.selectionEnd = startPos + 4;
    } else {
        alert('else')
        // obj.value += str;
    }
    // 触发change事件
    $vm.d_value = obj.value;
    obj.focus();
};
/**
 * 滚动条联动
 */
export const scrollLink = (e, $vm) => {
    let element = e.srcElement ? e.srcElement : e.target;
    let ratio = element.scrollTop / (element.scrollHeight - element.offsetHeight);
    if ($vm.editScrollHeight >= 0 && element.scrollHeight !== $vm.editScrollHeight && (element.scrollHeight - element.offsetHeight - element.scrollTop <= 30)) {
        // star 内容变化 导致 高度增加  且滚动条距离底部小于25px  自动滚动到底部
        $vm.$refs.editAreaEl.scrollTop = element.scrollHeight - element.offsetHeight;
        ratio = 1
    }
    $vm.editScrollHeight = element.scrollHeight;
    // end ----
    if ($vm.$refs.previewAreaEl.scrollHeight > $vm.$refs.previewAreaEl.offsetHeight) {
        $vm.$refs.previewAreaEl.scrollTop = ($vm.$refs.previewAreaEl.scrollHeight - $vm.$refs.previewAreaEl.offsetHeight) * ratio
    }
};


///////////////////////////////////////////////
/**
 * Created by zhy on 2017/4/24.
 */
/**
 * 生成导航目录
 */
export const getNavigation = ($vm , full) => {
    let navigationContent;

    navigationContent = $vm.$refs.navigationContent;

    navigationContent.innerHTML = $vm.dRender;
    let nodes = navigationContent.children;
    if (nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
            judageH(nodes[i] , i , nodes)
        }
    }
    function judageH(node , i , nodes) {
        let reg = /^H[1-6]{1}$/;
        if (!reg.exec(node.tagName)) {
            node.style.display = 'none'
        } else {
            node.onclick = function () {
                let vShowContent = $vm.$refs.previewAreaEl;
                let vNoteEdit = $vm.$refs.editAreaEl;
                if ($vm.sSubfield) {
                    // 双栏
                    if ($vm.sPreviewSwitch) {
                        // 编辑预览
                        vNoteEdit.scrollTop = vShowContent.children[i].offsetTop * (vNoteEdit.scrollHeight - vNoteEdit.offsetHeight) / (vShowContent.scrollHeight - vShowContent.offsetHeight);
                    } else {
                        // todo 编辑
                    }
                } else {
                    // 单栏
                    if ($vm.sPreviewSwitch) {
                        // 预览
                        vShowContent.scrollTop = vShowContent.children[i].offsetTop;
                    } else {
                        // todo 编辑
                    }
                }
            }
        }
    }
};





/**
 * 监听浏览器onresize
 * @param $vm
 */
export const windowResize = ($vm) => {
    function sizeToStatus() {
        if ($vm.$el.clientWidth > 768) {
            // > 768
            $vm.s_subfield = $vm.subfield;
        }
        else {
            // <  768
            $vm.s_subfield = false;
        }
    }

    sizeToStatus();
    window.addEventListener('resize', sizeToStatus);
};


export const ImagePreviewListener = ($vm) => {
    document.querySelector('.v-show-content').onclick = document.querySelector('.v-note-read-content').onclick = function (event) {
        event = event ? event : window.event;
        let ele = event.srcElement ? event.srcElement : event.target;
        if (ele.tagName === 'IMG') {
            $vm.d_preview_imgsrc = ele.src;
        }
    }
};