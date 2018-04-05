export const apiData={
    'e-progress-circular':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"indeterminate","default":"undefined","type":"Boolen","desc":"处于循环状态"},
                {"name":"fill","default":"button","type":"Boolen","desc":"改变布局全屏显示"},
                {"name":"rotate","default":"undefined","type":"Boolen","desc":"设置角度"},
                {"name":"size","default":"undefined","type":"Boolen","desc":"设置元素的高度和宽度"},
                {"name":"width","default":"300px","type":"[String,Number]","desc":"内容的宽度"},
                {"name":"button","default":"center center","type":"String","desc":"设置过渡原点"},
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
    ],
    'e-progress-linear':[
        {
            "title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"indeterminate","default":"undefined","type":"Boolen","desc":"处于循环状态"},
                {"name":"percentage","default":"button","type":"Boolen","desc":"当前进度百分比"},
                {"name":"stripe","default":"undefined","type":"Boolen","desc":"条纹"},
                {"name":"buffer","default":"undefined","type":"Number","desc":"设置缓冲区"},
                {"name":"height","default":"7","type":"[String,Number]","desc":"设置高度"},
                {"name":"value","default":"7","type":"Any","desc":"组件的可见性"}
            ]
        }
    ]
};
