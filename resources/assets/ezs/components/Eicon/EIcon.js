//_icons.styl,aowsmoe
//const iconPrefix=['fa'];
export default {
    name:'e-icon',
    functional: true,
    mixins: [],
    props:{
        cs:String,
        disabled: Boolean,
        icon:String
        //第三方前缀
        //prefix:String
    },
    render (h, { props, data, children = [] }){
        let iconName='';
            //iconType='';
        if(props.icon){
            iconName=props.icon
        }else if(children.length){
            iconName=children.pop().text;
        }else{
            console.info('请设置正确设置icon参数')
        }
        data.staticClass='icon';
        //if(props.prefix) data.staticClass += ` ${props.prefix}`;
        data.staticClass += ` ${iconName}`;
        if(props.disabled) data.staticClass += ' disabled';
        if(props.cs) {
            data.staticClass += ' ';
            data.staticClass +=props.cs;
        }
        data.attrs = data.attrs || {};
        return h('i', data, children)
    }
}