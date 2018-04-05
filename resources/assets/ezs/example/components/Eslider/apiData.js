export const apiData={
    'e-slider':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"label","default":"undefined","type":"String","desc":"label标签"},
                {"name":"prependIcon","default":"button","type":"String","desc":"前置图标"},
                {"name":"prependIconCb","default":"undefined","type":"Function","desc":"前置图标函数"},
                {"name":"appendIcon","default":"undefined","type":"Boolen","desc":"后置图标"},
                {"name":"appendIconCb","default":"undefined","type":"Function","desc":"后置图标函数"},
                {"name":"ticks","default":"undefined","type":"Boolen","desc":"带有刻度的"},
                {"name":"tabindex","default":"0","type":"Number","desc":"tabindex索引"},
                {"name":"min","default":"0","type":"[Number, String]","desc":"最小值"},
                {"name":"max","default":"100","type":"[Number, String]","desc":"最大值"},
                {"name":"step","default":"undefined","type":"String","desc":"增长度数"},
                {"name":"handlecs","default":"undefined","type":"String","desc":"hand的css样式"},
                {"name":"handleLabel","default":"undefined","type":"Boolen","desc":"显示小提示"},
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
