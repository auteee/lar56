<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminPermissionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_permission', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('pid')->default(0)->comment('父级菜单');
            $table->string('permission',60)->comment('权限标识');
            $table->string('name',60)->comment('权限/菜单名称');
            $table->string('to')->nullable()->comment('菜单连接');
            $table->boolean('show')->default(0)->ccomment('是否显示在导航');
            $table->string('icon',60)->nullable()->comment('图标');
            $table->tinyInteger('sort')->default(0)->comment('菜单排序');
            $table->string('description')->nullable()->comment('描述与备注');
            $table->timestamps();
            $table->index('permission');
            $table->index('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_permission');
    }
}
