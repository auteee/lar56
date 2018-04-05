<template>
    <e-tabs>
        <e-tabs-header>
            <e-tabs-nav v-for="(item,i) in apiDataTabs" :key="i">{{item.title}}</e-tabs-nav>
            <e-tabs-slider cs="bgw-error"></e-tabs-slider>
        </e-tabs-header>
        <e-toolbar>
            <e-select :options="eapiSelet" v-model="eapiSeletValue"></e-select>
            <e-spacer></e-spacer>
            <e-input append-icon="ion-ios-search" placeholder="查询"></e-input>
        </e-toolbar>
        <e-tabs-body>
            <e-tabs-content v-for="(item,i) in apiDataTabs" :key="i">
                <e-container>
                    <e-row wrap column class="api-data" v-for="(o,k) in item.value" :key="k">
                        <e-row class="header">
                            <e-col md4>
                                <div class="api-data-title">名称</div>
                                <div class="api-data-value">{{o.name}}</div>
                            </e-col>
                            <e-col md4 v-if="o.default">
                                <div class="api-data-title">默认值</div>
                                <div class="api-data-value">{{o.default}}</div>
                            </e-col>
                            <e-col md4 v-if="o.type">
                                <div class="api-data-title">类型</div>
                                <div class="api-data-value">{{o.type}}</div>
                            </e-col>
                        </e-row>
                        <e-row class="api-data-desc">{{o.desc}}</e-row>
                    </e-row>
                </e-container>
            </e-tabs-content>
        </e-tabs-body>
    </e-tabs>
</template>
<script>
    //
    export default {
        name:'exatab-component',
        data(){
            return{
                eapiSeletValue:this.eapiSelet[0].value
            }
        },
        props:{
            eapiData:Object,
            eapiSelet:Array,
        },
        computed:{
            apiDataTabs(){
                return this.eapiData[this.eapiSeletValue];
            }
        },
    }
</script>