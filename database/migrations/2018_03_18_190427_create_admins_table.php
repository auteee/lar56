<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->increments('id')->comment('管理员ID');
            $table->string('name',60)->comment('用户名');
            $table->string('email',60)->unique()->comment('邮箱');
            $table->string('password');
            $table->string('avatar')->nullable()->comment('用户头像');
            $table->rememberToken();
            $table->ipAddress('visitor')->nullable()->comment('用户登录IP');
            //$table->string('api_token', 64)->unique()->comment('api-token');
            $table->timestamps();
            $table->index('email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
