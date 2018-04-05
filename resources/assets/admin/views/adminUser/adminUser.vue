<template>
    <e-container>
        <e-data-table
                v-model="selecteds"
                :headers="headers"
                :rows="users"
                :pagination.sync="pagination"
                class="elevation-1"
                search
                select-all
        >
            <template slot="rows" slot-scope="props">
                <td>
                    <!--{{props.selected}}-->
                    <e-checkbox v-model="props.selected"></e-checkbox>
                </td>
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.email }}</td>
                <td class="text-xs-right">{{ props.item.visitor }}</td>
                <td class="text-xs-right">{{ props.item.created_at }}</td>
                <td class="text-xs-right">{{ props.item.updated_at }}</td>
                <td class="text-xs-right">
                    <e-btn>see</e-btn>
                    <e-btn>edit</e-btn>
                    <e-btn>del</e-btn>
                </td>
            </template>
        </e-data-table>
    </e-container>
</template>
<script>
    export default {
        data(){
            return{
                pagination: {
                    sortBy: 'name'
                },
                users:[],
                selecteds: [],
                headers: [
                    {
                        text: 'id',
                        align: 'left',
                        value: 'id'
                    },
                    { text: '用户名', value: 'name' },
                    { text: '邮箱', value: 'email' },
                    { text: '登录IP', value: 'visitor' },
                    { text: '创建时间', value: 'created_at' },
                    { text: '登录时间', value: 'updated_at' },
                    { text: '操作', value: 'Actions',sortable: false }
                ],
            }
        },
        mounted(){
            this.getAdminUserList();
        },
        methods:{
            getAdminUserList(){
                let self=this;
                axios.get('/adminuser').then((response)=>{
                    self.users=response.data.data;
                }).catch((error)=>{
                    console.info(error);
                });
            },

        }
    }
</script>