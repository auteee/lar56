<?php

namespace App\Http\Middleware;

use Closure;
use Route,URL,Auth;

class AdminAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$guard = null)
    {
        //dd(Auth::guard('admin')->user());
        if(Auth::guard('api-admin')->user()->id === 1){
            return $next($request);
        }
        $previousUrl = URL::previous();
        $routeName=Route::currentRouteName();
        $current=stripos($routeName,'admin.');   // admin. 是否在当前路由名字的第一个位置
        if($current!==0){
            $routeName='admin.'.$routeName;
        }
        //echo route('name');
        if(!\Gate::check($routeName)) {
            if($request->ajax() && ($request->getMethod() != 'GET')) {
                return response()->json([
                    'status' => -1,
                    'code' => 403,
                    'msg' => '您没有权限执行此操作'
                ]);
            } else {
                return response()->view('admin.errors.403', compact('previousUrl'));
            }
        }
        return $next($request);
    }
}
