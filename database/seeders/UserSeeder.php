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
            'name' => '太郎#0001',
            'profile' => 'よく使うキャラはジェットです。デュエリイストの他にはイニシエーターが使えます！　土日はいつでもできるので時間が合う方は一緒にやりましょう！',
            'email'=>'aaa@gmail.com',
            'password'=>Hash::make('aaiiuueeoo'),
            'age'=>10,
            'moral'=>null,
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

        DB::table('users')->insert([
            'name' => 'aisu#0002',
            'profile' => 'キャラクターはレイナが得意です！他のロールは苦手です…　火、木、土、日にのんびりカジュアルを回してるので一緒にやりましょう！',
            'email'=>'aaabbb@gmail.com',
            'password'=>Hash::make('aaiiuueeoo2'),
            'age'=>10,
            'moral'=>null,
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

        DB::table('users')->insert([
            'name' => 'エイムゴリラ#0003',
            'profile' => 'よくフェニックスを使いますが、なんでも使えるので合わせピックできます！夜中ならいつでもできるので誘ってください！',
            'email'=>'aaabbbccc@gmail.com',
            'password'=>Hash::make('aaiiuueeoo2'),
            'age'=>10,
            'moral'=>null,
            'sns1'=>'https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j69i60l4j5l3.2043j0j1&sourceid=chrome&ie=UTF-8',
            'sns2'=>'https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j69i60l4j5l3.2043j0j1&sourceid=chrome&ie=UTF-8',
            'image_path'=>null,
            'rank_id'=>2,
            'role_id'=>2,
            'time_id'=>2,
            'stance_id'=>3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),


        ]);

        DB::table('users')->insert([
            'name' => 'エイムゴるラ#0004',
            'profile' => '初心者です！まだよくわかってないことが多いですがジェットを練習中です！いろいろ教えていただけると嬉しいです！休みの日はいつでもできるのでどんどん誘ってほしいです！',
            'email'=>'aaabbbccc2@gmail.com',
            'password'=>Hash::make('aaiiuueeoo23'),
            'age'=>90,
            'moral'=>null,
            'sns1'=>'https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j69i60l4j5l3.2043j0j1&sourceid=chrome&ie=UTF-8',
            'sns2'=>'https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j69i60l4j5l3.2043j0j1&sourceid=chrome&ie=UTF-8',
            'image_path'=>null,
            'rank_id'=>2,
            'role_id'=>2,
            'time_id'=>2,
            'stance_id'=>1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),


        ]);

    }
}

