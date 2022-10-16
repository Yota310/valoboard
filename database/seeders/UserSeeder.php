<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{

    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'こんちは',
            'profile' => '今晩',
            'email'=>'aaa@gmail.com',
            'password'=>Hash::make('aaiiuueeoo'),
            'age'=>10,
            'moral'=>1,
            'sns1'=>'https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j69i60l4j5l3.2043j0j1&sourceid=chrome&ie=UTF-8',
            'sns2'=>'https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j69i60l4j5l3.2043j0j1&sourceid=chrome&ie=UTF-8',
            'image_path'=>null,
            'rank_id'=>1,
            'role_id'=>1,
            'time_id'=>1,
            'stance_id'=>1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('users')->insert([
            'name' => 'aisu',
            'profile' => 'uma',
            'email'=>'aaabbb@gmail.com',
            'password'=>Hash::make('aaiiuueeoo2'),
            'age'=>10,
            'moral'=>1,
            'sns1'=>'https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j69i60l4j5l3.2043j0j1&sourceid=chrome&ie=UTF-8',
            'sns2'=>'https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j69i60l4j5l3.2043j0j1&sourceid=chrome&ie=UTF-8',
            'image_path'=>null,
            'rank_id'=>2,
            'role_id'=>2,
            'time_id'=>2,
            'stance_id'=>2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),


        ]);
    }
}

