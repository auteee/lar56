<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
///////////////////////////////
/// 普通用户api接口
///////////////////////////////
Route::group(['namespace' => 'api','middleware' => ['api']],function (){
    //Route::get('login', 'LoginController@showLogin');
    //登录，退出登录
    Route::post('login', 'LoginController@login');
    Route::any('logout', 'LoginController@logout');
});


///////////////////////////////
///
/// 以下为admin用户登录和路由
/// ///////////////////////////

Route::group(['namespace' => 'apiAdmin','prefix' => 'admin', 'middleware' => ['api']],function (){
    //Route::get('login', 'LoginController@showLogin');
    //登录，退出登录
    Route::post('login', 'LoginController@login');
    Route::any('logout', 'LoginController@logout');
});

///////admin-api 路由
Route::group(['namespace' => 'apiAdmin','prefix' => 'admin', 'middleware' => ['api','auth:api-admin','auth.admin']], function () {
    //用户信息，权限菜单 全局用
    Route::get('user','AdminUserController@getUserInfo');
    Route::get('permission-menu','PermissionController@getPermissionMenu');


    //权限菜单信息
    Route::resource('permission', 'PermissionController');
    //Route::get('permission','PermissionController@getAllPermissionMenu');

    //管理员信息
    Route::resource('adminuser', 'AdminUserController');

});




//重定向测试
Route::get('/redirect', function (){
    $query = http_build_query([
        'client_id' => '3',
        'redirect_uri' => 'http://lar56.cn/auth/callback',
        'response_type' => 'code',
        'scope' => '',
    ]);

    return redirect('http://lar56.cn/oauth/authorize?' . $query);
});

//Route::group(['namespace' => 'api','prefix' => 'admin', 'middleware' => ['api']],function (){
//    //Route::get('login', 'LoginController@showLogin');
//    Route::post('login', 'LoginController@login');
//    //Route::any('logout', 'LoginController@logout');
//});
///////////////////////////
///
///
///
///
///
/// ///////////////////////
///////////////////////////////////////////////////////////////////////
//1,建立MODEL 同时生成迁移
//2，建立路由
//3，建立表现页面
//4，由表现页面构建数据迁移文件或者由迁移文件构建表现页面，二者是相关，相互形成的
//

///////////////////////////////////////////////////////////////////////////////////
//* 方法	        路径	                动作	            路由名称        //
//* GET	            /photos	                index	            photos.index    //
//* GET	            /photos/create	        create	            photos.create   //
//* POST	        /photos	                store	            photos.store    //
//* GET	            /photos/{photo}	        show	            photos.show     //
//* GET	            /photos/{photo}/edit	edit	            photos.edit     //
//* PUT/PATCH	    /photos/{photo}	        update	            photos.update   //
//* DELETE	        /photos/{photo}	        destroy	            photos.destroy  //
//////////////////////////////////////////////////////////////////////////////////

///passport
//GET /oauth/clients 这个路由为认证用户返回所有客户端，这在展示用户客户端列表时很有用，可以让用户很容易编辑或删除客户端：
//POST /oauth/clients 个路由用于创建新的客户端，要求传入两个数据：客户端的 name 和 redirect URL