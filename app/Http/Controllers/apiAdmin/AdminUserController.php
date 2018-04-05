<?php

namespace App\Http\Controllers\apiAdmin;

use App\Models\admin\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminUserController extends Controller
{
    //
    public function index(){
        $userList = Admin::select(['id','name','email','visitor','created_at','updated_at'])
            ->paginate();

        return $userList;

    }


    public function getUserInfo(Request $request){
        //$userinfo=$request->user('api-admin');
        return $request->user('api-admin');
    }
}
