<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\api\ApiContorller;
use Validator;


class LoginController extends ApiContorller
{
    //

    public function login(Request $request){
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

        $credentials = $this->credentials($request);
        //dd($credentials);
        //dd($this->guard());
        //dd($this->guard('api')->attempt($credentials, $request->has('remember')));
        if ($this->guard('api-admin')->attempt($credentials, $request->has('remember'))) {
            return $this->sendLoginResponse($request);
        }

        return response()->json([
           'errors'=>1,
           'message'=>'login failed',
           'statue_code'=>401
        ]);
        //return $this->failed('login failed',401);

    }



}
