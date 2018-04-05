export const apiData={
    'e-btn-dial':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"openOnHover","default":"undefined","type":"Boolen","desc":"是否鼠标滑过显示，如果开启刚鼠标滑过可见"},
                {"name":"posxy","default":"space-r-b","type":"String","desc":"显示位置，分左上(space-l-t)，左下(space-l-b)，右上(space-r-t)，右下(space-r-b)"},
                {"name":"direction","default":"left","type":"String","desc":"弹出层显示方向，上(top)，下(bottom)，左(left)，右(right)"},
                {"name":"transition","default":"undefined","type":"String","desc":"动画效果，见vue文档"},
                {"name":"mode","default":"undefined","type":"String","desc":"动画效果，见vue文档"},
                {"name":"origin","default":"undefined","type":"String","desc":"动画效果，见vue文档"},
                {"name":"value","default":"undefined","type":"Any","desc":"元素的可见性"}
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
