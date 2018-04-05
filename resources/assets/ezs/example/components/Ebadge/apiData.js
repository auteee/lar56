export const apiData={
    'e-badge':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"bottom","default":"undefined","type":"Boolen","desc":"将组件向底部对齐"},
                {"name":"left","default":"undefined","type":"Boolen","desc":"将组件向左边对齐"},
                {"name":"overlap","default":"undefined","type":"Boolen","desc":"组件将折叠插槽里的内容"},
                {"name":"mode","default":"undefined","type":"String","desc":"详见vue官方文档"},
                {"name":"origin","default":"undefined","type":"String","desc":"详见vue官方文档"},
                {"name":"dh","default":"fab-transition","type":"String","desc":"(transition的别名)设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。"},
                {"name":"value","default":"true","type":"Any","desc":"控制可见性"}
            ]},
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"badge","desc":"将用于徽章的插槽"},
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
