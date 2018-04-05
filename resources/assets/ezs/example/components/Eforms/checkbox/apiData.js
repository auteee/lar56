export const apiData={
    'e-checkbox':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"label","default":"undefined","type":"String","desc":"设置标签"},
                {"name":"inputValue","default":"undefined","type":"Any","desc":"v-model 的绑定值"},
                {"name":"indeterminate","default":"undefined","type":"Boolean","desc":"为复选框设置不确定状态"},
                {"name":"ripple","default":"true","type":"String","desc":"应用v-ripple指令"},
                {"name":"value","default":"undefined","type":"Any","desc":"设置选择控件组件的值"}
            ]},
        // {
        //     "title":"SLOTS(插曹)",
        //     value:[
        //         {"name":"default","desc":"Vue默认原生插槽"},
        //     ]
        // },
        // {
        //     "title":"EVENTS(事件)",
        //     value:[
        //         {"name":"cs","default":"undefined","type":"String","desc":""},
        //         {"name":"disabled","default":"undefined","type":"String","desc":""},
        //         {"name":"ripple","default":"undefined","type":"String","desc":""}
        //     ]
        // }
    ],
    'e-radio-group':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"column","default":"true","type":"Boolen","desc":"单选框列显示"},
                {"name":"inputValue","default":"undefined","type":"Any","desc":"v-model 的绑定值"},
                {"name":"mandatory","default":"true","type":"Boolean","desc":"强制选择复选框组的一个子复选框 v-radio"},
                {"name":"name","default":"true","type":"String","desc":"设置组件的 name 属性"},
                {"name":"row","default":"undefined","type":"Boolean","desc":"设置选择控件组件的值"}
            ]
        },
        {
            "title":"SLOTS(插曹)",
            value:[
                {"name":"default","desc":"Vue默认原生插槽"},
                {"name":"label","desc":"替换默认标签"},
            ]
        },
        {
            "title":"EVENTS(事件)",
            value:[
                {"name":"blur","Value":"any","desc":""},
                {"name":"change","Value":"any","desc":""}
            ]
        }
    ],
    'e-radio':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"label","default":"undefined","type":"String","desc":"设置标签"},
                {"name":"ripple","default":"true","type":"String","desc":"应用v-ripple指令"},
                {"name":"value","default":"undefined","type":"Any","desc":"设置选择控件组件的值"}
            ]
        },
        {
            "title":"EVENTS(事件)",
            value:[
                {"name":"change","Value":"any","desc":""}
            ]
        }
    ],
    'e-radios':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"inputValue","default":"undefined","type":"Any","desc":"v-model 的绑定值"},
                {"name":"radios","default":"undefined","type":"[Array,Object]","desc":"提供radio数据格式[{label:'',value:''}....]"},
                {"name":"ripple","default":"true","type":"String","desc":"应用v-ripple指令"},
                {"name":"value","default":"undefined","type":"Any","desc":"设置选择控件组件的值"},
                {"name":"row","default":"undefined","type":"Boolean","desc":"设置选择控件组件的值"}
            ]
        },
    ],
    'e-switch':[
        {"title":"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"disabled","default":"undefined","type":"Boolen","desc":"元素是否可用"},
                {"name":"inputValue","default":"undefined","type":"Any","desc":"v-model 的绑定值"},
                {"name":"activeClass","default":"primary","type":"String","desc":"开关活动状态颜色"},
                {"name":"ripple","default":"true","type":"String","desc":"应用v-ripple指令"},
                {"name":"value","default":"undefined","type":"Any","desc":"设置选择控件组件的值"},
                {"name":"label","default":"undefined","type":"String","desc":"设置标签"}
            ]
        },
    ]
};
