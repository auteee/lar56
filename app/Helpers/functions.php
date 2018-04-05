<?php
/**
 * Created by PhpStorm.
 * User: Xcui.
 * Date: 18-3-30
 * Time: 上午12:31
 * Desc:自定义全局函数
 */

/**
 * @param array $data   //附加返回数据
 * @param string $message
 * @param int $success
 * @param string $stat_code
 * @return array
 * 返回数组，最后会格式化成json
 */
function makeResArr($message='OK',$success=1,$data=[],$stat_code=''){
    return [
        'resdata'=>$data,
        'success'=>$success,
        'message'=>$message,
        'stat_code'=>$stat_code
    ];
}

