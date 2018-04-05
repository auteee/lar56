<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class ApiContorller extends Controller
{
    use  AuthenticatesUsers;

    public function __construct(){
        $this->middleware('api');
    }

    //调用认证接口获取授权码
    protected function authenticateClient(Request $request)
    {

        $data = $request->all();
        $request->request->add([
            'grant_type' => 'password',
            'client_id' => '2',
            'client_secret' => '2LusplfDtnY26Mhdtc3eBZgsHbsQ1vkHRJZaMW6V',
            'username' => $data['email'],
            'password' => $data['password'],
            'scope' => '',
            'provider'=>'admins'
        ]);

        $proxy = Request::create(
            'oauth/token',
            'POST'
        );

        $response = \Route::dispatch($proxy);
        //dd($response);
        return $response;
    }

    //以下为重写部分
    protected function authenticated(Request $request)
    {
        return $this->authenticateClient($request);
    }

    protected function sendLoginResponse(Request $request)
    {
        $this->clearLoginAttempts($request);

        return $this->authenticated($request);
    }
    protected function guard($grard)
    {
        return auth()->guard($grard);
    }

//    protected function sendFailedLoginResponse(Request $request)
//    {
//        $msg = $request['errors'];
//        $code = $request['code'];
//        return $this->failed($msg,$code);
//    }
}
