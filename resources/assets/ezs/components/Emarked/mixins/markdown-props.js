import {CONFIG} from "../lib/config";
export default {
    props:{

        placeholder: {
            type: String,
            default: null
        },

        help: {
            type: String,
            default: null
        },
        // 是否开启工具栏
        toolbarsFlag: {
            type: Boolean,
            default: true
        },
        // 默认展示 edit & 其他 为编辑区域 preview  为预览区域
        defaultOpen: {
            type: String,
            default: null
        },
        subfield: {
            type: Boolean,
            default: true
        },
        // 初始value
        value: {
            type: String,
            default: ''
        },
        // 初始语言
        language: {
            type: String,
            default: 'cn'
        },
        // 是否开启编辑
        editable: {
            type: Boolean,
            default: true
        },
        // 工具栏
        toolbars: {
            type: Object,
            default() {
                return CONFIG.toolbars
            }
        },
    },
}