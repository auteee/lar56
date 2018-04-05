import Resize from '../../directives/resize'

export default {
    name:'e-tabs',
    directives:{ Resize },

    provide () {
        return {
            registerContent: this.registerContent,
            unregisterContent: this.unregisterContent,
            registerTabNav: this.registerTabNav,
            unregisterTabNav: this.unregisterTabNav,
            next: this.next,
            prev: this.prev,
            slider: this.slider,
            tabClick: this.tabClick,
            isScrollable: () => this.scrollable,
            isMobile: () => this.isMobile
        }
    },
    data(){
      return{
          activeIndex: null,    //当前活动index
          reverse: false,       //正反向
          content: [],          //存放content数组
          tabNavs:[],           //存放导航header数组
          //以下用于计算slider的移动动画
          target: null,         //点击目标的　to 或者href 内容，　tabContent 的id
          targetEl: null,       //点击目标的 $el
          tabsNavContainer:null,         //用于计算.tabs-header 的 width  tab-nav的容器
          tabsSlider: null,
          //
          resizeTimeout: null,
          transitionTime: 300,
          isBooted: false,
          lazyValue:this.value
      }
    },
    props:{
        cs:String,
        fixed: Boolean,
        icons: Boolean,
        mobileBreakPoint: {
            type: [Number, String],
            default: 1280
        },
        scrollable: {
            type: Boolean,
            default: true
        },
        value:{ required:false}
    },
    computed:{
        classes () {
            let classes={
                'tabs': true,
                'mobile': this.isMobile,
                'tabs-fixed': this.fixed,
                'tabs-icons': this.icons,
                [this.cs]:this.cs
            };
            return classes;
        },
        isMobile(){
            return this.$ezs.breakpoint.width < this.mobileBreakPoint
        }
    },
    watch:{
        value (val) {
            const tab = this.tabNavs.find(tab => tab.action === val) || this.tabNavs[val];
            tab && this.tabClick(tab);
        },
        activeIndex () {
            this.updateTabs();
            this.$nextTick(() => (this.isBooted = true))
        },
        //isBooted:'findActiveLink',
        // tabNavs () {
        //     console.info(this.tabNavs);
        //     //this.findActiveLink();
        // },
        '$ezs.application.left' () {
            this.onContainerResize()
        },
        '$ezs.application.right' () {
            this.onContainerResize()
        }
    },
    mounted () {
        this.$nextTick(()=>{
            //console.info(this.tabNavs[0]);
            //this.$emit('update');
            this.findActiveLink();
        });

        //初始化tabs
        // const i = this.tabNavs.findIndex((tabItem, index) => {
        //     console.info(index);
        //     const id = tabItem.action === tabItem ? index : tabItem.action;
        //     return id === this.lazyValue || tabItem.$el.firstChild.className.indexOf(this.activeClass) > -1
        // });
        // const tab = this.tabNavs[i !== -1 ? i : 0] || {};
        // tab && this.tabClick(tab)

    },
    methods:{
        findActiveLink(){
            const i = this.tabNavs.findIndex((tabItem, index) => {
                const id = tabItem.action === tabItem ? index : tabItem.action;
                return id === this.lazyValue || tabItem.$el.firstChild.className.indexOf(this.activeClass) > -1
            });
            //let tab=this.tabNavs;
            //console.info(this.tabNavs.length);
            const tab = this.tabNavs[i !== -1 ? i : 0] || {};
            tab && this.tabClick(tab);
        },
        registerContent (content) {
            this.content.push(content)
        },
        unregisterContent (content) {
            this.content = this.content.filter(o => o !== content)
        },
        registerTabNav(nav){
            this.tabNavs.push(nav);
        },
        unregisterTabNav(nav){
            this.tabNavs=this.tabNavs.filter(o=> o !== nav);
        },

        onContainerResize () {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(this.onResize, this.transitionTime)
        },
        next (cycle) {
            let nextIndex = this.activeIndex + 1;

            if (!this.content[nextIndex]) {
                if (!cycle) return;
                nextIndex = 0
            }

            this.tabClick(this.tabNavs[nextIndex])
        },
        prev (cycle) {
            let prevIndex = this.activeIndex - 1;

            if (!this.content[prevIndex]) {
                if (!cycle) return;
                prevIndex = this.content.length - 1
            }

            this.tabClick(this.tabNavs[prevIndex])
        },
        tabClick(target){
            const setActiveIndex = index => {
                if (this.activeIndex === index) {
                    this.updateTabs()
                } else {
                    this.activeIndex = index
                }
                this.$emit('input', this.target);
            };

            this.target = target.action === target ? this.tabNavs.indexOf(target) : target.action;
            this.$nextTick(() => {
                const nextIndex = this.tabNavs.findIndex((tab, index) => {
                    const id = tab.action === tab ? index : tab.action;
                    return id === this.lazyValue || id===this.target;
                });

                this.reverse = nextIndex < this.activeIndex;
                setActiveIndex(nextIndex);
            });

        },
        updateTabs () {
            this.content.forEach(({ toggle },index) => {
                toggle(this.target, this.reverse, this.isBooted,index)
            });

            this.tabNavs.forEach(({ toggle },index) => {
                toggle(this.target,index)
            })
        },
        onResize(){
            this.slider();
        },
        slider (el) {
            this.tabsSlider = this.tabsSlider ||
                !!this.$el && this.$el.querySelector('.tabs-slider');

            this.tabsNavContainer = this.tabsNavContainer ||
                !!this.$el && this.$el.querySelector('.tabs-nav-container');
            //
            if (!this.tabsSlider || !this.tabsNavContainer) return;
            //
            this.targetEl = el || this.targetEl;
            if (!this.targetEl) return;
            // Gives DOM time to paint when
            // processing slider for
            // dynamic tabs
            this.$nextTick(() => {
                const width = (this.targetEl.scrollWidth / this.tabsNavContainer.clientWidth * 100);
                this.tabsSlider.style.width = `${width}%`;
                this.tabsSlider.style.left = `${this.targetEl.offsetLeft}px`
            })
        },
    },
    render(h){
        return h('div', {
            'class': this.classes,
            directives: [{
                name: 'resize',
                value: this.onResize
            }]
        }, this.$slots.default)
    }
}