<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Validator;
class LoginController extends Controller
{

    use AuthenticatesUsers;
    //protected $redirectTo = 'admin/index';
    protected $username;

    public function __construct()
    {
        $this->middleware('guest:admin', ['except' => 'logout']);
    }

    //重写登录页面
    public function showLogin()
    {
        return view('admin.login');
    }

    //登录成功后跳转重定向
    protected function redirectTo()
    {
        return redirect()->guest('admin/index');
    }

    public function login(Request $request)
    {

        //
        $validator=Validator::make($request->all(),[
            'email'=>'required|string',
            'password' => 'required|string',
        ]);

        if($validator->fails()){
            $request->request->add([
                'errors' => $validator->errors()->toArray(),
                'code' => 401,
            ]);
            return $this->sendFailedLoginResponse($request);
        }

        $data = $request->all();

        $http = new \GuzzleHttp\Client();
        $response = $http->post('http://lar56.cn/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => '2LusplfDtnY26Mhdtc3eBZgsHbsQ1vkHRJZaMW6V',
                'username' => $data['email'],
                'password' => $data['password'],
                'scope' => '',
            ],
        ]);
        return json_decode((string)$response->getBody(), true);
    }

    /**
     * 自定义认证驱动
     * @author 晚黎
     * @date   2016-09-05T23:53:07+0800
     * @return [type]                   [description]
     */
    protected function guard()
    {
        return auth()->guard('admin');
    }

    //退出登录
    public function logout(Request $request)
    {
        $this->guard('admin')->logout();

        $request->session()->flush();

        $request->session()->regenerate();

        return redirect('admin/login');
    }
}
