/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-05-03T00:31:20+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: keydown-listen.js
 * @Last modified by:   chenhuachao
 * @Last modified time: 2017-12-04T00:03:33+08:00
 * @License: MIT
 * @Copyright: 2017
 */

/**
 * Created by zhy on 2017/4/24.
 */
const KEY_CODE = {
    F8: 118,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    B: 66,
    I: 73,
    H: 72,
    U: 85,
    D: 68,
    M:77 ,
    Q: 81,
    O: 79,
    L: 76,
    S: 83,
    Z: 90,
    Y: 89,
    C: 76,
    T: 84,
    DELETE: 8,
    TAB: 9,
    ENTER: 13
};
export const keydownListen = ($vm) => {
    $vm.$el.addEventListener('keydown', function (e) {
        // 注册监听键盘事件
        if (!(e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
            // one key
            switch (e.keyCode) {
                case KEY_CODE.F8: {
                    // F8 导航
                    if ($vm.toolbars.navigation) {
                        e.preventDefault();
                        $vm.markBarClick('navigation')
                    }
                    break;
                }
                case KEY_CODE.F9: {
                    // F9 预览模式
                    if ($vm.toolbars.preview) {
                        e.preventDefault();
                        $vm.markBarClick('preview')
                    }
                    break;
                }
                case KEY_CODE.F10: {
                    // F10 全屏
                    if ($vm.toolbars.fullscreen) {
                        e.preventDefault();
                        $vm.markBarClick('fullscreen')
                    }
                    break;
                }
                case KEY_CODE.F11: {
                    // F11 阅读
                    if ($vm.toolbars.readmodel) {
                        e.preventDefault();
                        $vm.markBarClick('read')
                    }
                    break;
                }
                case KEY_CODE.F12: {
                    // F12 单双栏切花
                    if ($vm.toolbars.subfield) {
                        e.preventDefault();
                        $vm.markBarClick('subfield')
                    }
                    break;
                }
                case KEY_CODE.TAB: {
                    // TAB
                    if (!$vm.$refs.markdownBar.sImgLinkOpen) {
                        e.preventDefault();
                        $vm.insertTab();
                    }
                    break;
                }
                case KEY_CODE.ENTER: {
                    // enter
                    if ($vm.$refs.markdownBar.sImgLinkOpen) {
                        e.preventDefault();
                        $vm.$refs.markdownBar.$imgLinkAdd();
                    }
                    break;
                }
            }
        } else if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
            // ctrl +
            switch (e.keyCode) {
                case KEY_CODE.B: {
                    // B
                    e.preventDefault();
                    $vm.markBarClick('bold');
                    break;
                }
                case KEY_CODE.I: {
                    // I
                    e.preventDefault();
                    $vm.markBarClick('italic');
                    break;
                }
                case KEY_CODE.H: {
                    // H
                    e.preventDefault();
                    $vm.markBarClick('header');
                    break;
                }
                case KEY_CODE.U: {
                    // U
                    e.preventDefault();
                    $vm.markBarClick('underline');
                    break;
                }
                case KEY_CODE.D: {
                    // D
                    e.preventDefault();
                    $vm.markBarClick('strikethrough');
                    break;
                }
                case KEY_CODE.M: {
                    // M
                    e.preventDefault();
                    $vm.markBarClick('mark');
                    break;
                }
                case KEY_CODE.Q: {
                    // Q
                    e.preventDefault();
                    $vm.markBarClick('quote');
                    break;
                }
                case KEY_CODE.O: {
                    // O
                    e.preventDefault();
                    $vm.markBarClick('ol');
                    break;
                }
                case KEY_CODE.L: {
                    // L
                    e.preventDefault();
                    $vm.markBarClick('link');
                    break;
                }
                case KEY_CODE.S: {
                    // S
                    e.preventDefault();
                    $vm.markBarClick('save');
                    break;
                }
                case KEY_CODE.Z: {
                    // Z
                    e.preventDefault();
                    $vm.markBarClick('undo');
                    break;
                }
                case KEY_CODE.Y: {
                    // Y
                    e.preventDefault();
                    $vm.markBarClick('redo');
                    break;
                }
                case KEY_CODE.DELETE: {
                    // delete
                    e.preventDefault();
                    $vm.markBarClick('trash');
                    break;
                }
            }
        } else if ((e.ctrlKey || e.metaKey) && e.altKey && !e.shiftKey) {
            // ctrl + alt +
            switch (e.keyCode) {
                case KEY_CODE.S: {
                    // S
                    e.preventDefault();
                    $vm.markBarClick('superscript');
                    break;
                }
                case KEY_CODE.U: {
                    // U
                    e.preventDefault();
                    $vm.markBarClick('ul');
                    break;
                }
                case KEY_CODE.C: {
                    // C
                    e.preventDefault();
                    $vm.markBarClick('imagelink');
                    break;
                }
                case KEY_CODE.L: {
                    // L
                    e.preventDefault();
                    $vm.markBarClick('code');
                    break;
                }
                case KEY_CODE.T: {
                    // T
                    e.preventDefault();
                    $vm.markBarClick('table');
                    break;
                }
            }
        } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && !e.altKey) {
            // ctrl + shift
            switch (e.keyCode) {
                case KEY_CODE.S: {
                    // S
                    e.preventDefault();
                    $vm.markBarClick('subscript');
                    break;
                }
            }
        }
    });
};