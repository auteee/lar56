<?php

namespace App\Http\Controllers\apiAdmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class LoginController extends Controller
{

    /**
     * passpot api 登录 实际上是获得token
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|mixed
     * 成功返回 {"token_type":"Bearer","expires_in" :31536000,"access_token":"eyJ0e...","refresh_token":"def50..."}
     * 失败返回 {error: "invalid_credentials", message: "The user credentials were incorrect."}
     */
    public function login(Request $request){

        $data = $request->all();
        $validator=Validator::make($data,[
            'email'=>'required|string',
            'password' => 'required|string',
        ]);
        if($validator->fails()){
            return response()->json([
                'message' => '^_^出错了',
                'errors' => $validator->errors()->toArray(),
                'success'=>0,
                'status_code'=>401
            ]);
        }

        //判断路径中是否有amdin ,有的话加上 'provider'=>'admins'
        $client = new \GuzzleHttp\Client();
        //用户名密码验证
        try {
             $response=$client->request('POST', 'http://lar56.cn/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => '2',
                    'client_secret' => 'kR6NP4odIKeuMb1yuEc4yL64XDJCLdSnYfqxD3Rb',
                    'username' => $data['email'],
                    'password' => $data['password'],
                    'scope' => '',
                    'provider'=>'admins'
                ],
                'headers'  => [
                    'accept' => 'application/json'
                ]
            ]);
             $res=json_decode((string)$response->getBody(), true);
             $res['success']=1;
        }
        catch (\GuzzleHttp\Exception\ClientException $e){
            //抛出错误异常
            $response = $e->getResponse();
            $res=json_decode((string)$response->getBody(), true);
            $res['message']='验证失败，密码或者用户名错误';
            $res['success']=0;
        }
        //dd($res);
        $res['code']=$response->getStatusCode();
        return $res;
//        $response = $client->post('http://lar56.cn/oauth/token', [
//            'form_params' => [
//                'grant_type' => 'password',
//                'client_id' => '2',
//                'client_secret' => '2LusplfDtnY26Mhdtc3eBZgsHbsQ1vkHRJZaMW6V',
//                'username' => $data['email'],
//                'password' => $data['password'],
//                'scope' => '',
//                'provider'=>'admins'
//            ],
//        ]);



//        $data = $request->all();
//        $request->request->add([
//            'grant_type' => 'password',
//            'client_id' => '2',
//            'client_secret' => '2LusplfDtnY26Mhdtc3eBZgsHbsQ1vkHRJZaMW6V',
//            'username' => $data['email'],
//            'password' => $data['password'],
//            'scope' => '',
//            'provider'=>'admins'
//        ]);
//
//        $proxy = Request::create(
//            'oauth/token',
//            'POST'
//        );
//        //dd($request);不能正确使用多表登录
//        $response = \Route::dispatch($proxy);
//        //dd($response);
//        return $response;
    }
    //退出登录
    public function logout(){
        if (\Auth::guard('api')->check()) {
            \Auth::guard('api')->user()->token()->delete();
            return response()->json(['success'=>1,'message' => '登出成功', 'status_code' => 200, 'data' => null]);
        }
        return response()->json(['success'=>0,'message' => '登出失败', 'status_code' => 200, 'data' => null]);
    }
}
