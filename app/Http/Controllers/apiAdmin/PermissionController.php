<?php

namespace App\Http\Controllers\apiAdmin;

use App\Http\Requests\PermissionRequest;
use App\Models\admin\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class PermissionController extends Controller
{
    //获取权限列表
    public function index(){
        //父级菜单
        $parentMenu=Permission::select('id as value','name as title')->where('pid',0)->get()->toArray();
        array_unshift($parentMenu,['value'=>0,'title'=>'顶级权限菜单']);
        //获取所有权限列表
        $permissions= Cache::get(config('admin.globals.cache.permissionList'))? : $this->sortPermissionSetCache();
        //$permissions=$this->sortPermissionSetCache();
        return ['permissions'=>$permissions,'parentMenu'=>$parentMenu];
    }

    //显示单个信息
    public function show($id){
        $res=Permission::where('id',$id)->first();
        if($res['pid']!=0){
            $res2=Permission::find($res['pid']);  //父级菜单
            $res['pid']=$res2['name'];
        }else{
            $res['pid']='顶级权限菜单';
        }
        return $res;
    }
    //编辑 EDIT
    public function edit($id){
        $menu =Permission::find($id)->toArray();
        if ($menu) {
            return $menu;
        }
        return makeResArr('加载权限菜单失败',0);
    }
    //添加存储
    public function store(PermissionRequest $request){
        //
        $menu=Permission::create($request->all());
        if($menu){
            $this->sortMenuSetCache();   //重新缓存
            $this->sortPermissionSetCache();
            $resdata=$this->index();
            return makeResArr('修改权限菜单成功',1,$resdata);
        }else{
            $res=makeResArr('添加权限菜单失败',0);
        }
        return response()->json($res);
    }
    //更新
    public function update(PermissionRequest $request){

        $menu = Permission::find($request->id);
        if ($menu) {
            $isUpdate = $menu->update($request->all());
            if ($isUpdate) {
                $this->sortMenuSetCache();
                $this->sortPermissionSetCache();
                //直接返回父级菜单和权限菜单，前台页面不用在次刷新了。
                $resdata=$this->index();
                return makeResArr('修改权限菜单成功',1,$resdata);
            }
            return makeResArr('修改权限菜单失败',0);
        }
        return makeResArr('权限菜单数据找不到',0);
    }

    //删除
    public function destroy($id){
        $child = Permission::where('pid', $id)->first();
        if($child){
            return makeResArr('有子级菜单，不能被删除',0);
        }
        $tag=Permission::find($id);
        foreach ($tag->roles as $v){
            $tag->roles()->detach($v->id);
        }
        if ($tag) {
            $tag->delete();
            $this->sortMenuSetCache();   //重新缓存
            $this->sortPermissionSetCache();
            $resdata=$this->index();
            return makeResArr('删除成功',1,$resdata);
        }
        return makeResArr('删除失败',0);
    }


    /*
     * 获取所有权限列表
     */
    public function getAllPermissionMenu(){
        if (Cache::has(config('admin.globals.cache.permissionList'))) {
            return Cache::get(config('admin.globals.cache.permissionList'));
        }
        return $this->sortPermissionSetCache();
    }
    /**
     * [getMenuList description]
     * @author 晚黎
     * @date   2016-08-10
     * @return [type]     [description]
     */
    public function getPermissionMenu()
    {
        // 判断数据是否缓存
//        if (Cache::has(config('admin.globals.cache.menuList'))) {
//            return Cache::get(config('admin.globals.cache.menuList'));
//        }
        return $this->sortMenuSetCache();
    }
    
    
 ///////////////////////////////////////
    ///
    /*
	 * 获取所有权限列表 并排序
	 */
    public function sortPermissionSetCache(){
        $permission = Permission::orderBy('sort','desc')->get()->toArray();

        if($permission){
            $permissionList = $this->sortMenu($permission);
            foreach ($permissionList as $key => &$v) {
                if (isset($v['children'])) {
                    $sort = array_column($v['children'], 'sort');
                    array_multisort($sort,SORT_DESC,$v['children']);
                }
            }
            Cache::forever(config('admin.globals.cache.permissionList'),$permissionList);
            //dd($permission);
            return $permissionList;
        }
        return '';
    }
    /**
     * 排序子菜单并缓存
     * @author 晚黎
     * @date   2016-08-09
     * @param  string     $value [description]
     * @return [type]            [description]
     */
    public function sortMenuSetCache()
    {
        $menus = Permission::where('show', 1)
            ->orWhere('pid','0')
            ->orderBy('sort','desc')->get()->toArray();
        if ($menus) {
            $permissionMenu = $this->sortMenu($menus);
            foreach ($permissionMenu as $key => &$v) {
                if (isset($v['children'])) {
                    $sort = array_column($v['children'], 'sort');
                    array_multisort($sort,SORT_DESC,$v['children']);
                }
            }
            // 缓存菜单数据
            Cache::forever(config('admin.globals.cache.permissionMenu'),$permissionMenu);
            //dd($permissionMenu);
            return $permissionMenu;
        }
        return '';
    }
    /**
     * @param $menus
     * @param string $active
     * @param int $pid
     * @return array|string
     * desc:递归菜单数据
     */
    public function sortMenu($arr,$pid=0,$active=''){
        $tree=[];
        foreach ($arr as $k=>$v){
            if ($v['pid'] == $pid){
                if(\Gate::check($v['permission']) || $pid==0){
                    $v['open']=false;
                    if($v['permission']==$active){
                        $v['open']=true;
                    }
                    $tem=self::sortMenu($arr,$v['id'],$active='');
                    $tem && $v['children']=$tem;
                    //$v['children'] = self::sortMenu($arr,$v['id'],$active='');
                    $tree[] = $v;
                    unset($arr[$k]);
                }
            }
        }
        return $tree;
    }


    //下面的输出格式有差错
    public function sortMenu1($menus,$active='',$pid=0)
    {
        //dd($menus);
        $arr = [];
        if (empty($menus)) return '';

        foreach ($menus as $key => $v) {
            //echo $pid."<br/>";
            if ($v['pid'] == $pid) {
                if(\Gate::check($v['permission']) || $pid==0){
                    $arr[$key] = $v;
                    $arr[$key]['open']=false;
                    if($v['permission']==$active){
                        $arr[$key]['open']=true;
                    }
                    //$tem=self::sortMenu($menus,$active,$v['id']);
                    //$tem && $arr[$key]['children']=$tem;
                    $arr[$key]['children'] = self::sortMenu($menus,$active,$v['id']);
                }
            }
        }
        return $arr;
    }
}
