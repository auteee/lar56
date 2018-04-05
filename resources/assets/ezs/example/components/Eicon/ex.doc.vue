
<docs>
    <template><!--ex0-->
        <e-container>
            <e-row>
                <e-col d-flex justify-space-between>
                    <e-icon disabled>ion-ionic</e-icon>
                    <e-icon>fa fa-home</e-icon>
                    <e-icon>ion-alert</e-icon>
                    <e-icon>ion-alert-circled</e-icon>
                    <e-icon>ion-android-add</e-icon>
                    <e-icon>ion-android-arrow-down</e-icon>
                </e-col>
            </e-row>
        </e-container>
    </template>
    |
    <template><!--ex1-->
        <e-container>
            <e-row wrap>
                <e-col xs12 d-flex justify-space-between>
                    <e-icon cs="primary">ion-ionic</e-icon>
                    <e-icon cs="error">ion-ionic</e-icon>
                    <e-icon cs="warning">ion-ionic</e-icon>
                    <e-icon cs="info">ion-android-chat</e-icon>
                    <e-icon cs="success">ion-android-chat</e-icon>
                    <e-icon cs="royal">ion-android-chat</e-icon>
                </e-col>
                <e-col xs12 d-flex justify-space-between>
                    <e-icon cs="error small">ion-ionic</e-icon>
                    <e-icon cs="error">ion-ionic</e-icon>
                    <e-icon cs="error medium">ion-ionic</e-icon>
                    <e-icon cs="error big">ion-android-chat</e-icon>
                    <e-icon cs="error large">ion-android-chat</e-icon>
                    <e-icon cs="error x-large">ion-android-chat</e-icon>
                </e-col>
                <e-col xs12 d-flex justify-space-between>
                    <e-icon cs="primary">ion-ionic</e-icon>
                    <e-icon cs="error">ion-ionic</e-icon>
                    <e-icon cs="warning">ion-ionic</e-icon>
                    <e-icon cs="info">ion-android-chat</e-icon>
                    <e-icon cs="success">ion-android-chat</e-icon>
                    <e-icon cs="royal">ion-android-chat</e-icon>
                </e-col>
            </e-row>
        </e-container>
    </template>
    |
    <template><!--ex2-->
        <e-container>
            <e-row wrap>
                <e-col xs12>
                    <e-input textarea auto-grow autofocus  :value="iconicons" readonly></e-input>
                </e-col>
                <e-col xs12>
                    <e-select :options="ionArrList" v-model="ionSelect" :prepend-icon="ionSelect.value"
                              autocomplete append-icon="ion-ios-copy" :append-icon-cb="eCopy">
                    </e-select>
                </e-col>
            </e-row>
        </e-container>
    </template>
    <script>
        import eIcons from './eIcons'
        export default {
            data(){
                return {
                    //////////
                    iconicons:eIcons.ioniconsString,
                    ionArrList:[],
                    ionSelect:'',
                    tip:'',
                    timer:null
                }
            },
            mounted(){
                this.ionArrList=this.formatToArray();
            },
            methods:{
                formatToArray(){
                    return this.iconicons.split(',').map(item=>{
                        return {value:item.trim(),icon:item.trim()};
                    });
                },
                eCopy(){
                    //document.getElementById('haha').select(); // 选择对象
                    let copyArea=document.getElementById('copyArea');
                    if(!copyArea){
                        copyArea = document.createElement("textarea");
                        copyArea.style.position = "absolute";
                        copyArea.style.left = "-9999px";
                        copyArea.style.top = "0";
                        copyArea.id = 'copyArea';
                        document.body.appendChild(copyArea);
                    }
                    copyArea.textContent=this.ionSelect.value;
                    copyArea.select();
                    try{
                        if(document.execCommand('copy', false, null)){
                            document.execCommand("copy");
                            this.tip="已复制好，可贴粘。";
                        } else{
                            this.tip="复制失败，请手动复制";
                        }
                    } catch(err){
                        this.tip="复制失败，请手动复制";
                    }
                },
            }
        }
    </script>
</docs>
