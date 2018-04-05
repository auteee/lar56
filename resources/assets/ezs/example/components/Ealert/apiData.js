export const apiData={
    'e-alert':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"closed","default":"undefined","type":"Boolen","desc":"内置关闭按钮"},
                {"name":"icon","default":"undefined","type":"String","desc":"icon图标"},
                {"name":"type","default":"undefined","type":"String","desc":"(info,success,waring,error)四选一"},
                {"name":"value","default":"undefined","type":"String","desc":"a标签的href属性"},
                {"name":"animate","default":"undefined","type":"Array","desc":"过度动画效果数组[in,out]"}
            ]},
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"default","desc":"Vue默认原生插槽"},
            ]
        },
        {
            "title":"EVENTS(事件)",
            value:[
                {"name":"input","boolean":"","desc":"被绑定模型的更新"},
            ]
        }
    ]
};
