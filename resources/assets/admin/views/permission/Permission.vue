<template>
    <e-container>
        <e-row>
            <e-col xs6>
                <e-nestable :trees="permissions">
                    <div class="" slot="node" slot-scope="props">
                        <e-btn cs="green circle small" @click.stop="seeAction(props.item)">
                            <e-icon>ion-eye</e-icon>
                        </e-btn>
                        <e-btn cs="green circle small" @click.stop="addAction(props.item)">
                            <e-icon>ion-android-add</e-icon>
                        </e-btn>
                        <e-btn cs="green circle small" @click.stop="editAction(props.item)">
                            <e-icon>ion-edit</e-icon>
                        </e-btn>
                        <e-btn cs="red circle small" @click.stop="delAction(props.item)">
                            <e-icon>ion-ios-trash-outline</e-icon>
                        </e-btn>
                    </div>
                    <div class="" slot="leaf" slot-scope="props">
                        <e-btn cs="green circle small" @click.stop="seeAction(props.item)">
                            <e-icon>ion-eye</e-icon>
                        </e-btn>
                        <e-btn cs="green circle small" @click.stop="editAction(props.item)">
                            <e-icon>ion-edit</e-icon>
                        </e-btn>
                        <e-btn cs="red circle small" @click.stop="delAction(props.item)">
                            <e-icon>ion-ios-trash-outline</e-icon>
                        </e-btn>
                    </div>
                </e-nestable>
            </e-col>
        </e-row>
        <e-dialog v-model="addOrEditDialog" closed max-width="700px">
            <e-card>
                <e-card-header>添加权限</e-card-header>
                <e-card-body>
                    <e-form  ref="formMenu">
                        <e-input label="权限名称" v-model="menuForm.name"></e-input>
                        <e-input label="权限标识" v-model="menuForm.permission"></e-input>
                        <e-input label="路径" v-model="menuForm.to"></e-input>
                        <e-select label="父级菜单" :options="parentMenu" v-model="menuForm.pid"></e-select>
                        <e-input label="权限图标" v-model="menuForm.icon"></e-input>
                        <e-switch label="导航显示" v-model="menuForm.show"></e-switch>
                        <e-input label="权限排序" v-model="menuForm.sort"></e-input>
                        <!--<e-input label="导航显示" v-model="menuForm.show"></e-input>-->
                        <e-input multi-line v-model="menuForm.description"></e-input>
                    </e-form>
                </e-card-body>
                <e-card-footer>
                    <e-btn @click="updateAction" v-if="!isAdd">确定</e-btn>
                    <e-btn @click="storeAction" v-else>确定</e-btn>
                    <e-btn @click="addOrEditDialog=!addOrEditDialog">取消</e-btn>
                </e-card-footer>
            </e-card>
        </e-dialog>
        <e-dialog v-model="isSee" closed max-width="700px">
            <e-card>
                <e-card-header>
                    菜单名称:{{menu.name}}
                </e-card-header>
                <e-card-body>
                    <e-row>
                        <e-col xs2>权限标识</e-col>
                        <e-col xs4>{{menu.permission}}</e-col>
                        <e-col xs2>父级菜单:</e-col>
                        <e-col xs4>{{menu.pid}}</e-col>
                    </e-row>
                    <e-row>
                        <e-col xs2>菜单图标:</e-col>
                        <e-col xs4>{{menu.icon}}</e-col>
                        <e-col xs2>菜单排序:</e-col>
                        <e-col xs4>{{menu.sort}}</e-col>
                    </e-row>
                    <e-row>
                        <e-col xs2>是否显示:</e-col>
                        <e-col xs4>{{menu.show?'是':'否'}}</e-col>
                        <e-col xs2>路径:</e-col>
                        <e-col xs4>{{menu.to}}</e-col>
                    </e-row>
                    <e-row>
                        <e-col xs2>创建时间:</e-col>
                        <e-col xs4>{{menu.created_at}}</e-col>
                        <e-col xs2>更新时间:</e-col>
                        <e-col xs4>{{menu.updated_at}}</e-col>
                    </e-row>
                    <e-row>
                        <e-well>菜单说明：{{menu.description }}</e-well>
                    </e-row>
                </e-card-body>
            </e-card>
        </e-dialog>
    </e-container>
</template>
<script>
    export default {
        data(){
            return {
                parentMenu:[],
                permissions:[],
                isSee:false,        //查看
                addOrEditDialog:false,    //创建/编辑
                isAdd:false,
                menuForm:{
                    id:null,
                    pid:0,
                    name:'',
                    permission:'',
                    icon:'',
                    show:false,
                    to:'',
                    sort:0,
                    description:'',
                },
                menu:{},
            }
        },
        mounted(){
            this.getPermissonList();
        },
        methods:{
            test(){
                this.menuForm.pid=1;
            },
            //获取权限列表和顶级权限列表
            getPermissonList(){
                axios.get('/permission').then((response)=>{
                    this.permissions=response.data.permissions;
                    this.parentMenu=response.data.parentMenu;
                }).catch((error)=>{
                    console.info(error);
                });
            },
            //获取菜单并显示
            seeAction(item){
                axios.get('/permission/'+item.id).then((response)=>{
                    this.menu=response.data;
                    this.isSee=true;
                }).catch((e)=>{
                    console.info(e);
                })
            },
            //编辑菜单
            editAction(item){
                axios.get('/permission/'+item.id+'/edit').then((response)=>{
                    this.menuForm=response.data;
                    this.addOrEditDialog=true;
                    this.isAdd=false;
                }).catch((e)=>{
                    console.info(e);
                })
            },
            //更新菜单
            updateAction(){
                axios.put('/permission/'+this.menuForm.id,this.menuForm).then((response)=>{
                    if(response.data.success===1){
                        this.updateMenu(response.data.resdata);
                    }
                }).catch((e)=>{
                    console.info(e);
                });
            },
            //添加或编辑后更新菜单
            updateMenu(resdata){
                this.addOrEditDialog=false;
                //后台有返回新的菜单和父级菜单就不用重新在调用api到后台了
                this.permissions=resdata.permissions;
                this.parentMenu=resdata.parentMenu;
                //this.getPermissonList();    //重新获取数据表
                //获取全局导航菜单
                this.$store.dispatch('GetPermissionMenu');
            },
            //添加菜单
            addAction(item){
                this.menuForm={
                        pid:item.id,
                        name:'',
                        permission:'',
                        icon:'',
                        show:false,
                        to:'',
                        sort:0,
                        description:'',
                };
                this.addOrEditDialog=true;
                this.isAdd=true;
            },
            //存储新添加的菜单
            storeAction(){
                axios.post('/permission',this.menuForm).then((response)=>{
                    if(response.data.success===1){
                        this.updateMenu(response.data.resdata);
                    }
                }).catch((e)=>{
                    console.info(e);
                });
            },
            delAction(item){
                axios.delete('/permission/'+item.id).then((response)=>{
                    if(response.data.success===1){
                        this.updateMenu(response.data.resdata);
                    }
                }).catch((e)=>{
                    console.info(e);
                });
            },
        }
    }
</script>