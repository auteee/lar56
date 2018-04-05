export const apiData={
    'e-card':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"height","default":"auto","type":"String","desc":"手动定义卡片的高度"},
                {"name":"width","default":"undefined","type":"String, Number","desc":"内容的宽度"},
                {"name":"img","default":"undefined","type":"String","desc":"指定一个图像背景"},
                {"name":"tag","default":"button","type":"String","desc":"自定义组件的标签(button,a,span...)"},
                {"name":"href","default":"undefined","type":"String","desc":"a标签的href属性"},
                {"name":"target","default":"undefined","type":"String","desc":"a标签的target属性只有href存在时可用"},
                {"name":"to","default":"undefined","type":"String","desc":"将组件标签指定为<router-link>"},
                {"name":"exact-active-class","default":"undefined","type":"String","desc":"Vue Router的 router-link属性"},
                {"name":"append","default":"false","type":"Boolean","desc":"Vue Router的router-link属性"},
                {"name":"exact","default":"false","type":"Boolean","desc":"完全匹配链接，没有这个的话，“/”将匹配每一个路由"},
                {"name":"replace","default":"false","type":"Boolean","desc":"Vue Router router-link 属性"},
                {"name":"ripple","default":"undefined","type":"Boolean,Object","desc":"使用v-ripple指令"},
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
    'e-card-header':[
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"default","desc":"Vue默认原生插槽"},
            ]
        }
    ],
    'e-card-body':[
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"default","desc":"Vue默认原生插槽"},
            ]
        }
    ],
    'e-card-footer':[
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"default","desc":"Vue默认原生插槽"},
            ]
        }
    ],
    'e-card-media':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"height","default":"auto","type":"String","desc":"手动定义卡片的高度"},
                {"name":"img","default":"undefined","type":"String","desc":"指定一个图像背景"},
                {"name":"tag","default":"button","type":"String","desc":"自定义组件的标签(button,a,span...)"},
                {"name":"contain","default":"undefined","type":"Boolean","desc":"修改包含的背景大小来"}
            ]
        },
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"default","desc":"Vue默认原生插槽"},
            ]
        }
    ]
};
