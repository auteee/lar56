<template>
    <e-app>
        <e-card img="/storage/loginbg/backAirplane.jpg" height="100%">
            <e-row class="login">
                <e-col xs4>
                    <e-card>
                        <e-card-header cs="justify-center"><h1 class="primary">Ezsui</h1></e-card-header>
                        <e-card-body>
                            <e-row justify-center><h1 class="primary">千里之行,始于脚下</h1></e-row>
                            <e-row wrap>
                                <e-col xs12>
                                    <e-alert closed v-model="isError" cs="bgw-error" :animate="['zoomIn','zoomOut']">
                                        {{message}}
                                    </e-alert>
                                </e-col>
                                <e-col xs12 v-for="(item,index) in errors" :key="index">
                                    <e-alert  v-model="isError" cs="bgw-error" :animate="['zoomIn','zoomOut']">
                                        {{item}}
                                    </e-alert>
                                </e-col>

                            </e-row>
                            <e-form  ref="formLogin">
                                <e-input type="email"
                                         placeholder="邮箱"
                                         prepend-icon="ion-email"
                                         v-model="loginForm.email"
                                         :rules="[rules.email]">
                                </e-input>
                                <e-input placeholder="密码"
                                         :type="showPassword ? 'password' : 'text'"
                                         prepend-icon="ion-locked"
                                         :append-icon="showPassword?'ion-eye':'ion-eye-disabled'"
                                         :appendIconCb="() => (showPassword = !showPassword)"
                                         v-model="loginForm.password"
                                         :rules="[rules.required]">
                                </e-input>
                                <e-row justify-center>
                                    <e-checkbox style="padding: 1rem 0" :cs="loginForm.remember?'primary':''" label="记住我" v-model="loginForm.remember"></e-checkbox>
                                </e-row>
                            </e-form>

                            <e-btn cs="bgw-primary along" @click="iLogin">登录</e-btn>
                        </e-card-body>
                    </e-card>
                </e-col>
            </e-row>
        </e-card>
    </e-app>
</template>
<style>
    .login{
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .remember{
        padding: 1rem 0;
    }
</style>
<script>
    export default {
        data(){
            return{
                showPassword:false,
                loading:false,      //加载状态
                loginForm:{
                    email:'',
                    password:'',
                    remember:null,
                },
                message:'e-cw:无效数据',
                errors:[],
                isError:false,
                //formValue:false,
                rules: {
                    required: (value) => !!value || '密码不能为空',
                    email: (value) => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || '邮箱格式错误'
                    }
                },
            }
        },
        methods:{
            iLogin(){
                this.isError=false;
                const valid=this.$refs.formLogin.validate();
                if(valid){
                    this.$store.dispatch('Login',this.loginForm).then((response)=>{
                        if(response.data.success===1){
                            this.$router.push({path:'/'});
                        }else{
                            this.message=response.data.message;
                            this.isError=true;
                        }
                    }).catch((error)=>{
                        this.message=error.message;
                        this.isError=true;
                    })
                }else{
                    this.message='登录失败';
                    this.isError=true;
                }


                /*
                let self=this;
                axios.post('/api/admin/login', this.loginForm)
                    .then(response=> {
                        //错误不跳转
                        console.info(response.data);
                        if(response.data.success===0){
                            self.isError=true;
                            self.errors=response.data.errors;
                        }else{
                            console.info(response.data);
                            console.info('success')
                            //window.location.href='http://www.baidu.com';
                        }
                        //正确跳转

                    })
                    .catch(error=> {

                        console.info(error);
                        //error是一个错误对象，详见console.dir(error);
                        // if (error.response) {
                        //     // The request was made and the server responded with a status code
                        //     // that falls out of the range of 2xx
                        //     console.info('111');
                        //     console.log(error.response.data);
                        //     console.log(error.response.status);
                        //     console.log(error.response.headers);
                        //     console.dir(error);
                        // } else if (error.request) {
                        //     // The request was made but no response was received
                        //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        //     // http.ClientRequest in node.js
                        //     console.info('222');
                        //     console.log(error.request);
                        // } else {
                        //     // Something happened in setting up the request that triggered an Error
                        //     console.info('333');
                        //     console.log('Error', error.message);
                        // }
                        // console.log(error.config);
                    });*/
            }
        }
    }
</script>