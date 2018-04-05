
<docs>
    <template><!--ex0-->
        <e-row justify-center>
            <e-menu>
                <e-btn slot="anchor">下拉菜单</e-btn>
                <e-list :lists="menuList"></e-list>
            </e-menu>
        </e-row>
    </template>
    |
    <template><!--ex1-->
        <e-row justify-space-between>
            <e-col xs4>
                <e-menu absolute blocked>
                    <e-card  img="/img/girl.jpg" height="300" slot="anchor"></e-card>
                    <e-list :lists="menuList"></e-list>
                </e-menu>
            </e-col>
            <e-col xs4>
                <e-card  img="/img/girl.jpg" height="300" @contextmenu="show"></e-card>
                <e-menu offset-y absolute :position-x="posx" :position-y="posy" v-model="showMenu">
                    <e-list :lists="menuList"></e-list>
                </e-menu>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return {
                    menuList:[
                        {'value':'下拉菜单1'},
                        {'value':'下拉菜单2'},
                        {'value':'下拉菜单3'},
                        {'value':'下拉菜单4'},
                        {'value':'下拉菜单5'},
                    ],
                    showMenu:false,
                    posx:null,
                    posy:null,
                }
            },
            methods:{
                show (e) {
                    e.preventDefault();
                    this.showMenu = false;
                    this.x = e.clientX;
                    this.y = e.clientY;
                    this.$nextTick(() => {
                        this.showMenu = true;
                    });
                }
            }
        }
    </script>
    |
    <template><!--ex2-->
        <e-row justify-center>
            <e-menu open-on-hover>
                <e-btn slot="anchor">下拉菜单</e-btn>
                <e-list :lists="menuList"></e-list>
            </e-menu>
        </e-row>
    </template>
    |
    <template><!--ex3-->

    </template>
    |
    <template><!--ex4-->

    </template>
    <script>

    </script>
</docs>
