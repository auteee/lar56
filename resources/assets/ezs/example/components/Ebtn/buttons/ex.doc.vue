
<docs>
    <template><!--ex0-->
        <e-btn >默认</e-btn>
        <e-btn cs="bg-primary raised">蓝色(主色)</e-btn>
        <e-btn cs="bg-secondary">灰黑色(次要)</e-btn>
        <e-btn cs="bg-error">红色(错误)</e-btn>
        <e-btn cs="bg-info">青色(信息)</e-btn>
        <e-btn cs="bg-success">绿色(成功)</e-btn>
        <e-btn cs="bg-warning raised">黄色(错误)</e-btn>
        <e-btn cs="bg-danger raised">橙色(危险)</e-btn>
        <e-btn cs="bg-royal raised">紫色(高贵)</e-btn>
    </template>
    |
    <template><!--ex1-->
        <e-row wrap colum class="example-row">
            <e-col>
                <h4>bg-[]</h4>
                <e-btn >默认</e-btn>
                <e-btn cs="bg-primary">蓝色(主色)</e-btn>
                <e-btn cs="bg-secondary">灰黑色(次要)</e-btn>
                <e-btn cs="bg-error">红色(错误)</e-btn>
                <e-btn cs="bg-info">青色(信息)</e-btn>
                <e-btn cs="bg-success">绿色(成功)</e-btn>
                <e-btn cs="bg-warning">黄色(错误)</e-btn>
                <e-btn cs="bg-danger">橙色(危险)</e-btn>
                <e-btn cs="bg-royal">紫色(高贵)</e-btn>
            </e-col>
            <e-col>
                <h4>link-[]</h4>
                <e-btn cs="link-primary">蓝色(主色)</e-btn>
                <e-btn cs="link-secondary">灰黑色(次要)</e-btn>
                <e-btn cs="link-error">红色(错误)</e-btn>
                <e-btn cs="link-info">青色(信息)</e-btn>
                <e-btn cs="link-success">绿色(成功)</e-btn>
                <e-btn cs="link-warning">黄色(错误)</e-btn>
                <e-btn cs="link-danger">橙色(危险)</e-btn>
                <e-btn cs="link-royal">紫色(高贵)</e-btn>
            </e-col>
            <e-col>
                <h4>outline-[]</h4>
                <e-btn cs="outline-primary">蓝色(主色)</e-btn>
                <e-btn cs="outline-secondary">灰黑色(次要)</e-btn>
                <e-btn cs="outline-error">红色(错误)</e-btn>
                <e-btn cs="outline-info">青色(信息)</e-btn>
                <e-btn cs="outline-success">绿色(成功)</e-btn>
                <e-btn cs="outline-warning">黄色(错误)</e-btn>
                <e-btn cs="outline-danger">橙色(危险)</e-btn>
                <e-btn cs="outline-royal">紫色(高贵)</e-btn>
            </e-col>
        </e-row>
        <e-row class="example-row">
            <e-col>
                <h3>2,raised(阴影效果)</h3>
                <e-btn cs="bg-primary raised">蓝色(主色)</e-btn>
                <e-btn cs="bg-secondary raised">灰黑色(次要)</e-btn>
                <e-btn cs="bg-error raised" >红色(错误)</e-btn>
                <e-btn cs="bg-info raised">青色(信息)</e-btn>
                <e-btn cs="bg-success raised">绿色(成功)</e-btn>
                <e-btn cs="bg-warning raised">黄色(错误)</e-btn>
                <e-btn cs="bg-danger raised">橙色(危险)</e-btn>
                <e-btn cs="bg-royal raised">紫色(高贵)</e-btn>
            </e-col>
        </e-row>
        <e-row wrap colum class="example-row">
            <e-col>
                <h4>oval(圆角)</h4>
                <e-btn cs="bg-primary oval">蓝色(主色)</e-btn>
                <e-btn cs="bg-secondary oval">灰黑色(次要)</e-btn>
                <e-btn cs="bg-error oval">红色(错误)</e-btn>
                <e-btn cs="bg-info oval">青色(信息)</e-btn>
                <e-btn cs="bg-success oval">绿色(成功)</e-btn>
                <e-btn cs="bg-warning oval">黄色(错误)</e-btn>
                <e-btn cs="bg-danger oval">橙色(危险)</e-btn>
                <e-btn cs="bg-royal oval">紫色(高贵)</e-btn>
            </e-col>
            <e-col>
                <h4>square(方角)</h4>
                <e-btn cs="bg-primary square">蓝色(主色)</e-btn>
                <e-btn cs="bg-secondary square">灰黑色(次要)</e-btn>
                <e-btn cs="bg-error square">红色(错误)</e-btn>
                <e-btn cs="bg-info square">青色(信息)</e-btn>
                <e-btn cs="bg-success square">绿色(成功)</e-btn>
                <e-btn cs="bg-warning square">黄色(错误)</e-btn>
                <e-btn cs="bg-danger square">橙色(危险)</e-btn>
                <e-btn cs="bg-royal square">紫色(高贵)</e-btn>
            </e-col>
            <e-col>
                <h4>circle(圆)</h4>
                <e-btn cs="bg-primary circle">
                    <e-icon>ion-android-home</e-icon>
                </e-btn>
                <e-btn cs="bg-secondary circle">
                    <e-icon>ion-ios-home-outline</e-icon>
                </e-btn>
                <e-btn cs="bg-error circle">
                    <e-icon>ion-android-alarm-clock</e-icon>
                </e-btn>
                <e-btn cs="bg-info circle">
                    <e-icon>ion-android-alert</e-icon>
                </e-btn>
                <e-btn cs="bg-success circle">
                    <e-icon>ion-android-alert</e-icon>
                </e-btn>
                <e-btn cs="bg-warning circle">
                    <e-icon>ion-android-home</e-icon>
                </e-btn>
                <e-btn cs="bg-danger circle">
                    <e-icon>ion-android-home</e-icon>
                </e-btn>
                <e-btn cs="bg-royal circle">
                    <e-icon>ion-android-home</e-icon>
                </e-btn>
            </e-col>
        </e-row>
        <e-row class="example-row">
            <e-col>
                <h3>4,大小:<small>small,big,large,x-large</small></h3>
                <e-btn cs="bg-secondary small">small(最小)</e-btn>
                <e-btn>默认(正常)</e-btn>
                <e-btn cs="bg-info big">big(大的)</e-btn>
                <e-btn cs="bg-success large">large(巨大)</e-btn>
                <e-btn cs="bg-error x-large">x-large(最大)</e-btn>
            </e-col>
        </e-row>
        <e-row class="example-row">
            <e-col>
                <h3>5,块状--along:<small>块状按钮可以扩展全部可用宽度</small></h3>
                <e-btn cs="bg-secondary small along">small(最小)</e-btn>
                <e-btn cs="along">默认(正常)</e-btn>
                <e-btn cs="bg-info big along">big(大的)</e-btn>
                <e-btn cs="bg-success large along">large(巨大)</e-btn>
                <e-btn cs="bg-error x-large along">x-large(最大)</e-btn>
            </e-col>
        </e-row>
    </template>
    |
    <template><!--ex2-->
        <e-btn disabled cs="bg-primary">已失效</e-btn>
        <e-btn disabled cs="bg-secondary">已失效</e-btn>
        <e-btn disabled cs="bg-error">已失效</e-btn>
        <e-btn disabled cs="bg-info">已失效</e-btn>
        <e-btn disabled cs="bg-success">已失效</e-btn>
        <e-btn disabled cs="bg-warning">已失效</e-btn>
        <e-btn disabled cs="bg-danger">已失效</e-btn>
        <e-btn disabled cs="bg-royal">已失效</e-btn>
    </template>
    |
    <template><!--ex3-->
        <e-btn cs="bg-primary" :ripple="false">无波纹</e-btn>
        <e-btn cs="bg-secondary" :ripple="false">无波纹</e-btn>
        <e-btn cs="bg-error" :ripple="false">无波纹</e-btn>
        <e-btn cs="bg-info" :ripple="false">无波纹</e-btn>
        <e-btn cs="bg-success" :ripple="false">无波纹</e-btn>
        <e-btn cs="bg-warning" :ripple="false">无波纹</e-btn>
        <e-btn cs="bg-danger" :ripple="false">无波纹</e-btn>
        <e-btn cs="bg-royal" :ripple="false">无波纹</e-btn>
    </template>
    |
    <template><!--ex4-->
        <e-btn tag="a" cs="bg-warning">a标签</e-btn>
        <e-btn tag="span" cs="bg-danger">span标签</e-btn>
        <e-btn tag="div" cs="bg-royal">div标签</e-btn>
        <e-btn tag="label" cs="bg-info">label标签</e-btn>
    </template>
    |
    <template><!--ex5-->
        <e-btn href="http://www.baidu.com" cs="bg-primary">百度</e-btn>
        <e-btn href="http://www.baidu.com" cs="bg-secondary">百度</e-btn>
        <e-btn href="http://www.baidu.com" cs="bg-error">百度</e-btn>
    </template>
    |
    <template>
        <e-btn to="#cards" cs="bg-primary">卡片项</e-btn>
        <e-btn to="#apps" cs="bg-secondary">apps</e-btn>
        <e-btn to="#icons" cs="bg-error">图标</e-btn>
    </template>
</docs>
