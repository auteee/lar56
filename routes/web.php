<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//第三方登录测试 git
Route::get('login/github', 'Auth\LoginController@githubRedirectToProvider');
Route::get('login/github/callback', 'Auth\LoginController@githubHandleProviderCallback');

//第三方登录测试 weixin
Route::get('login/weixin', 'Auth\LoginController@weixinRedirectToProvider');
Route::get('login/weixin/callback', 'Auth\LoginController@weixinHandleProviderCallback');


//admin入口
Route::group(['namespace' => 'admin'],function (){
    Route::get('/admin', 'IndexController@index');
});




Route::get('/auth/callback', function (\Illuminate\Http\Request $request){
    if ($request->get('code')) {
        return 'Login Success';
    } else {
        return 'Access Denied';
    }
});

Route::get('/auth/password', function (\Illuminate\Http\Request $request){
    $http = new \GuzzleHttp\Client();

    $response = $http->post('http://lar56.cn/oauth/token', [
        'form_params' => [
            'grant_type' => 'password',
            'client_id' => '2',
            'client_secret' => '2LusplfDtnY26Mhdtc3eBZgsHbsQ1vkHRJZaMW6V',
            'username' => 'root@root.com',
            'password' => '1234569',
            'scope' => '',
        ],
    ]);

    return json_decode((string)$response->getBody(), true);
});

Route::get('/', function () {
    return view('welcome');
});
Route::get('/ezs', function () {
    return view('ezs.index');
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Route::group(['namespace' => 'admin'],function (){
//    Route::get('/admin', 'LoginController@showLogin');
//    //Route::post('login', 'LoginController@login');
//    //Route::any('logout', 'LoginController@logout');
//});

//Route::group(['namespace' => 'admin','prefix' => 'admin','middleware' =>['auth:admin','auth.admin']],function (){
//    Route::get('index', 'IndexController@index');
//});


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

