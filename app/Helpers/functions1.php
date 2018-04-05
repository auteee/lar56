<?php
/**
 * Created by PhpStorm. DESE:   OK 在用 NO 同类其他方法未用
 * User: Administrator
 * Date: 2016/12/29
 * Time: 21:53
 */

/**
 * By dongFeng  Desc: 去除数组中值为 null的元素   OK
 * @param $arr
 * @return mixed
 */
function trims($arr){
    foreach ($arr as $k=>$v){
        if($v===null){
            unset($arr[$k]);
        }
    }
    return $arr;
}

/**
 * By dongFeng  Desc: array_filter 回调函数，过滤掉键值为null的数组   NO
 * @param $v
 * @return bool
 */
function trims1($v){
    return $v!==null;
}

/**
 * By dongFeng  Desc: ok
 * @param $arrs
 * @param int $pid
 * @return array|string
 */
function diGui($arrs,$pid=0){
    $arr = [];
    if (empty($arrs)) {
        return '';
    }
    foreach ($arrs as $key => $v) {
        if ($v['pid'] == $pid) {
            $arr[$key] = $v;
            $arr[$key]['child'] = diGui($arrs,$v['id']);
        }
    }
    return $arr;
}

/**
 * By dongFeng  Desc: 递归分类PID下的所有子分类数组 ok
 * @param $arrs
 * @param int $pid
 * @return array|int
 */
function getSubCat($arrs,$pid=0){
    $strArr=[];
    if (empty($arrs)) {
        return -1;
    }
    foreach ($arrs as $k=>$v){
        if ($v['pid'] == $pid) {
            array_push($strArr,$v['id']);
            getSubCat($arrs,$v['id']);
        }
    }
    return $strArr;
}

/**
 * By dongFeng  dsce:无限父子分类树中获取子分类的顶级ID  ok
 * @param $arr
 * @param $id
 * @return mixed
 */

function getTopId($arr,$id){
    static $list=[];
    foreach ($arr as $u){
        $list[$u['id']]=$u['pid'];
    }
    while ($list[$id]){
        $id=$list[$id];
    }
    return $id;
}
/////////////////////////////////////////////////////////////////////////////
/**
 * 递归获取父级分类
 * return $list 二维数组，用于构建面包导航
 * @param $arr
 * @param int $id
 * @return array
 */
function getPrent1($arr,$pid){
    static $list=array();
    static $coun=0;
    foreach ($arr as $u){
        if($u['id']==$pid){
            $list[]=$u;
            //array_push($list,$u);
            if($u['pid']>0){
                getPrent($arr,$u['pid']);
            }
        }
        $coun++;
    }
    $list['coun']=$coun;
    return $list;
}
// 同上面的一个功能
function getPrent($arr,$pid){
    static $list=array();
    //static $coun=0;
    foreach ($arr as $k=>$v){
        if($v['id']==$pid){
            $list[]=$v;
            if($v['pid']>0){
                getPrent($arr,$v['pid']);
            }
        }
    }
    array_multisort($list,SORT_ASC);
    foreach ($list as $u){
        $u['url']='category/'.$u['cat_tag'];
    }
    return $list;
}
/**
 * 创建父节点树形数组
 * 参数
 * $ar 数组，邻接列表方式组织的数据
 * $id 数组中作为主键的下标或关联键名
 * $pid 数组中作为父键的下标或关联键名
 * 返回 多维数组
 **/
function find_parent($arr, $id='id', $pid='pid') {
    foreach($arr as $v) $t[$v[$id]] = $v;
    foreach ($t as $k => $item){
        if( $item[$pid] ){
            if( ! isset($t[$item[$pid]]['parent'][$item[$pid]]) )
                $t[$item[$id]]['parent'][$item[$pid]] =& $t[$item[$pid]];
        }
    }
    return $t;
}
/**
 * 创建子节点树形数组
 * 参数
 * $ar 数组，邻接列表方式组织的数据
 * $id 数组中作为主键的下标或关联键名
 * $pid 数组中作为父键的下标或关联键名
 * 返回 多维数组
 **/
function find_child($ar, $id='id', $pid='pid') {
    foreach($ar as $v) $t[$v[$id]] = $v;
    foreach ($t as $k => $item){
        if( $item[$pid] ) {
            $t[$item[$pid]]['child'][$item[$id]] =& $t[$k];
        }
    }
    return $t;
}
/**
 * 返回可读性更好的文件尺寸
 */
function human_filesize($bytes, $decimals = 2)
{
    $size = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];
    $factor = floor((strlen($bytes) - 1) / 3);

    return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) .@$size[$factor];
}

/**
 * 判断文件的MIME类型是否为图片
 */
function is_image($mimeType)
{
    return starts_with($mimeType, 'image/');
}

//PHP无限极分类生成树方法，巧在引用
function generateTree($items){
    $tree = array();
    foreach($items as $item){
        if(isset($items[$item['pid']])){
            $items[$item['pid']]['son'][] = &$items[$item['id']];
        }else{
            $tree[] = &$items[$item['id']];
        }
    }
    return $tree;
}
//上面生成树方法还可以精简到5行：
function generateTree1($items){
    foreach($items as $item)
        $items[$item['pid']]['son'][$item['id']] = &$items[$item['id']];
    return isset($items[0]['son']) ? $items[0]['son'] : array();
}
//$items = array(
//    1 => array('id' => 1, 'pid' => 0, 'name' => '安徽省'),
//    2 => array('id' => 2, 'pid' => 0, 'name' => '浙江省'),
//    3 => array('id' => 3, 'pid' => 1, 'name' => '合肥市'),
//    4 => array('id' => 4, 'pid' => 3, 'name' => '长丰县'),
//    5 => array('id' => 5, 'pid' => 1, 'name' => '安庆市'),
//);
//print_r(generateTree($items));


/**
 * 递归实现无限极分类
 * @param $array 分类数据
 * @param $pid 父ID
 * @param $level 分类级别
 * @return $list 分好类的数组 直接遍历即可 $level可以用来遍历缩进
 */

function getTree($array, $pid =0, $level = 0){

    //声明静态数组,避免递归调用时,多次声明导致数组覆盖
    static $list = [];
    foreach ($array as $key => $value){
        //第一次遍历,找到父节点为根节点的节点 也就是pid=0的节点
        if ($value['pid'] == $pid){
            //父节点为根节点的节点,级别为0，也就是第一级
            $value['level'] = $level;
            //把数组放到list中
            $list[] = $value;
            //把这个节点从数组中移除,减少后续递归消耗
            unset($array[$key]);
            //开始递归,查找父ID为该节点ID的节点,级别则为原级别+1
            getTree($array, $value['id'], $level+1);

        }
    }
    return $list;
}

//引用算法
function generateTree2($array){
    //第一步 构造数据
    $items = array();
    foreach($array as $value){
        $items[$value['id']] = $value;
    }
    //第二部 遍历数据 生成树状结构
    $tree = array();
    foreach($items as $key => $value){
        if(isset($items[$item['pid']])){
            $items[$item['pid']]['son'][] = &$items[$key];
        }else{
            $tree[] = &$items[$key];
        }
    }
    return $tree;
}

