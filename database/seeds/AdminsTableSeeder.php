<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data=date("Y-m-d h:i:s");
        DB::table('admins')->insert([[
            'id'=>1,
            'name' => 'root',
            'email' => 'root@root.com',
            'password' => bcrypt('1234569'),
            'created_at'=>'2016-12-30',
            'updated_at'=>$data
        ],[
            'id'=>2,
            'name' => 'test',
            'email' => 'test@test.com',
            'password' => bcrypt('123456'),
            'created_at'=>'2016-12-30',
            'updated_at'=>$data
        ]]);
    }
}
