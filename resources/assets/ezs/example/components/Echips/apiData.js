export const apiData={
    'e-chip':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"禁用厚切薯条，使其不可选择"},
                {"name":"closed","default":"undefined","type":"Boolen","desc":"添加删除按钮"},
                {"name":"selected","default":"undefined","type":"Boolen","desc":"将选择框颜色应用于厚切薯条，主要用于在e-select中显示高亮上下文"},
                {"name":"value","default":"true","type":"Any","desc":"控制可见性"}
            ]},
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"badge","desc":"将用于徽章的插槽"},
                {"name":"default","desc":"Vue默认原生插槽"},
            ]
        },
        {
            "title":"EVENTS(事件)",
            value:[
                {"name":"input","value":"boolean","desc":"被绑定模型的更新"},
            ]
        }
    ]
};
