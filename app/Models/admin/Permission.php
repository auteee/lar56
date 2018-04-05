<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $table='admin_permission';
    protected $fillable = [
        'pid',
        'permission',
        'name',
        'to',
        'show',
        'icon',
        'sort',
        'description'
    ];
    //多对多，权限和角色之间
    public function roles(){
        return $this->belongsToMany(Roles::class,'admin_role_permission','permission_id','role_id');
    }
}
