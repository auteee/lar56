export default {
    name:'e-avatar',
    functional: true,
    props:{
        cs:String,
        size: {
            type: String,
            default: '48px'
        },
        img:String,
        tile: Boolean
    },
    render (h, { data, props, children }) {
        data.staticClass = (`avatar ${props.cs  || ''} ${data.staticClass || ''}`).trim();
        data.style = data.style || {};

        if (props.tile) data.staticClass += ' tile';

        data.style.height = props.size;
        data.style.width = props.size;
        if(props.img){
            let img_src="<img src='"+props.img+"' />";
            data.domProps.innerHTML=img_src;
            return h('div',data);
        }

        return h('div', data, children)
    }
}