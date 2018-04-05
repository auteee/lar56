<template>
    <e-container>
        <e-system-bar status cs="bg-primary">
            <e-spacer></e-spacer>
            <e-icon>fa-feed</e-icon>
            <e-icon>fa-bell</e-icon>
            <e-icon>fa-battery</e-icon>
            <span>12:30</span>
        </e-system-bar>
        <br>
        <e-system-bar window cs="bg-primary">
            <e-spacer></e-spacer>
            <e-icon>fa-window-minimize</e-icon>
            <e-icon>fa-square-o</e-icon>
            <e-icon>fa-close</e-icon>
        </e-system-bar>
        <br>
        <e-toolbar>
            <e-toolbar-title>Title</e-toolbar-title>
            <e-spacer></e-spacer>
            <e-toolbar-items class="hidden-sm-and-down">
                <e-btn cs="flat">点击一</e-btn>
                <e-btn cs="flat">点击一</e-btn>
                <e-btn cs="flat">点击一</e-btn>
            </e-toolbar-items>
        </e-toolbar>
        <br>
        <e-toolbar extended>

            <e-toolbar-title slot="extension">Title</e-toolbar-title>
            <e-btn><e-icon>fa-home</e-icon></e-btn>
            <e-spacer></e-spacer>
            <e-toolbar-items class="hidden-sm-and-down">
                <e-btn cs="flat">点击一</e-btn>
                <e-btn cs="flat">点击一</e-btn>
                <e-btn cs="flat">点击一</e-btn>
            </e-toolbar-items>
        </e-toolbar>
    </e-container>
</template>