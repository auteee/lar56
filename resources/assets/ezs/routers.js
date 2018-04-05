import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
    linkActiveClass:'active',
    scrollBehavior:()=>({y:0}),
    routes:[
        {
            path:'/',
            name:'Home',
            component:require('./example/Home')
        },{
            path:'/animate',
            name:'Animate',
            component:require('./example/components/Eanimate/animate')
        },
        {path:'/layout/globalStyle', name:'globalStyle', component:require('./example/layout/globalStyle/globalStyle')},
        {path:'/layout/grid&breakpoints', name:'grid&breakpoints', component:require('./example/layout/gridBreakpoints/gridBreakpoint')},
        //////////////////////
        {path:'/another', name:'another', component:require('./example/components/Another/another')},
        {path:'/buttonsDial', name:'ButtonsDial', component:require('./example/components/Ebtn/BtnDial')},
        {path:'/markdowns', name:'Markdowns', component:require('./example/components/Emarkdown/markdowns')},
        {path:'/dataTables', name:'DataTables', component:require('./example/components/Edatatable/datatable')},
        {path:'/bottomNavs', name:'BottomNavs', component:require('./example/components/Ebottom/bottomNav')},
        //{path:'/popovers', name:'Popovers', component:require('./example/Epopover/popover')},
        {path:'/tooltips', name:'Tooltips', component:require('./example/components/Etooltip/tooltip')},
        {path:'/carousels', name:'Carousels', component:require('./example/components/Ecarousel/carousel')},
        {path:'/steppers', name:'Steppers', component:require('./example/components/Estepper/stepper')},
        {path:'/parallaxs', name:'Parallaxs', component:require('./example/components/Eparallax/parallax')},
        {path:'/sliders', name:'Sliders', component:require('./example/components/Eslider/sliders')},
        {path:'/progress', name:'Progress', component:require('./example/components/Eprogress/progress')},
        {path:'/dialogs', name:'Dialogs', component:require('./example/components/Edialog/dialogs')},
        {path:'/bars', name:'Bars', component:require('./example/components/Ebars/bars')},
        {path:'/notifys', name:'Notify', component:require('./example/components/Enotify/notify')},
        {path:'/selects', name:'Selects', component:require('./example/components/Eforms/select')},
        {path:'/lists', name:'Lists', component:require('./example/components/Elist/lists')},
        {path:'/menus', name:'Menus', component:require('./example/components/Emenu/menus')},
        {path:'/tabs', name:'Tabs', component:require('./example/components/Etabs/Tabs')},
        {path:'/chips', name:'Chips', component:require('./example/components/Echips/chips')},
        {path:'/badges', name:'Badges', component:require('./example/components/Ebadge/Badges')},
        {path:'/avatars', name:'Avatars', component:require('./example/components/Eavatar/Avatars')},
        {path:'/alerts', name:'Alerts', component:require('./example/components/Ealert/Alerts')},
        {path:'/buttons', name:'Buttons', component:require('./example/components/Ebtn/Buttons')},
        {path:'/icons', name:'Icons', component:require('./example/components/Eicon/icons')},
        {path:'/apps', name:'Apps', component:require('./example/components/Eapps/apps')},
        {path:'/grids', name:'Grids', component:require('./example/components/Egrid/Grids')},
        {path:'/cards', name:'Cards', component:require('./example/components/Ecards/Cards')},
        {path:'/forms/input', name:'input', component:require('./example/components/Eforms/input')},
        {path:'/forms/checkbox&radio', name:'checkbox&radio', component:require('./example/components/Eforms/checkbox-radio')},
        //{path:'/forms/radio', name:'radio', component:require('./example/components/Eforms/radio')}
    ]
})