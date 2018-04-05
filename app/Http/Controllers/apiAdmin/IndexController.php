<?php

namespace App\Http\Controllers\apiAdmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    //
    //    public function __construct(){
    //        $this->middleware('api');
    //    }
    public function getUserInfo(Request $request){
        //dd($request->user('api'));
        return $request->user('api');
    }
}
