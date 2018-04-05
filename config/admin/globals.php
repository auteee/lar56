<?php
/**
 * Created by PhpStorm.
 * User: Xcui.
 * Date: 18-3-30
 * Time: 上午9:06
 * Desc:全局缓存配置
 */

return [
    'username'=>'name',
    'cache'=>[
        'menuList'=>'menuList',             //菜单缓存
        'permissionList'=>'permissionList', //所有权限菜单
        'permissionMenu'=>'permissionMenu', //权限缓存
        'navList'=>'navList',               //导航缓存
        'articleCatList'=>'articleCatList', //文章分类缓存
    ],
    'files'=>[
        'files_path'=>public_path().'/upfile/excelfile',    //文章图片存放路径
        'files_name'=>'myFile',                             //图片存放目录
    ],
    'uploads' => [
        'storage' => 'public',              //文件上传
    ],
    'banners' => [
        'path' => base_path('resources/views/banner'),              //banner文件上传
    ],
];