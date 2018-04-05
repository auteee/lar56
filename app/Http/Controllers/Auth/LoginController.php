<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Socialite;

class LoginController extends Controller
{

    //第三方登录测试
    /**
     * 将用户重定向到Github认证页面
     *
     * @return Response
     */
    public function githubRedirectToProvider()
    {
        return Socialite::driver('github')->redirect();
    }
    /**
     * 从Github获取用户信息.
     *
     * @return Response
     */
    public function githubHandleProviderCallback()
    {
        $user = Socialite::driver('github')->user();

        //$user = Socialite::driver('github')->userFromToken($token);
        dd($user);
        dd($user->token);
    }

    /**
     * 将用户重定向到 微信 认证页面
     * @return mixed
     */
    public function weixinRedirectToProvider()
    {
        return Socialite::with('weixin')->redirect();
    }

    /**
     * 从 微信 获取用户信息.
     */
    public function weixinProviderCallback()
    {
        $user = Socialite::with('weixin')->user();

        //$user = Socialite::driver('github')->userFromToken($token);
        dd($user);
        dd($user->token);
    }

    //下面是原带的
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */



    //use AuthenticatesUsers;


    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    public function __construct()
//    {
//        $this->middleware('guest')->except('logout');
//    }
}
