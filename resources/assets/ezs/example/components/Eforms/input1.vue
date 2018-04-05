<template>
    <e-container>
        //e-file
        <e-file multiple></e-file>
        <e-file :input-c="inputC" ></e-file>
        <br>
        //test
        <e-input type="file"></e-input>
        <br>
        mask 问题尚为解决
        基本：  With label
        <!--<v-text-field label="dd" v-model="el1"></v-text-field>-->
        <!--<v-text-field label="dd2" v-model="el1"></v-text-field>-->
        <e-input label="测试" v-model="el1"></e-input>
        <e-input label="测试" v-model="el1" ></e-input>
        <e-btn @click="haha">click</e-btn>
        <e-input label="测试" value="disabled" disabled></e-input>
        icon:
        <e-input label="icon" prependIcon="fa fa-home"></e-input>
        <e-input prependIcon="fa fa-home" value="无label"></e-input>
        <e-input prependIcon="fa fa-home" value="无label" disabled></e-input>
        <e-input disabled :type="showPassword ? 'password' : 'text'" label="请输入密码" :appendIcon="showPassword?'fa fa-eye-slash':'fa fa-eye'" :appendIconCb="() => (showPassword = !showPassword)" ></e-input>
        <e-input :type="showPassword ? 'password' : 'text'" label="请输入密码" :appendIcon="showPassword?'fa fa-eye-slash':'fa fa-eye'" :appendIconCb="() => (showPassword = !showPassword)" ></e-input>
        <e-input type="password" label="请输入密码" appendIcon="fa fa-eye-slash" ></e-input>
        单行：Single line light
        <e-input value="有value值" ></e-input>
        <e-input placeholder="placeholder value=''"></e-input>
        Multi-Line
        <e-input label="多行" multiLine></e-input>
        <e-input label="多行" multiLine value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></e-input>
        <e-input label="多行 自动行高" multiLine autoGrow></e-input>
        Character counter
        <e-input label="计数" maxlength="20" value="hfafas"></e-input>
        hint 提示
        <e-input label="提示" hint="带有提示的input" value="hfafas"></e-input>
        <e-input label="提示" hint="带有提示的input 焦距时显示" ></e-input>
        <e-input label="提示" hint="一直显示的提示" isHint></e-input>
        验证
        <e-input label="验证" required ></e-input>
        <e-input label="验证" v-model="fistName" :rules="[() => fistName.length > 0 || 'This field is required']"></e-input>
        前置/后置
        <e-input label="前置" v-model="el1" prefix="$"></e-input>
        <e-input label="前置" v-model="el1" suffix="@126.com"></e-input>
        mask
        <e-input mask="credit-card" v-model="el1" value="444444444444"></e-input>

        <!--<e-input label="Label Text" value="12:30:00" type="time" suffix="PST"></e-input>-->
        <!--<input  value="12:30:00" type="time"/>-->
        <!--//-->
        <!--{{el1}}-->
        <!--<e-input label="model测试" class="hhhh" v-model="el1"></e-input>-->
    </e-container>
</template>
<script>
    export default {
        data(){
            return{
                'inputC':{'prependIcon':'ion-android-bar'},
                el1:'dddd',
                fistName:'',
                showPassword:true
            }
        },
        methods:{
            haha(){
                alert(this.el1);
            }
        }
    }
</script>