<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ranks')->insert([
            'name' => '未設定',
            'number' => null,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'アイアン',
            'number' => '1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'アイアン',
            'number' => '2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'アイアン',
            'number' => '3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'ブロンズ',
            'number' => '1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'ブロンズ',
            'number' => '2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'ブロンズ',
            'number' => '3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'シルバー',
            'number' => '1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'シルバー',
            'number' => '2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'シルバー',
            'number' => '3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'ゴールド',
            'number' => '1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'ゴールド',
            'number' => '2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'ゴールド',
            'number' => '3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'プラチナ',
            'number' => '1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'プラチナ',
            'number' => '2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'プラチナ',
            'number' => '3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'ダイヤ',
            'number' => '1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'ダイヤ',
            'number' => '2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'ダイヤ',
            'number' => '3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'アセンダント',
            'number' => '1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'アセンダント',
            'number' => '2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'アセンダント',
            'number' => '3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'イモータル',
            'number' => '1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);


        DB::table('ranks')->insert([
            'name' => 'イモータル',
            'number' => '2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'イモータル',
            'number' => '3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        DB::table('ranks')->insert([
            'name' => 'レディアント',
            'number' => null,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),

        ]);
    }
}
