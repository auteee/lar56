export const apiData={
    'e-dialog':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"persistent","default":"undefined","type":"Boolen","desc":"点击对话框外部不能使其关闭"},
                {"name":"fullscreen","default":"button","type":"Boolen","desc":"改变布局全屏显示"},
                {"name":"fullWidth","default":"undefined","type":"Boolen","desc":"指定模态框强制100%宽度"},
                {"name":"closed","default":"undefined","type":"Boolen","desc":"内置关闭按钮"},
                {"name":"maxWidth","default":"300px","type":"[String,Number]","desc":"内容的最大宽度"},
                {"name":"origin","default":"center center","type":"String","desc":"设置过渡原点"},
                {"name":"width","default":"auto","type":"String","desc":"设置对话框的宽度"},
                {"name":"scrollable","default":"undefined","type":"String","desc":"对话框是否可滚动"},
                {"name":"transition","default":"dialog-transition","type":"String","desc":"过度效果"},
                {"name":"hide-overlay","default":"undefined","type":"String","desc":"隐藏遮罩"},
                {"name":"value","default":"undefined","type":"Any","desc":"组件的可见性"}
            ]},
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"default","desc":"Vue默认原生插槽"},
            ]
        },
        // {
        //     "title":"EVENTS(事件)",
        //     value:[
        //         {"name":"cs","default":"undefined","type":"String","desc":""},
        //         {"name":"disabled","default":"undefined","type":"String","desc":""},
        //         {"name":"ripple","default":"undefined","type":"String","desc":""}
        //     ]
        // }
    ]
};
