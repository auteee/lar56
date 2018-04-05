
<docs>
    <template><!--ex0-->
        <e-row wrap justify-space-around align-center>
            <e-badge left>
                <span slot="badge">3</span>
                <e-icon cs="x-large">ion-android-desktop</e-icon>
            </e-badge>
            <e-badge right cs="bg-error">
                <span slot="badge">!</span>
                <e-icon cs="x-large">ion-android-favorite</e-icon>
            </e-badge>
            <e-badge right cs="bg-error">
                <span slot="badge">!</span>
                <e-icon cs="x-large">fa fa-bath</e-icon>
            </e-badge>
            <e-badge left>
                <span slot="badge">3</span>
                <e-icon cs="x-large">fa fa-home</e-icon>
            </e-badge>
        </e-row>
    </template>
    |
    <template><!--ex1-->
        <e-row wrap justify-space-around align-center>
            <e-avatar cs="bg-error"><e-icon>fa fa-home</e-icon></e-avatar>
            <e-avatar><img src="/img/john.jpg" alt="John"></e-avatar>
            <e-badge>
                <span slot="badge">3</span>
                <e-avatar cs="bg-error"><e-icon>fa fa-home</e-icon></e-avatar>
            </e-badge>
            <e-avatar cs="bg-primary">
                <span class="error">C</span>
            </e-avatar>
        </e-row>
    </template>
    |
    <template><!--ex2-->
        <e-container fluid>

        </e-container>
    </template>
</docs>
