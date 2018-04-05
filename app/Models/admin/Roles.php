<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    protected $table='admin_roles';
    protected $fillable = [
        'role',
        'description',
    ];

    //与权限关联
    public function permissions()
    {
        return $this->belongsToMany(Permission::class,'admin_role_permission','role_id','permission_id');
    }

    //与用户关联
    public function users()
    {
        return $this->belongsToMany(Admin::class,'admin_role_id','role_id','admin_id');
    }

    //给角色添加权限
    public function givePermissionTo($permission)
    {
        //dd($this->permissions()->toSql());
        return $this->permissions()->save($permission);
    }

    //角色权限整体添加与修改
    public function givePermissionsTo(array $permissionId){
        $this->permissions()->detach();
        $permissions=Permission::whereIn('id',$permissionId)->get();
        foreach ($permissions as $v){
            $this->givePermissionTo($v);
        }
        return true;
    }
}
