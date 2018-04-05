

export default {
    name: 'e-divider',

    functional: true,

    props: {
        cs:String,
        inset: Boolean
    },

    render (h, { props, data, children }) {
        data.staticClass = (`divider ${data.staticClass || ''}`).trim();

        if (props.inset) data.staticClass += ' inset';
        if (props.cs){
            data.staticClass += ' ';
            data.staticClass += props.cs;
        }

        return h('hr', data)
    }
}
