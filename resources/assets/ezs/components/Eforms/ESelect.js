
import EList from '../Elist'
import EDivider from '../Egrids/EDivider'
import EInput from './EInput'


import Generators from './mixins/select-generators'
//import popPosition from './mixins/pop-position'
import Event from './mixins/select-event'
import InputGroup from '../../mixins/inputGroup'
import Popup from "../../mixins/popup";
import Portal from '../../mixins/portal'

import Resize from '../../directives/resize'

export default {
    name:'e-select',
    components:{ EList,EInput,EDivider },
    mixins:[ Generators,Event,Popup,Portal,InputGroup],
    directives: { Resize },
    model: {
        prop: 'inputValue',
        event: 'change'
    },
    data(){
      return{
          isFocused: false,
          showPopList:false,
          isActive:false,
          selectedIndex: -1,
          //selectedItems: [],
          filters:'',
          timer:null,
          //search
          lazySearch:null,
          searchTimeout: null,
          selectedItem:null,
      }
    },
    props:{
        nudgeTop:{
            type:Number,
            default:18
        },
        offsetY:{
            type:Boolean,
            default:true,
        },
        radio:Boolean,
        options:Array,
        autocomplete: Boolean,
        multiple:Boolean,           //多选
        inputValue:null,
        transition:{
            type:String,
            default:'slide-y-transition'
        },
        //searchInput: { default: null},
        filter: {
            type: Function,
            default: (item, queryText) => {
                let text = item.value;
                return text.toString()
                    .toLowerCase()
                    .indexOf(queryText.toString().toLowerCase()) > -1;
            }
        }
    },
    computed:{
        hasText(){
            if(this.inputValue===0) return true;
            if(this.inputValue){
                return this.inputValue.toString().length > 0
            }
            return false;
        },
        //options 样式
        optionstyle(){
            return {
                //maxHeight:this.maxHeight
                maxHeight: this.calculatedMaxHeight,
            }
        },
        isAutocomplete () {
            return this.autocomplete || this.editable || this.tags || this.combobox
        },
        ///
        listItems () {
            if(this.lazySearch==null || this.lazySearch===''){
                return this.options;
            }
            return this.filterSearch(this.lazySearch);
        },

        //计算位置
        calculatedLeft () {
            let left = this.calcLeft;
            //if (this.auto) left = this.calcLeftAuto;
            return `${this.calcXOverflow(left())}px`
        },
        calculatedMaxHeight () {
            return isNaN(this.maxHeight)
                ? this.maxHeight
                : `${this.maxHeight}px`
        },
        calculatedMaxWidth () {
            return isNaN(this.maxWidth)
                ? this.maxWidth
                : `${this.maxWidth}px`
        },
        calculatedMinWidth () {
            if (this.minWidth) {
                return isNaN(this.minWidth)
                    ? this.minWidth
                    : `${this.minWidth}px`
            }

            const minWidth = (
                this.dimensions.anchor.width +
                this.nudgeWidth +
                (this.auto ? 16 : 0)
            );

            const calculatedMaxWidth = isNaN(parseInt(this.calculatedMaxWidth))
                ? minWidth
                : parseInt(this.calculatedMaxWidth);

            return `${Math.min(
                calculatedMaxWidth,
                minWidth
            )}px`
        },
        calculatedTop () {
            const top = this.calcTop;

            return `${this.calcYOverflow(top())}px`
        },
        styles () {
            return {
                minWidth: this.calculatedMinWidth,
                maxWidth: this.calculatedMaxWidth,
                top: this.calculatedTop,
                left: this.calculatedLeft,
                transformOrigin: this.origin,
                zIndex: this.zIndex || this.activeZIndex
            }
        },

    },
    watch:{
        isActive (val) {
            if(!val){
                this.blur();
            }
        },
        inputValue(val){
            this.genSelectedItems();
            val !== this.value && this.$emit('input', val);
        },
        options(){  //解决挂载时opintos 显示项有变化
            this.genSelectedItems();
        }
    },
    mounted () {
        //组件已经销毁，刚返回
        //this.genSelectedItems();
        if (this._isDestroyed) return;
        this.changeParentEl(this.$refs.popself,(this.eTarget || document.body))
    },
    beforeDestroy () {
        this.killGhostElement(this.$refs.popself)
    },
    methods:{
        //初始化选中项
        genSelectedItems (val = this.inputValue) {

            if(this.multiple) return;
            let selected = this.options.filter(i => {
                return i.value===this.inputValue
            });
            this.selectedItem=selected[0];
        },
        //显示弹出层
        openPopList () {
            this.checkForWindow();
            if (!this.hasWindow) return;
            this.updateDimensions();
            // Start the transition
            requestAnimationFrame(this.startTransition);
            // Once transitioning, calculate scroll position
            setTimeout(this.calculateScroll, 50)
        },
        startTransition () {
            requestAnimationFrame(() => (this.showPopList = true))
        },
        //过滤list列表
        filterSearch (text) {
            return this.options.filter(i => {
                    return this.filter(i, text)
                }
            );
        },
        //单个选取options和多个选取
        selectItem (item) {
            if (!this.multiple) {
                //let v=item.value?item.value:item.title;
                //this.selectedItem=item; //显示值
                this.$emit('change', item.value); //真实值
                this.isActive=false;
            } else {
                let input = this.inputValue;
                let inputs;
                if (Array.isArray(input)) {
                    inputs = input.slice();
                    const i = inputs.indexOf(item.value);
                    i===-1 && inputs.push(item.value) || inputs.splice(i, 1);
                    this.$emit('input', inputs);
                }else{
                    console.info('cuowu');
                }
            }
        },
        onResize () {
            if (!this.isActive) return;
            //this.updatePosition();

            clearTimeout(this.resizeTimeout);
            //this.resizeTimeout = setTimeout(this.updatePosition, 100)
        }
    },
    render(h){

        const children=[];

        children.push(h('div',{'class': 'selected'},this.genSelections()));
        //children.push([this.genSelections()]);
        //select选项
        this.options && children.push(h('transition',{props:{name:this.transition}},[this.genOptionsList(h,this.listItems)]));

        const data = {
            attrs: {
                tabindex: this.autocomplete || this.disabled ? -1 : this.tabindex,
                ...(this.autocomplete ? null : this.$attrs),
                role: this.autocomplete ? 'combobox' : null
            },
            directives: [{
                name: 'resize',
                value: {
                    debounce: 500,
                    value: this.onResize
                }
            }],
            ref:'anchor'
        };
        data.on = this.genListeners();

        return this.genInputGroup(children, data)
        //return h('div',data,children)
    }
}