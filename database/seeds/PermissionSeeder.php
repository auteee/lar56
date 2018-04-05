<?php

use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data=date("Y-m-d h:i:s");
        \DB::select(
<<<SQL
        INSERT INTO `kk_admin_permission` (`id`, `pid`, `permission`,`name`, `to`,`show` ,`icon`, `description`, `created_at`, `updated_at`)
        VALUES
         (1, 0,'admin.permission',          '权限管理','','1',                          'fa-twitter', '',   '2016-05-21 10:06:50', '2016-06-22 13:49:09'),
         (2, 1,'admin.permission.index',    '权限列表','permission/index',  1, '',          '',   '2017-01-04 03:05:00', '2017-01-04 15:14:58'),
         (3, 1,'admin.permission.create',   '权限添加','permission/create', 0, '', '', '$data', '$data'),
         (4, 1,'admin.permission.edit',     '权限修改','permission/edit',   0, '', '', '$data', '$data'),
         (5, 1,'admin.permission.destroy ', '权限删除','permission/edit',   0, '', '', '$data', '$data'),
         (6, 1,'admin.role.index',          '角色列表','role/index',        1,'', '', '$data', '$data'),
         (7, 1,'admin.role.create',         '角色添加', '',                 0,'', '', '$data', '$data'),
         (8, 1, 'admin.role.edit',          '角色修改', '',                 0, '','', '$data', '$data'),
         (9, 1, 'admin.role.destroy',       '角色删除','',                  0,'', '', '$data', '$data'),
         (10, 1, 'admin.user.index',        '用户管理','admin/user/index',  1,'', '', '$data', '$data'),
         (11, 1, 'admin.user.create',       '用户添加','',                  0,'', '', '$data', '$data'),
         (12, 1, 'admin.user.edit',         '用户编辑', '',                 0,'', '', '$data', '$data'),
         (13, 1, 'admin.user.destroy',      '用户删除','',                  0,'', '','$data', '$data');
SQL
);

    }
}
