export const apiData={
    'e-btn':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"ripple","default":"undefined","type":"[String,Object]","desc":"v-ripple 指令(水纹效果)"},
                {"name":"tag","default":"button","type":"String","desc":"自定义组件的标签(button,a,span...)"},
                {"name":"href","default":"undefined","type":"String","desc":"a标签的href属性"},
                {"name":"target","default":"undefined","type":"String","desc":"a标签的target属性只有href存在时可用"},
                {"name":"to","default":"undefined","type":"String","desc":"将组件标签指定为<router-link>"}
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
