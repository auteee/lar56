export const apiData={
    'e-menu':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"blocked","default":"undefined","type":"Boolen","desc":"v-ripple 指令(水纹效果)"},
                {"name":"offsetX","default":"undefined","type":"Boolean","desc":"在x轴上偏移菜单，与左/右方向一起工作"},
                {"name":"offsetY","default":"undefined","type":"Boolean","desc":"在y轴上偏移菜单，与上/下方向一起工作"},
                {"name":"origin","default":"top left","type":"String","desc":"设置过渡原点"},
                {"name":"closeOnClick","default":"undefined","type":"String","desc":"指定菜应该在外部激活器被点击时关闭。"},
                {"name":"closeOnContentClick","default":"button","type":"String","desc":"指定点击内容时菜单是否应该关闭。"},
                {"name":"openOnClick","default":"true","type":"Boolean","desc":"点击时显示菜单"},
                {"name":"openOnHover","default":"undefined","type":"String","desc":"鼠标滑过时显示"},
                {"name":"transition","default":"undefined","type":"String","desc":"过度效果"},
                {"name":"anchor","default":"undefined","type":"Any","desc":"菜单挂载/显示的锚点位置"},
                {"name":"allowOverflow","default":"button","type":"String","desc":"自定义组件的标签(button,a,span...)"},
                {"name":"maxWidth","default":"undefined","type":"String","desc":"设置内容的最大宽度"},
                {"name":"maxHeight","default":"undefined","type":"String","desc":"设置内容的最大高度"},
                {"name":"minWidth","default":"undefined","type":"String","desc":"设置内容的最小宽度"},
                {"name":"nudgeBottom","default":"undefined","type":"String","desc":"向底部微调内容"},
                {"name":"nudgeLeft","default":"button","type":"String","desc":"向左侧微调内容"},
                {"name":"nudgeRight","default":"undefined","type":"String","desc":"向右侧微调内容"},
                {"name":"nudgeTop","default":"undefined","type":"String","desc":"向顶部微调内容"},
                {"name":"nudgeWidth","default":"undefined","type":"String","desc":"微调内容宽度"},
                {"name":"offsetOverflow","default":"undefined","type":"String","desc":"当由于溢出而重新定位时，导致组件翻转到另一侧"},
                {"name":"position-x","default":"undefined","type":"String","desc":"用于在不使用激活器插槽时定位内容"},
                {"name":"position-y","default":"undefined","type":"String","desc":"用于在不使用激活器插槽时定位内容"},
                {"name":"zIndex","default":"button","type":"String","desc":"用于组件的z-index"},
                {"name":"absolute","default":"undefined","type":"Boolean","desc":"给元素设置绝对定位"},
                {"name":"bottom","default":"undefined","type":"String","desc":"将组件向底部对齐"},
                {"name":"fixed","default":"undefined","type":"String","desc":"给元素设置固定定位"},
                {"name":"left","default":"undefined","type":"String","desc":"将组件向左边对齐"},
                {"name":"right","default":"undefined","type":"String","desc":"将组件向右边对齐"},
                {"name":"top","default":"undefined","type":"String","desc":"将组件向顶部对齐"},
                {"name":"value","default":"undefined","type":"String","desc":"控制可见性"},

            ]},
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"anchor","desc":"Vue默认原生插槽"},
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
