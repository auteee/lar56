<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data=date("Y-m-d h:i:s");
        User::query()->truncate();
        User::create([
            'name' => 'user1',
            'email' => 'user1@us.co',
            'password' => bcrypt('123456'),
            'created_at'=>$data,
            'updated_at'=>$data
        ]);
        User::create([
            'name' => 'user2',
            'email' => 'user2@us.co',
            'password' => bcrypt('123456'),
            'created_at'=>$data,
            'updated_at'=>$data
        ]);
//        $data=date("Y-m-d h:i:s");
//        DB::table('users')->insert([[
//            'id'=>1,
//            'name' => 'user1',
//            'email' => 'user1@us.co',
//            'password' => bcrypt('123456'),
//            'created_at'=>$data,
//            'updated_at'=>$data
//        ],[
//            'id'=>2,
//            'name' => 'user2',
//            'email' => 'user2@us.co',
//            'password' => bcrypt('123456'),
//            'created_at'=>$data,
//            'updated_at'=>$data
//        ]]);
    }
}
