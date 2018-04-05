export const apiData={
    'e-toolbar':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"dense","default":"undefined","type":"Boolen","desc":"减小工具栏内容和扩展的高度"},
                {"name":"extended","default":"undefined","type":"[String,Object]","desc":"强制工具栏生成扩展名而不使用插槽"},
                {"name":"floating","default":"button","type":"String","desc":"使工具栏内联浮动"},
                {"name":"height","default":"undefined","type":"String","desc":"为工具栏指定一个特定的高度"},
                {"name":"prominent","default":"undefined","type":"String","desc":"增加工具栏内容和扩展的高度"},
                {"name":"manualScroll","default":"undefined","type":"String","desc":"手动应用滚动屏幕功能"},
                {"name":"scrollOffScreen","default":"undefined","type":"String","desc":"当向下滚动时工具栏会过渡到屏幕外。"},
                {"name":"scrollTarget","default":"undefined","type":"String","desc":"为滚动屏幕指定滚动目标"},
                {"name":"scrollThreshold","default":"undefined","type":"String","desc":"工具栏使用滚动屏幕之前滚动的距离"}
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
