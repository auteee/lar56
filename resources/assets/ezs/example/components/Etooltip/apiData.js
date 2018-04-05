export const apiData={
    'e-btn':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"anchor","default":"['top','middle']","type":"Array","desc":"锚点元素的位置信息，" +
                    "anchor[0]的可选值：['top', 'center', 'bottom'],anchor[1]的可选值：['left', 'middle', 'right']"},
                {"name":"tipself","default":"['top','middle']","type":"Array","desc":"tooltip元素本身的位置信息，" +
                    "tipself[0]的可选值：['top', 'center', 'bottom'],tipself[1]的可选值：['left', 'middle', 'right']"},
                {"name":"offset","default":"[5,5]","type":"Array","desc":"tooltip显示时的偏移量"},
                {"name":"anchorid","default":"undefined","type":"String","desc":"如果定义本项，则tooltip跟据id获取锚点元素的位置信息"},
                {"name":"delay","default":"0","type":"Number","desc":"tooltip延时显示时间"},
                {"name":"tag","default":"span","type":"String","desc":"tooltip本身标签"},
                {"name":"zIndex","default":"undefined","type":"String","desc":"html/5的z-index属性"},
                {"name":"maxHeight","default":"undefined","type":"String","desc":"tooltip最高高度"},
                {"name":"transition","default":"undefined","type":"String","desc":"tooltip显示时的动效"},
                {"name":"value","default":"undefined","type":"Any","desc":"控制可见性"},
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
