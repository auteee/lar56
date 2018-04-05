<?php

namespace App\Http\Middleware;

use Closure;

class AddJsonToAcceptMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if ($request->is('api/*')) {
            $accept = $request->header('Accept');

            if (! str_contains($accept, ['/json', '+json'])) {
                $accept = rtrim('application/json,'.$accept, ',');

                $request->headers->set('Accept', $accept);
                $request->server->set('HTTP_ACCEPT', $accept);
                $_SERVER['HTTP_ACCEPT'] = $accept;
            }
        }
        return $next($request);
    }
}
