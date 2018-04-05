export const apiData={
    'e-list':[
        {
            title:"PROPS(配置数据)",
            value:[
                {"name":"cs","default":"undefined","type":"String","desc":"class的缩写 可用值见下面示例"},
                {"name":"twoline","default":"undefined","type":"Boolen","desc":"lists 的descs说明项可显示一行"},
                {"name":"threeline","default":"undefined","type":"Boolen","desc":"lists 的descs说明项可显示二行"},
                {"name":"multiline","default":"undefined","type":"Boolen","desc":"lists 的descs说明项可显示多行"},
                {"name":"checkbox","default":"undefined","type":"Boolen","desc":"设置此项时，v-model需要绑定数组，为多选"},
                {"name":"radio","default":"undefined","type":"Boolen","desc":"设置此项时，v-model需要绑定字符串，为单选"},
                {"name":"activeClass","default":"primary","type":"String","desc":"list 选中状态的class样式"},
                {"name":"eActive","default":"undefined","type":"Boolen","desc":"是否开启list选中状态"},
                {"name":"lists","default":"undefined","type":"Array",
                    "desc":"配置项[{header:'可选',title:'可选',value:'必选',icon:'',avatar:'',descs:'',action:'',divider:'',css:''}]"},
                {"name":"value","default":"undefined","type":"Any","desc":"vue v-model 默认关联的值(input事件)"}
            ]
        },
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
    ]
};
