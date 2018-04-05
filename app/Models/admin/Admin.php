<?php

namespace App\Models\admin;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class Admin extends Authenticatable
{
    use HasApiTokens, Notifiable;
    protected $table='admins';

    //默认填充字段
    protected $fillable = ['name', 'email', 'password'];
    //默认隐藏字段
    protected $hidden = ['password', 'remember_token'];

    //用户角色
    public function roles(){
        return $this->belongsToMany(Roles::class,'admin_roles','admin_id','role_id');
    }

    // 给用户分配角色
    public function assignRole($role)
    {
        return $this->roles()->save($role);
    }

    //角色整体添加与修改
    public function giveRoleTo(array $RoleId){
        $this->roles()->detach();
        $roles=Roles::whereIn('id',$RoleId)->get();
        foreach ($roles as $v){
            $this->assignRole($v);
        }
        return true;
    }

    // 判断用户是否具有某个角色
    public function hasRole($role){
        if (is_string($role)) {
            return $this->roles->contains('name', $role);
        }
        return !!$role->intersect($this->roles)->count();
    }

    // 判断用户是否具有某权限
    public function hasPermission($permission){
        if (is_string($permission)) {
            $permission = Permission::where('permission',$permission)->first();
            if (!$permission) return false;
        }
        return $this->hasRole($permission->roles);
    }

    //判断是否有权限用于菜单
    public function hasMenuPermission($permission){
        if (is_string($permission)) {
            $permission = Permission::where('permission',$permission)->first();
            if (!$permission) return false;
        }
        return true;
    }
}
