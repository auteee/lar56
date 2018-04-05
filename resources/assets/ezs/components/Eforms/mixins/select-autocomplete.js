export default {
    props: {
        filter: {
            type: Function,
            default: (item, queryText, itemText) => {
                const hasValue = val => val != null ? val : '';

                const text = hasValue(itemText);
                const query = hasValue(queryText);

                return text.toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
            }
        }
    },
    methods:{
        filterSearch (text) {
            //if (!this.isAutocomplete) return this.computedItems;

            return this.options.filter(i => this.filter(
                i, text, i.value)
            )
            // return this.options.filter(o=>{
            //     return o.value.indexOf(text)!=-1;
            // })
        },
    }
}