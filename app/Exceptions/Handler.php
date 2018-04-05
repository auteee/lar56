<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {

        //dd($exception);

        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        //对422错误进行json处理以便于 ajax 可以获取 数据
        //$exception->getMessage() 默认 -->'The given data was invalid'
        //e-cw error-cuowu 中英文提示
        if ($request->expectsJson()) {
            //这段代码参考 parent::render 提前对 json数据进行了处理
            if($exception instanceof ValidationException){
                return response()->json([
                    'message' => empty($exception->getMessage()) ? '^_^出错了' : 'e-cw:无效数据',
                    'errors' => $exception->errors(),
                    'success'=>0,
                    'status_code'=>$exception->status
                ]);
            }
        }


        return parent::render($request, $exception);
    }

    /**
     * //将登陆者转到相应页面 未登录异常处理-->来源
     * @param \Illuminate\Http\Request $request
     * @param AuthenticationException $exception
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function Unauthenticated($request, AuthenticationException $exception){

        //appserve中加入api报头
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        if(in_array('admin', $exception->guards())) {
            return redirect()->guest('/admin/login');
        }
        return redirect()->guest('login');
    }

    //public function ValidationException($request, )
}
